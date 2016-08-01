'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _lang = require('lodash/lang');

var isArray = Array.isArray;


function jsToSassString(value) {

    function _jsToSassString(value) {
        var initialIndentLevel = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

        var indentLevel = initialIndentLevel;

        switch (typeof value === 'undefined' ? 'undefined' : _typeof(value)) {
            case 'boolean':
            case 'number':
                return value.toString();
            case 'string':
                return value;
            case 'object':
                if ((0, _lang.isPlainObject)(value)) {
                    var _ret = function () {
                        indentLevel += 1;
                        var indent = indentsToSpaces(indentLevel);

                        var jsObj = value;
                        var sassKeyValPairs = [];

                        sassKeyValPairs = Object.keys(jsObj).reduce(function (result, key) {
                            var jsVal = jsObj[key];
                            var sassVal = _jsToSassString(jsVal, indentLevel);

                            if (isNotUndefined(sassVal)) {
                                result.push(key + ': ' + sassVal);
                            }
                            return result;
                        }, []);

                        var result = '(\n' + (indent + sassKeyValPairs.join(',\n' + indent)) + '\n' + indentsToSpaces(indentLevel - 1) + ')';
                        indentLevel -= 1;
                        return {
                            v: result
                        };
                    }();

                    if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
                } else if (isArray(value)) {
                    var sassVals = [];
                    var _iteratorNormalCompletion = true;
                    var _didIteratorError = false;
                    var _iteratorError = undefined;

                    try {
                        for (var _iterator = value[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                            var v = _step.value;

                            if (isNotUndefined(v)) {
                                sassVals.push(_jsToSassString(v, indentLevel));
                            }
                        }
                    } catch (err) {
                        _didIteratorError = true;
                        _iteratorError = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion && _iterator.return) {
                                _iterator.return();
                            }
                        } finally {
                            if (_didIteratorError) {
                                throw _iteratorError;
                            }
                        }
                    }

                    return '(' + sassVals.join(', ') + ',' + ')';
                } else if (isNull(value)) return 'null';else return value.toString();
            default:
                return;
        }
    }

    return _jsToSassString(value);
}

function indentsToSpaces(indentCount) {
    return Array(indentCount + 1).join('  ');
}

function isNull(value) {
    return value === null;
}

function isNotUndefined(value) {
    return typeof value !== 'undefined';
}

exports.default = jsToSassString;
module.exports = exports['default'];