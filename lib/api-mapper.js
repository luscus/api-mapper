'use strict';

var Crawler = require('fs-crawler');
var verbs   = require('./http/verbs');
var path    = require('path');

exports.map = function map (apiAbsolutePath, callback) {

  var apiMap  = exports.getApiInfo(apiAbsolutePath);
  var options = {
    root: apiAbsolutePath,
    maxDepth: 0
  };

  var crawler = new Crawler(options);
  crawler.setEncoding('utf8');

  crawler.on('data', function processApiParts (data) {
    data = JSON.parse(data);

    if (!data.isDirectory) {
      var filepath  = data.path.replace(options.root, '');
      var extention = path.extname(filepath);
      var filename  = path.basename(filepath, extention);
      var route     = path.dirname(filepath);
      var verbinfo  = null;

      if (verbs.isHttpVerb(filename)) {
        verbinfo = verbs.getOptions(data.path);
      }

      if (!apiMap.routes[route] && verbinfo) {
        // add new route
        apiMap.routes[route] = exports.getRouteInfo(route);;
      }

      if (verbinfo) {
        // extend existing route
        apiMap.routes[route].verbs[filename] = verbinfo;
      }
    }

    crawler.read();
  });

  crawler.on('end', function mappingEnded (data) {
    callback(apiMap, data);
  });

  crawler.read();
};

exports.getRouteInfo = function getRouteInfo(route) {
  var routeInfo     = {
    verbs: {}
  };

  // search route for path arguments
  var pathArguments = [];
  route.substr(1).split('/').forEach(function pathPartIterator (pathPart, index) {
    if (/^\$[a-zA-Z0-9-_]+$/.test(pathPart)) {
      // argument found
      pathArguments.push({
        argument: pathPart.substr(1),
        position: index
      });
    }
  });

  if (pathArguments) {
    routeInfo.arguments = pathArguments;
  }

  var regex = route
              .replace(/\$[a-zA-Z0-9-_]+/g,'\$[a-zA-Z0-9-_]+')
              .replace('/', '\/');
  routeInfo.regex = new RegExp('^' + regex + '$');

  return routeInfo;
};

exports.getApiInfo = function getApiInfo(apiAbsolutePath) {
  var apiInfo     = require(apiAbsolutePath + path.sep + 'api.json');
  var packageInfo = require(apiAbsolutePath + path.sep + 'package.json');

  if (!apiInfo.name) {
    apiInfo.name = packageInfo.name || path.basename(apiAbsolutePath);
  }

  if (!apiInfo.description) {
    apiInfo.description = packageInfo.description;
  }

  apiInfo.version    = packageInfo.version;
  apiInfo.homepage   = packageInfo.homepage ||
    packageInfo.repository &&
    packageInfo.repository.url
      .replace('git:', 'https:')
      .replace('.git', '');

  // initialise route storage
  apiInfo.routes = {};

  return apiInfo;
};
