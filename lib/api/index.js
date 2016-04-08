'use strict';

var path    = require('path');

exports.endpoint   = require('./endpoint');
exports.module     = require('./module');
exports.route      = require('./route');

exports.getInfo = function getInfo(apiAbsolutePath) {
    var apiInfo     = require(apiAbsolutePath + path.sep + 'ApiConfig');
    var packageInfo = require(apiAbsolutePath + path.sep + '..' + path.sep + '..' + path.sep + 'package.json');

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
