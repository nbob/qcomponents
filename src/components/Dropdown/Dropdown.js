import React from 'react';
import { ClassNameMixin } from '../Mixins';

class Dropdown extends React.Component {

    static componentName = "dropdown";

    constructor(props) {
        super(props);
        this.props = props;
        this.closeDropdown = this._closeDropdown.bind(this);
    }

    static propTypes = {
        direction: React.PropTypes.array
    }

    static defaultProps = {
        direction: ['bottom', 'left']
    }

    static childContextTypes = {
        onDropownButtonClick: React.PropTypes.func,
        onDropownItemClick: React.PropTypes.func,
        onDropDownButtonMount: React.PropTypes.func,
        onDropDownListMount: React.PropTypes.func
    }

    getChildContext() {
        return {
            onDropownItemClick: this.dropDownItemClick.bind(this),
            onDropownButtonClick: this.openDropdown.bind(this),
            onDropDownButtonMount: this.setDropdownButton.bind(this),
            onDropDownListMount: this.setDropdownList.bind(this),
        }
    }

    dropDownItemClick(ev) {
        if (this.props.onItemClick) {
            this.props.onItemClick(ev);
        }
    }

    setDropdownButton(el) {
        this._dropDownButton = el;
    }

    setDropdownList(el) {
        this._dropDownList = el;
    }

    _closeDropdown(ev) {
        this._dropDownList.setState({open: false});
        document.removeEventListener('click', this.closeDropdown);
    }
    openDropdown(ev) {
        if (!this._dropDownList.state.open) {
            this._dropDownList.setState({
                open: true,
                btnEl: this._dropDownButton._el,
                direction: this.props.direction
            });
            document.addEventListener('click', this.closeDropdown);
        }
    }

    render() {
        return (
            <div className={this.getClassNames()}>
                {this.props.children}
            </div>
        )
    }
}

export default ClassNameMixin(Dropdown);
