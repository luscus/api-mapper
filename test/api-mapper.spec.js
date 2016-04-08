'use strict';

var expect  = require('chai').expect;
var mapper  = require('../lib/api-mapper');
var map;

describe('[' + __filename.substring(__filename.indexOf('/test/') + 1) + '] - mapper ', function() {
  before(function (done) {
    mapper.map(__dirname + '/RESTfs-api-test', function (apiMap) {
      map = apiMap;
      done();
    });
  });

  it('should return an Object', function () {
    console.log(map);
    console.log(map.routes['/path/to/some/$element-id/endpoint']);
  });
});
