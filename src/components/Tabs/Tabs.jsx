import React from 'react';
import Tab from './Tab.jsx';
import TabPanel from './TabPanel.jsx';
import TabPanelContainer from './TabPanelContainer.jsx';
import uuid from 'node-uuid';
import castArray from 'lodash/castArray';
import classnames from 'classnames';

const Tabs = React.createClass({
    propTypes: {
        onTabChange: React.PropTypes.func,
        needReconcil: React.PropTypes.bool,
        tabId: React.PropTypes.string
    },
    handleTabChange(tabId) {
        this.setActiveTab(tabId);
    },
    getDefaultProps() {
        return { needReconcil: false };
    },
    onTabClick(el) {
        if (el.props.id != this.props.tabId) {
            if (this.props.onChange) {
                this.props.onChange(el.props.panelId) && this.handleTabChange(el.props.id);
            } else {
                this.handleTabChange(el.props.panelId);
            }
        }
    },
    addTab(el) {
        if (el) {
            this._tabs.push(el);
        }
    },
    setPanelContainer(el) {
        if (el) {
            this._panelContainer = el;
        }
    },
    setActiveTab(tabId) {
        this._tabs.forEach(
            el => el.setActiveState(el.props.id == tabId)
        );
        this._panelContainer.setActiveTab(tabId);
    },
    shouldComponentUpdate(nextProps) {
        if (this.props.needReconcil) {
            return true;
        } else {
            if (nextProps.panelId != this.props.panelId) {
                this.setActiveTab(nextProps.panelId);
            }
            return false;
        }
    },
    patchTabsAndPanels(nodes) {
        if (!nodes) {
            return;
        }
        nodes = castArray(nodes);
        let self = this;
        let children = [],
            tabId = this.props.tabId;
        React.Children.forEach(nodes, child => {
            let isTab = child.type == Tab,
                isPanelContainer = child.type == TabPanelContainer;
            let props = props = {
                key: uuid.v4(),
                ...child.props,
            }
            let a = TabPanelContainer;
            if (isTab) {
                props['onClick'] = this.onTabClick;
                props['key'] = `tab_${props.id}`;
                props['ref'] = this.addTab;
                if (this.props.tabId == child.props.id) {
                    props['active'] = true;
                }
            } else if (isPanelContainer) {
                // props['ref'] = this.setPanelContainer;
                props['tabId'] = tabId;
            } else if (child.props && child.props.children) {
                props['children'] = this.patchTabsAndPanels(child.props.children);
            }
            child = React.cloneElement(child, props);
            children.push(child);
        });
        return children;
    },
    render() {
        this._tabs = [];
        this._panelContainer = null;
        const chilTree = this.patchTabsAndPanels(this.props.children);
        return (<div className="tabs">{chilTree}</div>);
    }
});

export default Tabs;
