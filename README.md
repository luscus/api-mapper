# api-mapper

[![NPM version](https://img.shields.io/npm/v/api-mapper.svg?style=flat)](https://www.npmjs.com/package/api-mapper "View this project on NPM")
[![NPM downloads](https://img.shields.io/npm/dm/api-mapper.svg?style=flat)](https://www.npmjs.com/package/api-mapper "View this project on NPM")
[![NPM license](https://img.shields.io/npm/l/api-mapper.svg?style=flat)](https://www.npmjs.com/package/api-mapper "View this project on NPM")
[![flattr](https://img.shields.io/badge/flattr-donate-yellow.svg?style=flat)](http://flattr.com/thing/3817419/luscus-on-GitHub)

![coverage](https://rawgit.com/luscus/api-mapper/master/reports/coverage.svg)
[![David](https://img.shields.io/david/luscus/api-mapper.svg?style=flat)](https://david-dm.org/luscus/api-mapper)
[![David](https://img.shields.io/david/dev/luscus/api-mapper.svg?style=flat)](https://david-dm.org/luscus/api-mapper#info=devDependencies)



## Installation

### Node Dependency

Execute following line

    npm install package.root --save

### Require module

    var root = require('package.root');

## Usage

    var map = null;
    
    mapper.map('/absolut/path/to/api/root', function (apiMap) {
      map = apiMap;
    });


-------------------
Copyright (c) 2016 Luscus (luscus.redbeard@gmail.com)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
