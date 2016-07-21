import React from 'react';
import classnames from 'classnames';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import TabPanel from './TabPanel';

// class TabPanelContainer extends React.Component {
const TabPanelContainer = React.createClass({
    // constructor(props) {
    //     // super(props);
    //     this.state = {
    //         tabId: props.tabId
    //     };
    //     this._panels = [];
    // },
    getInitialState() {
        return { tabId: this.props.tabId };
    },

    componentWillMount() {
        this._panels = [];
        React.Children.forEach(this.props.children, (child, i) => {
            if (child.type !== TabPanel) {
                console.warn(`
                    You should use only <TabPanel> component
                    inside <TabPanelContainer>`);
                return;
            }
            this._panels.push(React.cloneElement(child, {key: i}));
        });
    },
    setActiveTab(tabId) {
        this.setState({tabId});
    },
    render() {
        const classes = classnames(this.props.className, 'tab-panel-container');
        let tabId = this.state.tabId;
        let activePanel = this._panels.find(item => tabId == item.props.id);
        return (
            <div className={classes}>
                <ReactCSSTransitionGroup
                        transitionName="tab-panel"
                        transitionEnterTimeout={300}
                        transitionLeaveTimeout={300}>
                    {activePanel}
                </ReactCSSTransitionGroup>
            </div>
        );
    }
})

export default TabPanelContainer;
