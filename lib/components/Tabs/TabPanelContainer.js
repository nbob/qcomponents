'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactAddonsCssTransitionGroup = require('react-addons-css-transition-group');

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

var _TabPanel = require('./TabPanel');

var _TabPanel2 = _interopRequireDefault(_TabPanel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// class TabPanelContainer extends React.Component {
var TabPanelContainer = _react2.default.createClass({
    displayName: 'TabPanelContainer',

    // constructor(props) {
    //     // super(props);
    //     this.state = {
    //         tabId: props.tabId
    //     };
    //     this._panels = [];
    // },
    getInitialState: function getInitialState() {
        return { tabId: this.props.tabId };
    },
    componentWillMount: function componentWillMount() {
        var _this = this;

        this._panels = [];
        _react2.default.Children.forEach(this.props.children, function (child, i) {
            if (child.type !== _TabPanel2.default) {
                console.warn('\n                    You should use only <TabPanel> component\n                    inside <TabPanelContainer>');
                return;
            }
            _this._panels.push(_react2.default.cloneElement(child, { key: i }));
        });
    },
    setActiveTab: function setActiveTab(tabId) {
        this.setState({ tabId: tabId });
    },
    render: function render() {
        var classes = (0, _classnames2.default)(this.props.className, 'tab-panel-container');
        var tabId = this.state.tabId;
        var activePanel = this._panels.find(function (item) {
            return tabId == item.props.id;
        });
        return _react2.default.createElement(
            'div',
            { className: classes },
            _react2.default.createElement(
                _reactAddonsCssTransitionGroup2.default,
                {
                    transitionName: 'tab-panel',
                    transitionEnterTimeout: 300,
                    transitionLeaveTimeout: 300 },
                activePanel
            )
        );
    }
});

exports.default = TabPanelContainer;
module.exports = exports['default'];