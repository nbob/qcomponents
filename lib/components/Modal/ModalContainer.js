'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _math = require('lodash/math');

var _math2 = _interopRequireDefault(_math);

var _object = require('lodash/object');

var _object2 = _interopRequireDefault(_object);

var _Mixins = require('../Mixins/');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ModalContainer = function (_React$Component) {
    _inherits(ModalContainer, _React$Component);

    function ModalContainer(props) {
        _classCallCheck(this, ModalContainer);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ModalContainer).call(this, props));

        _this.props = props;
        return _this;
    }

    _createClass(ModalContainer, [{
        key: 'calculateStyles',
        value: function calculateStyles() {
            if (!this._el) {
                return;
            }
            var styles = _object2.default.defaultsDeep(this.props.styles || {}, this.constructor.defaultStyles);
            var windowWidth = window.innerWidth,
                windowHeight = window.innerHeight,
                containerWidth = _math2.default.min([windowWidth - styles.padding[1] * 2, styles.maxWidth]);
            var left = (windowWidth - containerWidth) / 2;
            this._el.style.width = containerWidth + 'px';
            this._el.style['margin-top'] = this._el.style['margin-bottom'] = styles.padding[0] + 'px';
            this._el.style['left'] = this._el.style['right'] = left + 'px';
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.calculateStyles();
            window.addEventListener('resize', this.calculateStyles.bind(this));
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            window.removeEventListener('resize', this.calculateStyles);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                { className: this.getClassNames(), ref: function ref(el) {
                        return _this2._el = el;
                    } },
                this.props.children
            );
        }
    }]);

    return ModalContainer;
}(_react2.default.Component);

ModalContainer.componentName = 'modal-container';
ModalContainer.defaultStyles = {
    maxWidth: 768,
    padding: [30, 15]
};
exports.default = (0, _Mixins.ClassNameMixin)(ModalContainer);
module.exports = exports['default'];