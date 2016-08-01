'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _values2 = require('lodash/values');

var _values3 = _interopRequireDefault(_values2);

var _Mixins = require('qcomponents/lib/components/Mixins');

var _Utils = require('../Utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DropdownList = function (_React$Component) {
    _inherits(DropdownList, _React$Component);

    function DropdownList(props) {
        _classCallCheck(this, DropdownList);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(DropdownList).call(this, props));

        _this.props = props;
        _this.state = {
            open: false
        };
        return _this;
    }

    _createClass(DropdownList, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.context.onDropDownListMount(this);
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            var btnEl = this.state.btnEl,
                direction = this.state.direction,
                open = this.state.open;

            if (open) {
                var allAligns = [];
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = Object.keys(DropdownList.directionPositionMap.vertical)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var vDir = _step.value;
                        var _iteratorNormalCompletion2 = true;
                        var _didIteratorError2 = false;
                        var _iteratorError2 = undefined;

                        try {
                            for (var _iterator2 = Object.keys(DropdownList.directionPositionMap.horizontal)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                                var hDir = _step2.value;

                                var vPosition = DropdownList.directionPositionMap.vertical[vDir],
                                    hPosition = DropdownList.directionPositionMap.horizontal[hDir];
                                if (vDir == direction[0] && hDir == direction[1]) {
                                    allAligns.splice(0, 0, [vPosition, hPosition]);
                                } else {
                                    allAligns.push([vPosition, hPosition]);
                                }
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

                var coords = _Utils.Coords.calcWindowOffsets(btnEl, this._el, (0, _values3.default)(DropdownList.directionPositionMap.vertical), (0, _values3.default)(DropdownList.directionPositionMap.horizontal));
                var pos = _Utils.Coords.getClientPosition(coords, allAligns);
                var newCoords = [coords.vertical[pos.vertical], coords.horizontal[pos.horizontal]];

                this._el.style.top = newCoords[0].offset.top + 'px';
                this._el.style.left = newCoords[1].offset.left + 'px';
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var classes = (0, _classnames2.default)([this.getClassNames(), {
                'q-dropdown-list-open': this.state.open
            }]);
            return _react2.default.createElement(
                'ul',
                { className: classes, ref: function ref(el) {
                        return _this2._el = el;
                    } },
                this.props.children
            );
        }
    }]);

    return DropdownList;
}(_react2.default.Component);

DropdownList.componentName = 'dropdown-list';
DropdownList.directionPositionMap = {
    vertical: {
        'top': ['top', 'bottom'],
        'bottom': ['bottom', 'top']
    },
    horizontal: {
        'left': ['right', 'right'],
        'right': ['left', 'left']
    }
};
DropdownList.contextTypes = {
    onDropDownListMount: _react2.default.PropTypes.func.isRequired
};
exports.default = (0, _Mixins.ClassNameMixin)(DropdownList);
module.exports = exports['default'];