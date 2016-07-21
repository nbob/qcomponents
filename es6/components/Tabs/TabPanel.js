import React from 'react';
import classnames from 'classnames';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

var TabPanel = React.createClass({
    displayName: 'TabPanel',
    getInitialState: function getInitialState() {
        return { active: this.props.active };
    },
    setActiveState: function setActiveState(active) {
        this.setState({ active: active });
    },
    render: function render() {
        var classes = classnames(this.props.className, 'tab-panel', {
            'hidden': !this.state.active
        });
        return React.createElement(
            'div',
            { className: classes },
            this.props.children
        );
    }
});

export default TabPanel;