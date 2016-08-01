import React from 'react';
import classnames from 'classnames';
import { ClassNameMixin, ThemeMixin } from '../Mixins';

class InputText extends React.Component {

    static componentName = "input-text";

    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            value: props.value || ''
        };
    }

    getValue() {
        return this.state.value;
    }

    handleBlur() {
        this.setState({focused: false});
    }
    handleChange(ev) {
        this.setState({value: ev.target.value});
    }
    handleFocus() {
        this.setState({focused: true});
    }

    render() {
        let classes = [this.getClassNames()];
        if (this.state.focused) {
            classes.push('q-input-text-focused');
        }
        if (this.state.focused || this.state.value.trim()) {
            classes.push('q-input-text-label-up');
        }
        return (
            <div className={classnames(classes)}>
                <label>sadas</label>
                <input
                        type="text"
                        ref={el => this._el = el}
                        onFocus={this.handleFocus.bind(this)}
                        onBlur={this.handleBlur.bind(this)}
                        onChange={this.handleChange.bind(this)}
                        value={this.state.value}/>
            </div>
        )
    }
}

export default ThemeMixin(ClassNameMixin(InputText));
