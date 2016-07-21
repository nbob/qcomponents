'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactAddonsCssTransitionGroup = require('react-addons-css-transition-group');

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Tab = _react2.default.createClass({
    displayName: 'Tab',

    propTypes: {
        id: _react2.default.PropTypes.string.isRequired,
        onClick: _react2.default.PropTypes.func,
        to: _react2.default.PropTypes.string,
        className: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.string), _react2.default.PropTypes.objectOf(_react2.default.PropTypes.string)])
    },
    getInitialState: function getInitialState() {
        return { active: this.props.active };
    },
    setActiveState: function setActiveState(active) {
        this.setState({ active: active });
    },
    handleClick: function handleClick(e) {
        this.props.onClick(this);
    },
    render: function render() {
        var classes = (0, _classnames2.default)('tab-item', {
            'active': this.state.active
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
            { onClick: this.handleClick, className: classes },
            link
        );
    }
});

exports.default = Tab;
module.exports = exports['default'];