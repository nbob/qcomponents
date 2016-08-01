import React from 'react';
import { ClassNameMixin } from '../Mixins/';

class ModalCloseButton extends React.Component {

    static componentName = 'modal-close-button';

    static contextTypes = {
        closeModal: React.PropTypes.func.isRequired
    };

    handleClick(ev) {
        this.context.closeModal(ev);
    }

    render() {
        return (
            <span className={this.getClassNames()} onClick={this.handleClick.bind(this)}>
                {this.props.children}
            </span>
        );
    }
}

export default ClassNameMixin(ModalCloseButton);
