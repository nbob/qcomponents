import React from 'react';
import { ClassNameMixin } from '../Mixins/';

class ModalContent extends React.Component {

    static componentName = 'modal-content';

    render() {
        return (
            <div className={this.getClassNames()}>
                {this.props.children}
            </div>
        );
    }
}

export default ClassNameMixin(ModalContent);
