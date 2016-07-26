import React from 'react';
import { ClassNameMixin } from '../Mixins/';

class TabList extends React.Component {

    static componentName = 'tab-list';

    render() {
        return (
            <div className={this.getClassNames()}>
                {this.props.children}
            </div>
        );
    }
}

export default ClassNameMixin(TabList);
