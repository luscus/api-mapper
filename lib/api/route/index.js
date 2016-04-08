'use strict';

var path    = require('path');

exports.getInfo = function getInfo(route, apiRoot) {
    var routeInfo     = {
        verbs: {}
    };

    // search route for path arguments
    var parameters = [];
    route.substr(1).split('/').forEach(function pathPartIterator (pathPart, index) {
        if (/^\$[a-zA-Z0-9-_]+$/.test(pathPart)) {
            // argument found
            parameters.push({
                name:     pathPart.substr(1),
                position: index
            });
        }
    });

    if (parameters) {
        routeInfo.parameters = parameters;
    }

    var regex = '\/'+ apiRoot + route
        .replace(/\$[a-zA-Z0-9-_]+/g,'[a-zA-Z0-9-_]+')
        .replace('/', '\/');
    routeInfo.regex = new RegExp('^' + regex + '$');

    return routeInfo;
};
