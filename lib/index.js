'use strict';

exports.__esModule = true;

var _Tabs = require('./components/Tabs/');

Object.keys(_Tabs).forEach(function (key) {
  if (key === "default") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Tabs[key];
    }
  });
});