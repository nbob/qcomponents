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

var MultiCheckbox = function (_React$Component) {
    _inherits(MultiCheckbox, _React$Component);

    function MultiCheckbox() {
        _classCallCheck(this, MultiCheckbox);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(MultiCheckbox).apply(this, arguments));
    }

    _createClass(MultiCheckbox, [{
        key: 'getChildContext',
        value: function getChildContext() {
            return {
                selectAll: this.selectAll.bind(this),
                addCheckbox: this.addCheckbox.bind(this)
            };
        }
    }, {
        key: 'addCheckbox',
        value: function addCheckbox(el) {
            this._checkboxes.push(el);
        }
    }, {
        key: 'getValue',
        value: function getValue() {
            var res = [];
            return this._checkboxes.map(function (el) {
                return {
                    id: el.props.id,
                    checked: el.getValue()
                };
            });
        }
    }, {
        key: 'selectAll',
        value: function selectAll(val) {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this._checkboxes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var el = _step.value;

                    el.setValue(val);
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        }
    }, {
        key: 'render',
        value: function render() {
            this._checkboxes = [];
            return this.props.children;
        }
    }]);

    return MultiCheckbox;
}(_react2.default.Component);

MultiCheckbox.childContextTypes = {
    selectAll: _react2.default.PropTypes.func,
    addCheckbox: _react2.default.PropTypes.func
};
exports.default = MultiCheckbox;
module.exports = exports['default'];