'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Tab = require('./Tab');

var _Tab2 = _interopRequireDefault(_Tab);

var _TabPanel = require('./TabPanel');

var _TabPanel2 = _interopRequireDefault(_TabPanel);

var _TabPanelContainer = require('./TabPanelContainer');

var _TabPanelContainer2 = _interopRequireDefault(_TabPanelContainer);

var _nodeUuid = require('node-uuid');

var _nodeUuid2 = _interopRequireDefault(_nodeUuid);

var _castArray = require('lodash/castArray');

var _castArray2 = _interopRequireDefault(_castArray);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Tabs = _react2.default.createClass({
    displayName: 'Tabs',

    propTypes: {
        onTabChange: _react2.default.PropTypes.func,
        needReconcil: _react2.default.PropTypes.bool,
        tabId: _react2.default.PropTypes.string
    },
    handleTabChange: function handleTabChange(tabId) {
        this.setActiveTab(tabId);
    },
    getDefaultProps: function getDefaultProps() {
        return { needReconcil: false };
    },
    onTabClick: function onTabClick(el) {
        if (el.props.id != this.props.tabId) {
            if (this.props.onChange) {
                this.props.onChange(el.props.panelId) && this.handleTabChange(el.props.id);
            } else {
                this.handleTabChange(el.props.panelId);
            }
        }
    },
    addTab: function addTab(el) {
        if (el) {
            this._tabs.push(el);
        }
    },
    setPanelContainer: function setPanelContainer(el) {
        if (el) {
            this._panelContainer = el;
        }
    },
    setActiveTab: function setActiveTab(tabId) {
        this._tabs.forEach(function (el) {
            return el.setActiveState(el.props.id == tabId);
        });
        this._panelContainer.setActiveTab(tabId);
    },
    shouldComponentUpdate: function shouldComponentUpdate(nextProps) {
        if (this.props.needReconcil) {
            return true;
        } else {
            if (nextProps.panelId != this.props.panelId) {
                this.setActiveTab(nextProps.panelId);
            }
            return false;
        }
    },
    patchTabsAndPanels: function patchTabsAndPanels(nodes) {
        var _this = this;

        if (!nodes) {
            return;
        }
        nodes = (0, _castArray2.default)(nodes);
        var self = this;
        var children = [],
            tabId = this.props.tabId;
        _react2.default.Children.forEach(nodes, function (child) {
            var isTab = child.type == _Tab2.default,
                isPanelContainer = child.type == _TabPanelContainer2.default;
            var props = props = _extends({
                key: _nodeUuid2.default.v4()
            }, child.props);
            var a = _TabPanelContainer2.default;
            if (isTab) {
                props['onClick'] = _this.onTabClick;
                props['key'] = 'tab_' + props.id;
                props['ref'] = _this.addTab;
                if (_this.props.tabId == child.props.id) {
                    props['active'] = true;
                }
            } else if (isPanelContainer) {
                // props['ref'] = this.setPanelContainer;
                props['tabId'] = tabId;
            } else if (child.props && child.props.children) {
                props['children'] = _this.patchTabsAndPanels(child.props.children);
            }
            child = _react2.default.cloneElement(child, props);
            children.push(child);
        });
        return children;
    },
    render: function render() {
        this._tabs = [];
        this._panelContainer = null;
        var chilTree = this.patchTabsAndPanels(this.props.children);
        return _react2.default.createElement(
            'div',
            { className: 'tabs' },
            chilTree
        );
    }
});

exports.default = Tabs;
module.exports = exports['default'];