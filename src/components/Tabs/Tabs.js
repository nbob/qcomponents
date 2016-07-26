import React from 'react';
import { ClassNameMixin, ThemeMixin } from '../Mixins';

class Tabs extends React.Component {

    static componentName = 'tabs';

    static propTypes = {
        onTabChange: React.PropTypes.func,
        tabId: React.PropTypes.string
    };

    static childContextTypes = {
        tabId: React.PropTypes.string,
        onTabClick: React.PropTypes.func
    }

    getChildContext() {
        return {
            tabId: this._tabId || this.props.tabId,
            onTabClick: this.onTabClick.bind(this)
        };
    }

    componentWillUpdate(nextProps) {
        if (nextProps.tabId != this.props.tabId) {
            this._tabId = nextProps.tabId;
        }
    }

    onTabClick(el) {
        if (el.props.id != this._tabId) {
            if (this.props.onChange) {
                if (this.props.onChange(el.props.id)) {
                    this._tabId = el.props.id;
                    this.forceUpdate();
                }
            } else {
                this._tabId = el.props.id;
                this.forceUpdate();
            }
        }
    }

    render() {
        return (<div className={this.getClassNames()}>{this.props.children}</div>);
    }

}

export default ThemeMixin(ClassNameMixin(Tabs));
