'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Mixins = require('../Mixins');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tabs = function (_React$Component) {
    _inherits(Tabs, _React$Component);

    function Tabs() {
        _classCallCheck(this, Tabs);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Tabs).apply(this, arguments));
    }

    _createClass(Tabs, [{
        key: 'getChildContext',
        value: function getChildContext() {
            return {
                tabId: this._tabId || this.props.tabId,
                onTabClick: this.onTabClick.bind(this)
            };
        }
    }, {
        key: 'componentWillUpdate',
        value: function componentWillUpdate(nextProps) {
            if (nextProps.tabId != this.props.tabId) {
                this._tabId = nextProps.tabId;
            }
        }
    }, {
        key: 'onTabClick',
        value: function onTabClick(el) {
            if (el.props.id != this._tabId) {
                if (this.props.onChange) {
                    if (this.props.onChange(el.props.id)) {
                        this._tabId = el.props.id;
                        this.forceUpdate();
                    }
                } else {
                    this._tabId = el.props.id;
                    this.forceUpdate();
                }
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: this.getClassNames() },
                this.props.children
            );
        }
    }]);

    return Tabs;
}(_react2.default.Component);

Tabs.componentName = 'tabs';
Tabs.propTypes = {
    onTabChange: _react2.default.PropTypes.func,
    tabId: _react2.default.PropTypes.string
};
Tabs.childContextTypes = {
    tabId: _react2.default.PropTypes.string,
    onTabClick: _react2.default.PropTypes.func
};
exports.default = (0, _Mixins.ThemeMixin)((0, _Mixins.ClassNameMixin)(Tabs));
module.exports = exports['default'];