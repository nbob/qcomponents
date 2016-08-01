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

var Checkbox = function (_React$Component) {
    _inherits(Checkbox, _React$Component);

    function Checkbox() {
        _classCallCheck(this, Checkbox);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Checkbox).apply(this, arguments));
    }

    _createClass(Checkbox, [{
        key: 'getValue',
        value: function getValue() {
            return this._el.checked;
        }
    }, {
        key: 'handleChange',
        value: function handleChange(ev) {
            if (this.props.master) {
                this.context.selectAll(ev.target.checked);
            }
            if (this.props.onChange) {
                this.props.onChange(ev);
            }
        }
    }, {
        key: 'setValue',
        value: function setValue(checked) {
            this._el.checked = checked;
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            if (this.context.addCheckbox && !this.props.master) {
                this.context.addCheckbox(this);
            }
            return _react2.default.createElement('input', {
                className: this.getClassNames(),
                type: 'checkbox',
                ref: function ref(el) {
                    return _this2._el = el;
                },
                onChange: this.handleChange.bind(this) });
        }
    }]);

    return Checkbox;
}(_react2.default.Component);

Checkbox.componentName = 'checkbox';
Checkbox.propTypes = {
    master: _react2.default.PropTypes.bool
};
Checkbox.contextTypes = {
    selectAll: _react2.default.PropTypes.func,
    addCheckbox: _react2.default.PropTypes.func
};
exports.default = (0, _Mixins.ClassNameMixin)(Checkbox);
module.exports = exports['default'];