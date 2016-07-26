import React from 'react';
import classnames from 'classnames';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { ClassNameMixin } from '../Mixins';

class TabPanel extends React.Component {

    static componentName = 'tab-panel';

    static propTypes = {
        id: React.PropTypes.string.isRequired,
        className: React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.arrayOf(React.PropTypes.string),
            React.PropTypes.objectOf(React.PropTypes.string)
        ]),
    };

    static contextTypes = {
        tabId: React.PropTypes.string.isRequired,
    };

    render() {
        const classes = classnames(this.getClassNames(), {
            'hidden': this.context.tabId != this.props.id
        });
        return (<div className={classes}>{this.props.children}</div>);
    }
}

export default ClassNameMixin(TabPanel);
