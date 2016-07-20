module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// const tabsModule = require('./components/Tabs');
	// module.exports = {tabsModule};
	
	module.exports = __webpack_require__(1);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.TabPanelContainer = exports.TabPanel = exports.TabList = exports.Tabs = exports.Tab = undefined;
	
	var _Tab = __webpack_require__(2);
	
	var _Tab2 = _interopRequireDefault(_Tab);
	
	var _Tabs = __webpack_require__(7);
	
	var _Tabs2 = _interopRequireDefault(_Tabs);
	
	var _TabList = __webpack_require__(13);
	
	var _TabList2 = _interopRequireDefault(_TabList);
	
	var _TabPanel = __webpack_require__(8);
	
	var _TabPanel2 = _interopRequireDefault(_TabPanel);
	
	var _TabPanelContainer = __webpack_require__(9);
	
	var _TabPanelContainer2 = _interopRequireDefault(_TabPanelContainer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.Tab = _Tab2.default;
	exports.Tabs = _Tabs2.default;
	exports.TabList = _TabList2.default;
	exports.TabPanel = _TabPanel2.default;
	exports.TabPanelContainer = _TabPanelContainer2.default;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(4);
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _reactAddonsCssTransitionGroup = __webpack_require__(6);
	
	var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Tab = _react2.default.createClass({
	    displayName: 'Tab',
	
	    propTypes: {
	        id: _react2.default.PropTypes.string.isRequired,
	        onClick: _react2.default.PropTypes.func,
	        to: _react2.default.PropTypes.string,
	        className: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.string), _react2.default.PropTypes.objectOf(_react2.default.PropTypes.string)])
	    },
	    getInitialState: function getInitialState() {
	        return { active: this.props.active };
	    },
	    setActiveState: function setActiveState(active) {
	        this.setState({ active: active });
	    },
	    handleClick: function handleClick(e) {
	        this.props.onClick(this);
	    },
	    render: function render() {
	        var classes = (0, _classnames2.default)('tab-item', {
	            'active': this.state.active
	        });
	        var link = this.props.to ? _react2.default.createElement(
	            _reactRouter.Link,
	            { to: this.props.to },
	            this.props.children
	        ) : _react2.default.createElement(
	            'a',
	            null,
	            this.props.children
	        );
	        return _react2.default.createElement(
	            'div',
	            { onClick: this.handleClick, className: classes },
	            link
	        );
	    }
	});
	
	exports.default = Tab;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("react-router");

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("classnames");

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = require("react-addons-css-transition-group");

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Tab = __webpack_require__(2);
	
	var _Tab2 = _interopRequireDefault(_Tab);
	
	var _TabPanel = __webpack_require__(8);
	
	var _TabPanel2 = _interopRequireDefault(_TabPanel);
	
	var _TabPanelContainer = __webpack_require__(9);
	
	var _TabPanelContainer2 = _interopRequireDefault(_TabPanelContainer);
	
	var _nodeUuid = __webpack_require__(10);
	
	var _nodeUuid2 = _interopRequireDefault(_nodeUuid);
	
	var _castArray = __webpack_require__(11);
	
	var _castArray2 = _interopRequireDefault(_castArray);
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Tabs = _react2.default.createClass({
	    displayName: 'Tabs',
	
	    propTypes: {
	        onTabChange: _react2.default.PropTypes.func,
	        needReconcil: _react2.default.PropTypes.bool,
	        tabId: _react2.default.PropTypes.string
	    },
	    handleTabChange: function handleTabChange(tabId) {
	        this.setActiveTab(tabId);
	    },
	    getDefaultProps: function getDefaultProps() {
	        return { needReconcil: false };
	    },
	    onTabClick: function onTabClick(el) {
	        if (el.props.id != this.props.tabId) {
	            if (this.props.onChange) {
	                this.props.onChange(el.props.panelId) && this.handleTabChange(el.props.id);
	            } else {
	                this.handleTabChange(el.props.panelId);
	            }
	        }
	    },
	    addTab: function addTab(el) {
	        if (el) {
	            this._tabs.push(el);
	        }
	    },
	    setPanelContainer: function setPanelContainer(el) {
	        if (el) {
	            this._panelContainer = el;
	        }
	    },
	    setActiveTab: function setActiveTab(tabId) {
	        this._tabs.forEach(function (el) {
	            return el.setActiveState(el.props.id == tabId);
	        });
	        this._panelContainer.setActiveTab(tabId);
	    },
	    shouldComponentUpdate: function shouldComponentUpdate(nextProps) {
	        if (this.props.needReconcil) {
	            return true;
	        } else {
	            if (nextProps.panelId != this.props.panelId) {
	                this.setActiveTab(nextProps.panelId);
	            }
	            return false;
	        }
	    },
	    patchTabsAndPanels: function patchTabsAndPanels(nodes) {
	        var _this = this;
	
	        if (!nodes) {
	            return;
	        }
	        nodes = (0, _castArray2.default)(nodes);
	        var self = this;
	        var children = [],
	            tabId = this.props.tabId;
	        _react2.default.Children.forEach(nodes, function (child) {
	            var isTab = child.type == _Tab2.default,
	                isPanelContainer = child.type == _TabPanelContainer2.default;
	            var props = props = _extends({
	                key: _nodeUuid2.default.v4()
	            }, child.props);
	            var a = _TabPanelContainer2.default;
	            if (isTab) {
	                props['onClick'] = _this.onTabClick;
	                props['key'] = 'tab_' + props.id;
	                props['ref'] = _this.addTab;
	                if (_this.props.tabId == child.props.id) {
	                    props['active'] = true;
	                }
	            } else if (isPanelContainer) {
	                // props['ref'] = this.setPanelContainer;
	                props['tabId'] = tabId;
	            } else if (child.props && child.props.children) {
	                props['children'] = _this.patchTabsAndPanels(child.props.children);
	            }
	            child = _react2.default.cloneElement(child, props);
	            children.push(child);
	        });
	        return children;
	    },
	    render: function render() {
	        this._tabs = [];
	        this._panelContainer = null;
	        var chilTree = this.patchTabsAndPanels(this.props.children);
	        return _react2.default.createElement(
	            'div',
	            { className: 'tabs' },
	            chilTree
	        );
	    }
	});
	
	exports.default = Tabs;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _reactAddonsCssTransitionGroup = __webpack_require__(6);
	
	var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var TabPanel = _react2.default.createClass({
	    displayName: 'TabPanel',
	    getInitialState: function getInitialState() {
	        return { active: this.props.active };
	    },
	    setActiveState: function setActiveState(active) {
	        this.setState({ active: active });
	    },
	    render: function render() {
	        var classes = (0, _classnames2.default)(this.props.className, 'tab-panel', {
	            'hidden': !this.state.active
	        });
	        return _react2.default.createElement(
	            'div',
	            { className: classes },
	            this.props.children
	        );
	    }
	});
	
	exports.default = TabPanel;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _reactAddonsCssTransitionGroup = __webpack_require__(6);
	
	var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);
	
	var _TabPanel = __webpack_require__(8);
	
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

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = require("node-uuid");

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var isArray = __webpack_require__(12);
	
	/**
	 * Casts `value` as an array if it's not one.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.4.0
	 * @category Lang
	 * @param {*} value The value to inspect.
	 * @returns {Array} Returns the cast array.
	 * @example
	 *
	 * _.castArray(1);
	 * // => [1]
	 *
	 * _.castArray({ 'a': 1 });
	 * // => [{ 'a': 1 }]
	 *
	 * _.castArray('abc');
	 * // => ['abc']
	 *
	 * _.castArray(null);
	 * // => [null]
	 *
	 * _.castArray(undefined);
	 * // => [undefined]
	 *
	 * _.castArray();
	 * // => []
	 *
	 * var array = [1, 2, 3];
	 * console.log(_.castArray(array) === array);
	 * // => true
	 */
	function castArray() {
	  if (!arguments.length) {
	    return [];
	  }
	  var value = arguments[0];
	  return isArray(value) ? value : [value];
	}
	
	module.exports = castArray;

/***/ },
/* 12 */
/***/ function(module, exports) {

	"use strict";
	
	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @type {Function}
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified,
	 *  else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;
	
	module.exports = isArray;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var TabList = _react2.default.createClass({
	    displayName: "TabList",
	    render: function render() {
	        return _react2.default.createElement(
	            "div",
	            { className: "tab-list" },
	            this.props.children
	        );
	    }
	});
	
	exports.default = TabList;

/***/ }
/******/ ]);
//# sourceMappingURL=index.js.map