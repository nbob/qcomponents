'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (ComposedComponent) {

    if (!ComposedComponent.contextTypes) {
        ComposedComponent.contextTypes = {};
    }
    ComposedComponent.contextTypes['theme'] = _react2.default.PropTypes.string;

    ComposedComponent.prototype._classReducers.push(function () {
        var _this = this;

        var themes = [];
        if (this.context.theme) {
            themes = themes.concat(this.context.theme.split(' ').filter(Boolean));
        }
        var propsThemes = (this.props.theme || '').split(' ').filter(Boolean);
        themes = themes.concat(propsThemes);
        return themes.map(function (theme) {
            return 'q-' + _this.constructor.componentName + '-' + theme;
        }).join(" ");
    });

    return ComposedComponent;
};

module.exports = exports['default'];