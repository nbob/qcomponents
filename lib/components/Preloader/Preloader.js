'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactAddonsCssTransitionGroup = require('react-addons-css-transition-group');

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

var _Mixins = require('../Mixins');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Preloader = function (_React$Component) {
    _inherits(Preloader, _React$Component);

    function Preloader() {
        _classCallCheck(this, Preloader);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Preloader).apply(this, arguments));
    }

    _createClass(Preloader, [{
        key: 'render',
        value: function render() {
            var preloader = void 0;
            var preloaderClasses = ['q-preloader', this.props.className];
            var key = 'hidden';
            if (this.props.loading) {
                key = 'loading';
                preloader = _react2.default.createElement(
                    'div',
                    { className: this.getClassNames(), key: key },
                    _react2.default.createElement(
                        'div',
                        { className: 'q-backdrop' },
                        _react2.default.createElement(
                            'div',
                            { className: 'q-backdrop-container' },
                            _react2.default.createElement(
                                'span',
                                { className: 'q-spin' },
                                this.props.children
                            )
                        )
                    )
                );
            } else {
                preloader = null;
            }
            return _react2.default.createElement(
                _reactAddonsCssTransitionGroup2.default,
                {
                    transitionName: 'q-preloader',
                    transitionEnter: false,
                    transitionLeaveTimeout: 500 },
                preloader
            );
        }
    }]);

    return Preloader;
}(_react2.default.Component);

Preloader.componentName = 'preloader';
Preloader.propTypes = {
    className: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.string), _react2.default.PropTypes.objectOf(_react2.default.PropTypes.string)]),
    size: _react2.default.PropTypes.oneOf(['sm', 'md', 'lg']),
    theme: _react2.default.PropTypes.oneOf(['grey', 'white'])
};
Preloader.defaultProps = {
    size: 'md',
    theme: 'grey'
};
exports.default = (0, _Mixins.ClassNameMixin)(Preloader);
module.exports = exports['default'];