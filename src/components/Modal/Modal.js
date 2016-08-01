import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { ClassNameMixin, ThemeMixin } from '../Mixins/';

class Modal extends React.Component {

    constructor(props) {
        super(props);
        this.props = props;
        this._closed = true;
        this._modalParams = this.props.modalParams;
    }

    static componentName = 'modal';

    static propTypes = {
        closeOnEsc: React.PropTypes.bool,
        modalParams: React.PropTypes.object
    }

    static defaultProps = {
        closeOnEsc: true,
        modalParams: {}
    }

    static childContextTypes = {
        closeModal: React.PropTypes.func.isRequired,
        modalParams: React.PropTypes.object
    }

    getChildContext() {
        return {
            closeModal: this.closeModal.bind(this),
            modalParams: this._modalParams
        };
    }

    handleKeyDown(ev) {
        if (ev.keyCode == 27 && this.props.closeOnEsc) { // Esc
            this.closeModal();
        }
    }

    closeModal() {
        this._closed = true;
        this.forceUpdate();
    }

    openModal(params) {
        if (params) {
            this._modalParams = params;
        }
        this._closed = false;
        this.forceUpdate();
        this._el.focus();
    }

    render() {
        let modal;
        if (this._closed) {
            modal = null;
        } else {
            modal = (
                <div className={this.getClassNames()}>
                    <div className="q-backdrop"></div>
                    {this.props.children}
                </div>
            );
        }
        return (
            <div
                    tabIndex="0"
                    onKeyDown={this.handleKeyDown.bind(this)}
                    ref={el => this._el = el}>
                <ReactCSSTransitionGroup
                        transitionName="q-modal"
                        transitionEnterTimeout={1}
                        transitionLeaveTimeout={500}>
                        {modal}
                </ReactCSSTransitionGroup>
            </div>
        );
    }

}

export default ThemeMixin(ClassNameMixin(Modal));
