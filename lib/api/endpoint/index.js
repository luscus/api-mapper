'use strict';

const path    = require('path');

exports.verb = require('./verb');

exports.getInfo = function getInfo(endpointAbsolutePath) {
  var endpointConfig  = require(endpointAbsolutePath);
  
  endpointConfig.name       = path.basename(endpointAbsolutePath);

  return endpointConfig;
};
