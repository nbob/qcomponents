import React from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';
import { ClassNameMixin } from '../Mixins/';

class Tab extends React.Component {

    static componentName = 'tab-item';

    static propTypes = {
        id: React.PropTypes.string.isRequired,
        onClick: React.PropTypes.func,
        to: React.PropTypes.string,
        className: React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.arrayOf(React.PropTypes.string),
            React.PropTypes.objectOf(React.PropTypes.string)
        ]),
    };

    static contextTypes = {
        tabId: React.PropTypes.string.isRequired,
        onTabClick: React.PropTypes.func.isRequired
    };

    handleClick(e) {
        this.context.onTabClick(this);
    }

    render() {
        let classes = classNames(this.getClassNames(), {
            'active': this.context.tabId == this.props.id
        });
        let link = this.props.to ? (
            <Link to={this.props.to}>
                {this.props.children}
            </Link>
        ) : (<a>{this.props.children}</a>);
        return (
            <div onClick={this.handleClick.bind(this)} className={classes}>
                {link}
            </div>
        );
    }
}

export default ClassNameMixin(Tab);
