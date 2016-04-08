'use strict';

const fs = require('fs');
const path = require('path');

exports.load = function load(moduleBasePath) {
    var loaded = [];

    try {
        // TODO replace fs with crawler
        var modules = fs.readdirSync(moduleBasePath);
    }
    catch (exception) {
        if (exception.code === 'ENOENT') {
            return loaded;
        }
        else {
            throw exception;
        }
    }

    modules.forEach(function (moduleFileName) {
        var modulePath = moduleBasePath + path.sep + moduleFileName;
        var moduleInfo = require(modulePath);

       loaded.push(moduleInfo);
    });

    return loaded;
};
