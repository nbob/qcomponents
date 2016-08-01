import React from 'react';
import classNames from 'classnames';

export default (ComposedComponent) => {

    if (!ComposedComponent.contextTypes) {
        ComposedComponent.contextTypes = {};
    }
    ComposedComponent.contextTypes['theme'] = React.PropTypes.string;

    ComposedComponent.prototype._classReducers.push(function() {
        let themes = [];
        if (this.context.theme) {
            themes = themes.concat(this.context.theme.split(' ').filter(Boolean));
        }
        let propsThemes = (this.props.theme || '').split(' ').filter(Boolean);
        themes = themes.concat(propsThemes);
        return themes.map(
            theme => `q-${this.constructor.componentName}-${theme}`
        ).join(" ");
    });

    return ComposedComponent;

};
