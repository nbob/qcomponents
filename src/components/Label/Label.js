import React from 'react';
import { ClassNameMixin, ThemeMixin } from '../Mixins';

class Label extends React.Component {

    static componentName = 'label';

    render() {
        return (
            <div className={this.getClassNames()}>
                {this.props.children}
            </div>
        )
    }
}

export default ThemeMixin(ClassNameMixin(Label));
