import React from 'react';
import { ClassNameMixin } from '../Mixins';

class MultiCheckbox extends React.Component {

    static childContextTypes = {
        selectAll: React.PropTypes.func,
        addCheckbox: React.PropTypes.func,
    }

    getChildContext() {
        return {
            selectAll: this.selectAll.bind(this),
            addCheckbox: this.addCheckbox.bind(this)
        };
    }

    addCheckbox(el) {
        this._checkboxes.push(el);
    }

    getValue() {
        let res = [];
        return this._checkboxes.map(el => {
            return {
                id: el.props.id,
                checked: el.getValue()
            }
        });
    }

    selectAll(val) {
        for (let el of this._checkboxes) {
            el.setValue(val);
        }
    }

    render() {
        this._checkboxes = [];
        return (this.props.children);
    }
}

export default MultiCheckbox;
