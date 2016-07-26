import React from 'react';
import classnames from 'classnames';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { ClassNameMixin } from '../Mixins';

class TabPanelContainer extends React.Component {

    static componentName = 'tab-panel-container';

    render() {
        return (
            <div className={this.getClassNames()}>
                {this.props.children}
            </div>
        );
    }
}

export default ClassNameMixin(TabPanelContainer);
