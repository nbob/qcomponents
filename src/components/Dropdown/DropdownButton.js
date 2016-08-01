import React from 'react';
import { ClassNameMixin } from '../Mixins';

class DropdownButton extends React.Component {

    static componentName = 'dropdown-button';

    static contextTypes = {
        onDropownButtonClick: React.PropTypes.func.isRequired,
        onDropDownButtonMount: React.PropTypes.func.isRequired,
    }

    componentDidMount() {
        this.context.onDropDownButtonMount(this);
    }

    render() {
        return (
            <div
                    className={this.getClassNames()}
                    ref={el => this._el = el}
                    onClick={this.context.onDropownButtonClick}>
                {this.props.children}
            </div>
        )
    }
}

export default ClassNameMixin(DropdownButton);
