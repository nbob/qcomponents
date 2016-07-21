'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactAddonsCssTransitionGroup = require('react-addons-css-transition-group');

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TabPanel = _react2.default.createClass({
    displayName: 'TabPanel',
    getInitialState: function getInitialState() {
        return { active: this.props.active };
    },
    setActiveState: function setActiveState(active) {
        this.setState({ active: active });
    },
    render: function render() {
        var classes = (0, _classnames2.default)(this.props.className, 'tab-panel', {
            'hidden': !this.state.active
        });
        return _react2.default.createElement(
            'div',
            { className: classes },
            this.props.children
        );
    }
});

exports.default = TabPanel;
module.exports = exports['default'];