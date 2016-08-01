import React from 'react';
import { ClassNameMixin } from '../Mixins';

class DropdownItem extends React.Component {

    static contextTypes = {
        onDropownItemClick: React.PropTypes.func,
    }

    render() {
        return (
            <li
                    onClick={this.context.onDropownItemClick}
                    className="q-dropdown-item">
                {this.props.children}
            </li>
        )
    }
}

export default ClassNameMixin(DropdownItem);
