import React from 'react';
import classnames from 'classnames';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const TabPanel = React.createClass({
    getInitialState() {
        return {active: this.props.active}
    },
    setActiveState(active) {
        this.setState({active});
    },
    render() {
        const classes = classnames(this.props.className, 'tab-panel', {
            'hidden': !this.state.active
        });
        return (<div className={classes}>{this.props.children}</div>);
    }
});

export default TabPanel;
