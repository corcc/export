"use strict";
var cwd = process.cwd;
var p = function (path) {
    return require('path').join(cwd(), path);
};
var oe = Object.entries;
var importPaths = [
    '/dist',
    '/index'
];
importPaths.forEach(function (importPath) {
    var _ = require(p("".concat(importPath)));
    console.info('importPath :');
    console.info('', importPath);
    oe(_).forEach(function (_a) {
        var functionName = _a[0], functionValue = _a[1];
        if (!functionValue || !(functionValue instanceof Function)) {
            return;
        }
        var params = require('./Param').params;
        params = params[functionName];
        var result = functionValue(params);
        console.warn('', '', "".concat(functionName, " :"));
        console.info('', '', '', result);
    });
});
