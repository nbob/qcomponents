'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _sortBy2 = require('lodash/sortBy');

var _sortBy3 = _interopRequireDefault(_sortBy2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var positions = {
    horizontal: ['left', 'center', 'right'],
    vertical: ['top', 'middle', 'bottom']
};

var fullPositions = {
    horizontal: [],
    vertical: []
};
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = Object.keys(positions)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var axis = _step.value;
        var _iteratorNormalCompletion6 = true;
        var _didIteratorError6 = false;
        var _iteratorError6 = undefined;

        try {
            for (var _iterator6 = positions[axis][Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
                var masterSide = _step6.value;
                var _iteratorNormalCompletion7 = true;
                var _didIteratorError7 = false;
                var _iteratorError7 = undefined;

                try {
                    for (var _iterator7 = positions[axis][Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
                        var slaveDirection = _step7.value;

                        fullPositions[axis].push([masterSide, slaveDirection]);
                    }
                } catch (err) {
                    _didIteratorError7 = true;
                    _iteratorError7 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion7 && _iterator7.return) {
                            _iterator7.return();
                        }
                    } finally {
                        if (_didIteratorError7) {
                            throw _iteratorError7;
                        }
                    }
                }
            }
        } catch (err) {
            _didIteratorError6 = true;
            _iteratorError6 = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion6 && _iterator6.return) {
                    _iterator6.return();
                }
            } finally {
                if (_didIteratorError6) {
                    throw _iteratorError6;
                }
            }
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

var Coords = function () {
    function Coords() {
        _classCallCheck(this, Coords);
    }

    _createClass(Coords, null, [{
        key: '__getBaseRect',
        value: function __getBaseRect(masterRect, slaveEl) {
            return {
                left: masterRect.left,
                top: masterRect.top,
                width: slaveEl.offsetWidth,
                height: slaveEl.offsetHeight
            };
        }
    }, {
        key: 'getVSideDiff',
        value: function getVSideDiff(el, side) {
            switch (side) {
                case 'top':
                    return 0;
                case 'bottom':
                    return el.height;
                case 'middle':
                    return el.height / 2;
            }
        }
    }, {
        key: 'getHSideDiff',
        value: function getHSideDiff(el, side) {
            switch (side) {
                case 'left':
                    return 0;
                case 'right':
                    return el.width;
                case 'center':
                    return el.width / 2;
            }
        }
    }, {
        key: 'alignVertical',
        value: function alignVertical(master, slave, position) {
            var resultPosition = {
                offset: {},
                windowOffset: {}
            };
            var yDiff = Coords.getVSideDiff(master, position[0]);
            yDiff -= Coords.getVSideDiff(slave, position[1]);

            resultPosition.offset.top = master.offset.top + yDiff;
            resultPosition.windowOffset.top = master.windowOffset.top + yDiff;
            resultPosition.windowOffset.bottom = window.innerHeight - resultPosition.windowOffset.top - slave.height;

            return resultPosition;
        }
    }, {
        key: 'alignHorizontal',
        value: function alignHorizontal(master, slave, position) {
            var resultPosition = {
                offset: {},
                windowOffset: {}
            };
            var xDiff = Coords.getHSideDiff(master, position[0]);
            xDiff -= Coords.getHSideDiff(slave, position[1]);

            resultPosition.offset.left = master.offset.left + xDiff;
            resultPosition.windowOffset.left = master.windowOffset.left + xDiff;
            resultPosition.windowOffset.right = window.innerWidth - resultPosition.windowOffset.left - slave.width;

            return resultPosition;
        }
    }, {
        key: 'calcWindowOffsets',
        value: function calcWindowOffsets(masterEl, slaveEl) {
            var vAlign = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];
            var hAlign = arguments.length <= 3 || arguments[3] === undefined ? null : arguments[3];

            var master = {
                offset: {
                    left: masterEl.offsetLeft,
                    top: masterEl.offsetTop
                },
                windowOffset: {
                    left: masterEl.getBoundingClientRect().left,
                    top: masterEl.getBoundingClientRect().top
                },
                width: masterEl.offsetWidth,
                height: masterEl.offsetHeight
            };
            var slave = {
                width: slaveEl.offsetWidth,
                height: slaveEl.offsetHeight
            };
            var hPositions = {};
            var hPositionTypes = Coords.positions.horizontal;
            if (hAlign) {
                hPositionTypes = hAlign;
            }
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = hPositionTypes[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var hPos = _step2.value;

                    hPositions[hPos] = Coords.alignHorizontal(master, slave, hPos);
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                        _iterator2.return();
                    }
                } finally {
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }

            var vPositions = {};
            var vPositionTypes = Coords.positions.vertical;
            if (vAlign) {
                vPositionTypes = vAlign;
            }
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
                for (var _iterator3 = vPositionTypes[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                    var vPos = _step3.value;

                    vPositions[vPos] = Coords.alignVertical(master, slave, vPos);
                }
            } catch (err) {
                _didIteratorError3 = true;
                _iteratorError3 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion3 && _iterator3.return) {
                        _iterator3.return();
                    }
                } finally {
                    if (_didIteratorError3) {
                        throw _iteratorError3;
                    }
                }
            }

            return {
                horizontal: hPositions,
                vertical: vPositions,
                width: slave.width,
                height: slave.height
            };
        }
    }, {
        key: 'getClientPosition',
        value: function getClientPosition(coords, aligns) {
            var horizontal = coords.horizontal;
            var vertical = coords.vertical;


            var vAligns = aligns.map(function (align) {
                return align[0];
            });

            var newVAlign = vAligns[0];
            var sumOverflowCurrent = 0;
            var wOffsetCurrent = vertical[newVAlign];
            if (wOffsetCurrent.top < 0) {
                sumOverflowCurrent -= wOffsetCurrent.top;
            }
            if (wOffsetCurrent.bottom < 0) {
                sumOverflow -= wOffsetCurrent.bottom;
            }

            var _iteratorNormalCompletion4 = true;
            var _didIteratorError4 = false;
            var _iteratorError4 = undefined;

            try {
                for (var _iterator4 = vAligns[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                    var vAlign = _step4.value;

                    var wOffset = vertical[vAlign].windowOffset;
                    if (wOffset.bottom > 0 && wOffset.top > 0) {
                        newVAlign = vAlign;
                        break;
                    } else {
                        var _sumOverflow = 0;
                        if (wOffset.top < 0) {
                            _sumOverflow -= wOffset.top;
                        }
                        if (wOffset.bottom < 0) {
                            _sumOverflow -= wOffset.bottom;
                        }

                        if (_sumOverflow < sumOverflowCurrent) {
                            sumOverflowCurrent = _sumOverflow;
                            newVAlign = vAlign;
                        }
                    }
                }
            } catch (err) {
                _didIteratorError4 = true;
                _iteratorError4 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion4 && _iterator4.return) {
                        _iterator4.return();
                    }
                } finally {
                    if (_didIteratorError4) {
                        throw _iteratorError4;
                    }
                }
            }

            var hAligns = aligns.filter(function (align) {
                return align[0][0] == newVAlign[0] && align[0][1] == newVAlign[1];
            });
            hAligns = (0, _sortBy3.default)(hAligns, function (align) {
                var weight = 0;
                if (aligns[0][1][0] == align[1][0]) {
                    weight++;
                }
                if (aligns[0][1][1] == align[1][1]) {
                    weight++;
                }
                return -weight;
            }).map(function (align) {
                return align[1];
            });

            var newHAlign = hAligns[0];
            sumOverflowCurrent = 0;
            wOffsetCurrent = horizontal[newHAlign];
            if (wOffsetCurrent.left < 0) {
                sumOverflowCurrent -= wOffsetCurrent.left;
            }
            if (wOffsetCurrent.right < 0) {
                sumOverflow -= wOffsetCurrent.right;
            }

            var _iteratorNormalCompletion5 = true;
            var _didIteratorError5 = false;
            var _iteratorError5 = undefined;

            try {
                for (var _iterator5 = hAligns[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                    var hAlign = _step5.value;

                    var _wOffset = horizontal[hAlign].windowOffset;
                    if (_wOffset.left > 0 && _wOffset.right > 0) {
                        newHAlign = hAlign;
                        break;
                    } else {
                        var _sumOverflow2 = 0;
                        if (_wOffset.left < 0) {
                            _sumOverflow2 -= _wOffset.left;
                        }
                        if (_wOffset.right < 0) {
                            _sumOverflow2 -= _wOffset.right;
                        }

                        if (_sumOverflow2 < sumOverflowCurrent) {
                            sumOverflowCurrent = _sumOverflow2;
                            newHAlign = hAlign;
                        }
                    }
                }
            } catch (err) {
                _didIteratorError5 = true;
                _iteratorError5 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion5 && _iterator5.return) {
                        _iterator5.return();
                    }
                } finally {
                    if (_didIteratorError5) {
                        throw _iteratorError5;
                    }
                }
            }

            return {
                vertical: newVAlign,
                horizontal: newHAlign
            };
        }
    }]);

    return Coords;
}();

Coords.positions = fullPositions;
exports.default = Coords;
module.exports = exports['default'];