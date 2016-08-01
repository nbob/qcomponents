import React from 'react';
import { ClassNameMixin } from '../Mixins/';

class ModalHeader extends React.Component {

    static componentName = 'modal-header';

    render() {
        return (
            <div className={this.getClassNames()}>
                {this.props.children}
            </div>
        );
    }

}

export default ClassNameMixin(ModalHeader);
