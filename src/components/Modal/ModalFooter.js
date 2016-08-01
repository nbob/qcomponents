import React from 'react';
import { ClassNameMixin } from '../Mixins/';

class ModalFooter extends React.Component {

    static componentName = 'modal-footer';

    render() {
        return (
            <div className={this.getClassNames()}>
                {this.props.children}
            </div>
        );
    }
}

export default ClassNameMixin(ModalFooter);
