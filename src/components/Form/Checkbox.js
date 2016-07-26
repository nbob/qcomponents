import React from 'react';
import { ClassNameMixin } from '../Mixins';

class Checkbox extends React.Component {

    static componentName = 'checkbox';

    static propTypes = {
        master: React.PropTypes.bool,
    };

    static contextTypes = {
        selectAll: React.PropTypes.func,
        addCheckbox: React.PropTypes.func,
    };

    getValue() {
        return this._el.checked;
    }

    handleChange(ev) {
        if (this.props.master) {
            this.context.selectAll(ev.target.checked);
        }
        if (this.props.onChange) {
            this.props.onChange(ev);
        }
    }

    setValue(checked) {
        this._el.checked = checked;
    }

    render() {
        if (this.context.addCheckbox && !this.props.master) {
            this.context.addCheckbox(this);
        }
        return (
            <input
                    className={this.getClassNames()}
                    type="checkbox"
                    ref={el => this._el = el}
                    onChange={this.handleChange.bind(this)}/>
        );
    }
}

export default ClassNameMixin(Checkbox);
