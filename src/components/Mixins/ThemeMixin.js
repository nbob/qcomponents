import React from 'react';
import classNames from 'classnames';

export default (ComposedComponent) => {

    if (!ComposedComponent.contextTypes) {
        ComposedComponent.contextTypes = {};
    }
    ComposedComponent.contextTypes['theme'] = React.PropTypes.string;

    ComposedComponent.prototype._classReducers.push(function() {
        if (!this.context.theme) {
            return '';
        }
        let themes = this.context.theme.split(' ').filter(Boolean);
        return themes.map(
            theme => `q-${this.constructor.componentName}-${theme}`
        ).join(" ");
    });

    return ComposedComponent;

};
