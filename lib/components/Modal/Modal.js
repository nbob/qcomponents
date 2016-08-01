'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactAddonsCssTransitionGroup = require('react-addons-css-transition-group');

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

var _Mixins = require('../Mixins/');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Modal = function (_React$Component) {
    _inherits(Modal, _React$Component);

    function Modal(props) {
        _classCallCheck(this, Modal);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Modal).call(this, props));

        _this.props = props;
        _this._closed = true;
        _this._modalParams = _this.props.modalParams;
        return _this;
    }

    _createClass(Modal, [{
        key: 'getChildContext',
        value: function getChildContext() {
            return {
                closeModal: this.closeModal.bind(this),
                modalParams: this._modalParams
            };
        }
    }, {
        key: 'handleKeyDown',
        value: function handleKeyDown(ev) {
            if (ev.keyCode == 27 && this.props.closeOnEsc) {
                // Esc
                this.closeModal();
            }
        }
    }, {
        key: 'closeModal',
        value: function closeModal() {
            this._closed = true;
            this.forceUpdate();
        }
    }, {
        key: 'openModal',
        value: function openModal(params) {
            if (params) {
                this._modalParams = params;
            }
            this._closed = false;
            this.forceUpdate();
            this._el.focus();
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var modal = void 0;
            if (this._closed) {
                modal = null;
            } else {
                modal = _react2.default.createElement(
                    'div',
                    { className: this.getClassNames() },
                    _react2.default.createElement('div', { className: 'q-backdrop' }),
                    this.props.children
                );
            }
            return _react2.default.createElement(
                'div',
                {
                    tabIndex: '0',
                    onKeyDown: this.handleKeyDown.bind(this),
                    ref: function ref(el) {
                        return _this2._el = el;
                    } },
                _react2.default.createElement(
                    _reactAddonsCssTransitionGroup2.default,
                    {
                        transitionName: 'q-modal',
                        transitionEnterTimeout: 1,
                        transitionLeaveTimeout: 500 },
                    modal
                )
            );
        }
    }]);

    return Modal;
}(_react2.default.Component);

Modal.componentName = 'modal';
Modal.propTypes = {
    closeOnEsc: _react2.default.PropTypes.bool,
    modalParams: _react2.default.PropTypes.object
};
Modal.defaultProps = {
    closeOnEsc: true,
    modalParams: {}
};
Modal.childContextTypes = {
    closeModal: _react2.default.PropTypes.func.isRequired,
    modalParams: _react2.default.PropTypes.object
};
exports.default = (0, _Mixins.ThemeMixin)((0, _Mixins.ClassNameMixin)(Modal));
module.exports = exports['default'];