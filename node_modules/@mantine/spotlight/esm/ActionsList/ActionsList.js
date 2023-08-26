import React from 'react';
import { Text } from '@mantine/core';
import useStyles from './ActionsList.styles.js';

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
  const { classes } = useStyles(null, { classNames, styles, name: "Spotlight" });
  const items = actions.map((item) => {
    if (item.type === "item") {
      return /* @__PURE__ */ React.createElement(Action, {
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
    return /* @__PURE__ */ React.createElement(Text, {
      className: classes.actionsGroup,
      color: "dimmed",
      key: item.label
    }, item.label);
  });
  const shouldRenderActions = items.length > 0 || !!nothingFoundMessage && query.trim().length > 0;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, shouldRenderActions && /* @__PURE__ */ React.createElement("div", {
    className: classes.actions
  }, items.length > 0 ? items : /* @__PURE__ */ React.createElement(Text, {
    color: "dimmed",
    className: classes.nothingFound,
    align: "center",
    size: "lg",
    py: "md"
  }, nothingFoundMessage)));
}
ActionsList.displayName = "@mantine/spotlight/ActionsList";

export { ActionsList };
//# sourceMappingURL=ActionsList.js.map
