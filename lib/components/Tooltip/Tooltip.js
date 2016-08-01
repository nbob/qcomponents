'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactAddonsCssTransitionGroup = require('react-addons-css-transition-group');

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

var _pick2 = require('lodash/pick');

var _pick3 = _interopRequireDefault(_pick2);

var _toPairs2 = require('lodash/toPairs');

var _toPairs3 = _interopRequireDefault(_toPairs2);

var _maxBy2 = require('lodash/maxBy');

var _maxBy3 = _interopRequireDefault(_maxBy2);

var _values2 = require('lodash/values');

var _values3 = _interopRequireDefault(_values2);

var _Mixins = require('../Mixins');

var _Utils = require('../Utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tooltip = function (_React$Component) {
    _inherits(Tooltip, _React$Component);

    function Tooltip() {
        _classCallCheck(this, Tooltip);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Tooltip).apply(this, arguments));
    }

    _createClass(Tooltip, [{
        key: 'calcPosition',
        value: function calcPosition(el) {
            if (!el) {
                return;
            }

            var parentRect = this._parent.getBoundingClientRect(),
                elRect = el.getBoundingClientRect(),
                side = void 0;

            if (this.props.position == 'auto') {
                var position = (0, _pick3.default)(parentRect, ['top', 'right', 'bottom', 'left']);
                position['bottom'] = window.innerHeight - position['bottom'];
                position['right'] = window.innerWidth - position['right'];
                position = (0, _toPairs3.default)(position);
                side = (0, _maxBy3.default)(position, function (s) {
                    return s[1];
                })[0];
            } else {
                side = this.props.position;
            }
            var pos = {};
            if (side == 'top') {
                pos['top'] = -parentRect.height - elRect.height - this.props.padding;
                pos['left'] = (parentRect.width - elRect.width) / 2;
            } else if (side == 'bottom') {
                pos['top'] = this.props.padding;
                pos['left'] = (parentRect.width - elRect.width) / 2;
            } else if (side == 'left') {
                pos['top'] = -parentRect.height - (elRect.height - parentRect.height) / 2;
                pos['left'] = -elRect.width - this.props.padding;
            } else if (side == 'right') {
                pos['top'] = -parentRect.height - (elRect.height - parentRect.height) / 2;
                pos['left'] = parentRect.width + this.props.padding;
            }
            el.style.top = pos.top + 'px';
            el.style.left = pos.left + 'px';
            el.style.bottom = pos.bottom + 'px';
            el.style.right = pos.right + 'px';
        }
    }, {
        key: 'hideTooltip',
        value: function hideTooltip() {
            this._visible = false;
            this.forceUpdate();
        }
    }, {
        key: 'showTooltip',
        value: function showTooltip(ev) {
            if (ev.target == this._el) {
                return;
            }
            this._visible = true;
            this.forceUpdate();
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this._visible = false;
            this._parent = _reactDom2.default.findDOMNode(this).parentNode;
            this._parent.addEventListener('mouseover', this.showTooltip.bind(this));
            this._parent.addEventListener('mouseleave', this.hideTooltip.bind(this));
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this._parent.removeEventListener('mouseenter', this.showTooltip);
            this._parent.removeEventListener('mouseleave', this.hideTooltip);
        }
    }, {
        key: 'render',
        value: function render() {
            var tooltip = null;
            if (this._visible) {
                tooltip = _react2.default.createElement(
                    'div',
                    {
                        className: 'q-tooltip-container',
                        ref: this.calcPosition.bind(this) },
                    this.props.children
                );
            }
            return _react2.default.createElement(
                'div',
                { className: this.getClassNames() },
                _react2.default.createElement(
                    _reactAddonsCssTransitionGroup2.default,
                    {
                        transitionName: 'q-tooltip',
                        transitionEnterTimeout: 500,
                        transitionLeaveTimeout: 500 },
                    tooltip
                )
            );
        }
    }]);

    return Tooltip;
}(_react2.default.Component);

Tooltip.componentName = 'tooltip';
Tooltip.propTypes = {
    direction: _react2.default.PropTypes.oneOf(['auto', 'top', 'right', 'bottom', 'left']),
    padding: _react2.default.PropTypes.number
};
Tooltip.directionPositionMap = {
    'top': [['top', 'bottom'], ['center', 'center']],
    'bottom': [['bottom', 'top'], ['center', 'center']],
    'left': [['middle', 'middle'], ['left', 'right']],
    'right': [['middle', 'middle'], ['right', 'left']]
};
Tooltip.defaultProps = {
    position: 'top',
    padding: 5
};
exports.default = (0, _Mixins.ClassNameMixin)(Tooltip);
module.exports = exports['default'];