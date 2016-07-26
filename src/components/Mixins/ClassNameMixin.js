import React from 'react';
import classNames from 'classnames';

export default (ComposedComponent) => {

    ComposedComponent.prototype._classReducers = [];

    ComposedComponent.prototype.getClassNames = function() {
        let classes = [];
        for (let f of this._classReducers) {
            classes.push(f.bind(this)());
        }
        if (this.props.className) {
            classes.push(this.props.className);
        }
        classes.push(`q-${this.constructor.componentName}`);
        return classNames(classes);
    };
    return ComposedComponent;
};
