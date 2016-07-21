"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TabList = _react2.default.createClass({
    displayName: "TabList",
    render: function render() {
        return _react2.default.createElement(
            "div",
            { className: "tab-list" },
            this.props.children
        );
    }
});

exports.default = TabList;
module.exports = exports["default"];