'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var ActionsList_styles = require('./ActionsList.styles.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function ActionsList({
  actions,
  styles,
  classNames,
  actionComponent: Action,
  hovered,
  onActionHover,
  onActionTrigger,
  query,
  nothingFoundMessage,
  highlightQuery,
  highlightColor,
  radius
}) {
  const { classes } = ActionsList_styles['default'](null, { classNames, styles, name: "Spotlight" });
  const items = actions.map((item) => {
    if (item.type === "item") {
      return /* @__PURE__ */ React__default.createElement(Action, {
        query,
        key: item.item.id,
        action: item.item,
        hovered: item.index === hovered,
        onMouseEnter: () => onActionHover(item.index),
        classNames,
        styles,
        radius,
        onTrigger: () => onActionTrigger(item.item),
        highlightQuery,
        highlightColor
      });
    }
    return /* @__PURE__ */ React__default.createElement(core.Text, {
      className: classes.actionsGroup,
      color: "dimmed",
      key: item.label
    }, item.label);
  });
  const shouldRenderActions = items.length > 0 || !!nothingFoundMessage && query.trim().length > 0;
  return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, shouldRenderActions && /* @__PURE__ */ React__default.createElement("div", {
    className: classes.actions
  }, items.length > 0 ? items : /* @__PURE__ */ React__default.createElement(core.Text, {
    color: "dimmed",
    className: classes.nothingFound,
    align: "center",
    size: "lg",
    py: "md"
  }, nothingFoundMessage)));
}
ActionsList.displayName = "@mantine/spotlight/ActionsList";

exports.ActionsList = ActionsList;
//# sourceMappingURL=ActionsList.js.map
