import React from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const Tab = React.createClass({
    propTypes: {
        id: React.PropTypes.string.isRequired,
        onClick: React.PropTypes.func,
        to: React.PropTypes.string,
        className: React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.arrayOf(React.PropTypes.string),
            React.PropTypes.objectOf(React.PropTypes.string)
        ]),
    },
    getInitialState() {
        return {active: this.props.active};
    },
    setActiveState(active) {
        this.setState({active});
    },
    handleClick(e) {
        this.props.onClick(this);
    },
    render() {
        let classes = classNames('tab-item', {
            'active': this.state.active
        });
        let link = this.props.to ? (
            <Link to={this.props.to}>
                {this.props.children}
            </Link>
        ) : (<a>{this.props.children}</a>);
        return (
            <div onClick={this.handleClick} className={classes}>
                {link}
            </div>
        );
    }
});

export default Tab;
