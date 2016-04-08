'use strict';

var http = require('http');

exports.ALLOWED_VERBS = http.METHODS;

exports.isHttpVerb    = function isHttpVerb (candidate) {
  return (exports.ALLOWED_VERBS.indexOf(candidate.toString()) > -1);
};

exports.getOptions = function getOptions (verbpath) {
  var verb = require(verbpath);
  var info = {};

  info.plugable           = !!verb.plugable         || false;
  info.restricted         = verb.restricted         || false;
  info.description        = verb.description;
  info.accept             = verb.accept             || ['application/json'];
  info['accept-charset']  = verb['accept-charset']  || ['utf-8'];
  info['accept-encoding'] = verb['accept-encoding'];
  info['accept-language'] = verb['accept-language'];
  info.chain              = verb.chain;

  info.handler            = verb.handler;
  info.STATUS_CODES       = verb.STATUS_CODES;

  return info;
};
