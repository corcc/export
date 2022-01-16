"use strict";
exports.__esModule = true;
exports.getExportCommandFrom = exports.getExportCommand = void 0;
var loader_1 = require("@corcc/loader");
var oe = Object.entries;
function getExportCommand(_b) {
    var name = _b.name, value = _b.value;
    var _a = (function (_n, _v) {
        var V = function (v) {
            return v ? ('=' + "\"".concat(v, "\"")) : '';
        };
        var _c = "export \"".concat(_n, "\"").concat(V(_v));
        return _c;
    })(name, value);
    return _a;
}
exports.getExportCommand = getExportCommand;
function getExportCommandFrom(path) {
    var config = (0, loader_1.loadModule)(path).config;
    var _a = oe(config).map(function (_b) {
        var name = _b[0], value = _b[1];
        return getExportCommand({
            name: name,
            value: value
        });
    });
    return _a;
}
exports.getExportCommandFrom = getExportCommandFrom;
