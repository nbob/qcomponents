var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import Tab from './Tab.jsx';
import TabPanel from './TabPanel.jsx';
import TabPanelContainer from './TabPanelContainer.jsx';
import uuid from 'node-uuid';
import castArray from 'lodash/castArray';
import classnames from 'classnames';

var Tabs = React.createClass({
    displayName: 'Tabs',

    propTypes: {
        onTabChange: React.PropTypes.func,
        needReconcil: React.PropTypes.bool,
        tabId: React.PropTypes.string
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
        nodes = castArray(nodes);
        var self = this;
        var children = [],
            tabId = this.props.tabId;
        React.Children.forEach(nodes, function (child) {
            var isTab = child.type == Tab,
                isPanelContainer = child.type == TabPanelContainer;
            var props = props = _extends({
                key: uuid.v4()
            }, child.props);
            var a = TabPanelContainer;
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
            child = React.cloneElement(child, props);
            children.push(child);
        });
        return children;
    },
    render: function render() {
        this._tabs = [];
        this._panelContainer = null;
        var chilTree = this.patchTabsAndPanels(this.props.children);
        return React.createElement(
            'div',
            { className: 'tabs' },
            chilTree
        );
    }
});

export default Tabs;