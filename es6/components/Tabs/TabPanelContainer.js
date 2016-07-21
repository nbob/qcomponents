import React from 'react';
import classnames from 'classnames';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import TabPanel from './TabPanel.jsx';

// class TabPanelContainer extends React.Component {
var TabPanelContainer = React.createClass({
    displayName: 'TabPanelContainer',

    // constructor(props) {
    //     // super(props);
    //     this.state = {
    //         tabId: props.tabId
    //     };
    //     this._panels = [];
    // },
    getInitialState: function getInitialState() {
        return { tabId: this.props.tabId };
    },
    componentWillMount: function componentWillMount() {
        var _this = this;

        this._panels = [];
        React.Children.forEach(this.props.children, function (child, i) {
            if (child.type !== TabPanel) {
                console.warn('\n                    You should use only <TabPanel> component\n                    inside <TabPanelContainer>');
                return;
            }
            _this._panels.push(React.cloneElement(child, { key: i }));
        });
    },
    setActiveTab: function setActiveTab(tabId) {
        this.setState({ tabId: tabId });
    },
    render: function render() {
        var classes = classnames(this.props.className, 'tab-panel-container');
        var tabId = this.state.tabId;
        var activePanel = this._panels.find(function (item) {
            return tabId == item.props.id;
        });
        return React.createElement(
            'div',
            { className: classes },
            React.createElement(
                ReactCSSTransitionGroup,
                {
                    transitionName: 'tab-panel',
                    transitionEnterTimeout: 300,
                    transitionLeaveTimeout: 300 },
                activePanel
            )
        );
    }
});

export default TabPanelContainer;