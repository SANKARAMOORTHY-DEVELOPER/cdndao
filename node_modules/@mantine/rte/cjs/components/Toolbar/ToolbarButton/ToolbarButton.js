'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var ToolbarButton_styles = require('./ToolbarButton.styles.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function ToolbarButton(_a) {
  var _b = _a, {
    className,
    children,
    controls,
    value,
    noActive
  } = _b, others = __objRest(_b, [
    "className",
    "children",
    "controls",
    "value",
    "noActive"
  ]);
  const { classes, cx } = ToolbarButton_styles['default']({ noActive }, { name: "RichTextEditor" });
  return /* @__PURE__ */ React__default.createElement(core.ActionIcon, __spreadValues({
    className: cx(classes.control, `ql-${controls}`, className),
    value,
    radius: 0
  }, others), children);
}
ToolbarButton.displayName = "@mantine/rte/ToolbarButton";

exports.ToolbarButton = ToolbarButton;
//# sourceMappingURL=ToolbarButton.js.map
