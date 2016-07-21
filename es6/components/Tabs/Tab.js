import React from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

var Tab = React.createClass({
    displayName: 'Tab',

    propTypes: {
        id: React.PropTypes.string.isRequired,
        onClick: React.PropTypes.func,
        to: React.PropTypes.string,
        className: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.arrayOf(React.PropTypes.string), React.PropTypes.objectOf(React.PropTypes.string)])
    },
    getInitialState: function getInitialState() {
        return { active: this.props.active };
    },
    setActiveState: function setActiveState(active) {
        this.setState({ active: active });
    },
    handleClick: function handleClick(e) {
        this.props.onClick(this);
    },
    render: function render() {
        var classes = classNames('tab-item', {
            'active': this.state.active
        });
        var link = this.props.to ? React.createElement(
            Link,
            { to: this.props.to },
            this.props.children
        ) : React.createElement(
            'a',
            null,
            this.props.children
        );
        return React.createElement(
            'div',
            { onClick: this.handleClick, className: classes },
            link
        );
    }
});

export default Tab;