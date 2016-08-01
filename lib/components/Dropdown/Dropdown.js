'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Mixins = require('../Mixins');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Dropdown = function (_React$Component) {
    _inherits(Dropdown, _React$Component);

    function Dropdown(props) {
        _classCallCheck(this, Dropdown);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Dropdown).call(this, props));

        _this.props = props;
        _this.closeDropdown = _this._closeDropdown.bind(_this);
        return _this;
    }

    _createClass(Dropdown, [{
        key: 'getChildContext',
        value: function getChildContext() {
            return {
                onDropownItemClick: this.dropDownItemClick.bind(this),
                onDropownButtonClick: this.openDropdown.bind(this),
                onDropDownButtonMount: this.setDropdownButton.bind(this),
                onDropDownListMount: this.setDropdownList.bind(this)
            };
        }
    }, {
        key: 'dropDownItemClick',
        value: function dropDownItemClick(ev) {
            if (this.props.onItemClick) {
                this.props.onItemClick(ev);
            }
        }
    }, {
        key: 'setDropdownButton',
        value: function setDropdownButton(el) {
            this._dropDownButton = el;
        }
    }, {
        key: 'setDropdownList',
        value: function setDropdownList(el) {
            this._dropDownList = el;
        }
    }, {
        key: '_closeDropdown',
        value: function _closeDropdown(ev) {
            this._dropDownList.setState({ open: false });
            document.removeEventListener('click', this.closeDropdown);
        }
    }, {
        key: 'openDropdown',
        value: function openDropdown(ev) {
            if (!this._dropDownList.state.open) {
                this._dropDownList.setState({
                    open: true,
                    btnEl: this._dropDownButton._el,
                    direction: this.props.direction
                });
                document.addEventListener('click', this.closeDropdown);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: this.getClassNames() },
                this.props.children
            );
        }
    }]);

    return Dropdown;
}(_react2.default.Component);

Dropdown.componentName = "dropdown";
Dropdown.propTypes = {
    direction: _react2.default.PropTypes.array
};
Dropdown.defaultProps = {
    direction: ['bottom', 'left']
};
Dropdown.childContextTypes = {
    onDropownButtonClick: _react2.default.PropTypes.func,
    onDropownItemClick: _react2.default.PropTypes.func,
    onDropDownButtonMount: _react2.default.PropTypes.func,
    onDropDownListMount: _react2.default.PropTypes.func
};
exports.default = (0, _Mixins.ClassNameMixin)(Dropdown);
module.exports = exports['default'];