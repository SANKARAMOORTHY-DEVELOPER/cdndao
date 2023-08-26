'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var ToolbarButton = require('./ToolbarButton/ToolbarButton.js');
var controls = require('./controls.js');
var Toolbar_styles = require('./Toolbar.styles.js');

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
function Toolbar(_a) {
  var _b = _a, {
    controls: controls$1,
    labels,
    stickyOffset = 0,
    sticky = true,
    className,
    classNames,
    styles,
    id
  } = _b, others = __objRest(_b, [
    "controls",
    "labels",
    "stickyOffset",
    "sticky",
    "className",
    "classNames",
    "styles",
    "id"
  ]);
  const { classes, cx } = Toolbar_styles['default']({ sticky, stickyOffset }, { classNames, styles, name: "RichTextEditor" });
  const groups = controls$1.map((group, index) => {
    const items = group.filter((item) => controls.CONTROLS[item]).map((item) => {
      const Icon = controls.CONTROLS[item].icon;
      return /* @__PURE__ */ React__default.createElement(ToolbarButton.ToolbarButton, {
        className: classes.toolbarControl,
        controls: controls.CONTROLS[item].controls,
        value: controls.CONTROLS[item].value,
        key: item,
        title: labels[item],
        noActive: controls.CONTROLS[item].noActive
      }, /* @__PURE__ */ React__default.createElement(Icon, {
        style: { width: 18, height: 18 }
      }));
    });
    return /* @__PURE__ */ React__default.createElement("div", {
      className: classes.toolbarGroup,
      key: index
    }, items);
  });
  return /* @__PURE__ */ React__default.createElement("div", __spreadValues({
    id,
    className: cx(classes.toolbar, className)
  }, others), /* @__PURE__ */ React__default.createElement("div", {
    className: classes.toolbarInner
  }, groups));
}
Toolbar.displayName = "@mantine/rte/Toolbar";

exports.Toolbar = Toolbar;
//# sourceMappingURL=Toolbar.js.map
