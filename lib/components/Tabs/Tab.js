'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Mixins = require('../Mixins/');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tab = function (_React$Component) {
    _inherits(Tab, _React$Component);

    function Tab() {
        _classCallCheck(this, Tab);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Tab).apply(this, arguments));
    }

    _createClass(Tab, [{
        key: 'handleClick',
        value: function handleClick(e) {
            this.context.onTabClick(this);
        }
    }, {
        key: 'render',
        value: function render() {
            var classes = (0, _classnames2.default)(this.getClassNames(), {
                'active': this.context.tabId == this.props.id
            });
            var link = this.props.to ? _react2.default.createElement(
                _reactRouter.Link,
                { to: this.props.to },
                this.props.children
            ) : _react2.default.createElement(
                'a',
                null,
                this.props.children
            );
            return _react2.default.createElement(
                'div',
                { onClick: this.handleClick.bind(this), className: classes },
                link
            );
        }
    }]);

    return Tab;
}(_react2.default.Component);

Tab.componentName = 'tab-item';
Tab.propTypes = {
    id: _react2.default.PropTypes.string.isRequired,
    onClick: _react2.default.PropTypes.func,
    to: _react2.default.PropTypes.string,
    className: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.string), _react2.default.PropTypes.objectOf(_react2.default.PropTypes.string)])
};
Tab.contextTypes = {
    tabId: _react2.default.PropTypes.string.isRequired,
    onTabClick: _react2.default.PropTypes.func.isRequired
};
exports.default = (0, _Mixins.ClassNameMixin)(Tab);
module.exports = exports['default'];