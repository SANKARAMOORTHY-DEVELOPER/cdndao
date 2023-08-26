import React, { useState } from 'react';
import { getDefaultZIndex, getGroupedOptions, OptionalPortal, GroupedTransition, Paper, TextInput, Overlay } from '@mantine/core';
import { useScrollLock, useFocusTrap, useFocusReturn, useDidUpdate } from '@mantine/hooks';
import { DefaultAction } from '../DefaultAction/DefaultAction.js';
import { ActionsList } from '../ActionsList/ActionsList.js';
import { filterActions } from './filter-actions/filter-actions.js';
import useStyles from './Spotlight.styles.js';

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
function Spotlight(_a) {
  var _b = _a, {
    query,
    onQueryChange,
    actions,
    onClose,
    opened,
    withinPortal,
    transition = "pop",
    transitionDuration,
    classNames,
    styles,
    overlayColor = "#000",
    overlayOpacity = 0.25,
    overlayBlur = 3,
    shadow = "md",
    radius = "sm",
    centered = false,
    closeOnActionTrigger = true,
    highlightQuery = false,
    highlightColor,
    maxWidth = 600,
    topOffset = 120,
    className,
    searchPlaceholder,
    searchIcon,
    filter = filterActions,
    nothingFoundMessage,
    limit = 10,
    actionComponent = DefaultAction,
    actionsWrapperComponent: ActionsWrapper = "div",
    zIndex = getDefaultZIndex("modal")
  } = _b, others = __objRest(_b, [
    "query",
    "onQueryChange",
    "actions",
    "onClose",
    "opened",
    "withinPortal",
    "transition",
    "transitionDuration",
    "classNames",
    "styles",
    "overlayColor",
    "overlayOpacity",
    "overlayBlur",
    "shadow",
    "radius",
    "centered",
    "closeOnActionTrigger",
    "highlightQuery",
    "highlightColor",
    "maxWidth",
    "topOffset",
    "className",
    "searchPlaceholder",
    "searchIcon",
    "filter",
    "nothingFoundMessage",
    "limit",
    "actionComponent",
    "actionsWrapperComponent",
    "zIndex"
  ]);
  const [hovered, setHovered] = useState(-1);
  const { classes, cx } = useStyles({ centered, maxWidth, topOffset, radius }, { classNames, styles, name: "Spotlight" });
  const [, lockScroll] = useScrollLock();
  const focusTrapRef = useFocusTrap(opened);
  const resetHovered = () => setHovered(-1);
  const handleClose = () => {
    resetHovered();
    onClose();
  };
  useFocusReturn({ transitionDuration: 0, opened });
  const filteredActions = filter(query, actions).slice(0, limit);
  const groupedWithLabels = getGroupedOptions(filteredActions).items;
  const groupedActions = groupedWithLabels.map((item) => item.type === "item" ? item.item : void 0).filter((item) => item);
  useDidUpdate(() => {
    if (groupedActions.length - 1 < hovered) {
      setHovered(groupedActions.length - 1);
    }
  }, [groupedActions.length]);
  const handleInputKeyDown = (event) => {
    var _a2;
    switch (event.code) {
      case "ArrowDown": {
        event.preventDefault();
        setHovered((current) => current < groupedActions.length - 1 ? current + 1 : 0);
        break;
      }
      case "ArrowUp": {
        event.preventDefault();
        setHovered((current) => current > 0 ? current - 1 : groupedActions.length - 1);
        break;
      }
      case "Enter": {
        event.preventDefault();
        const action = groupedActions[hovered];
        (_a2 = action == null ? void 0 : action.onTrigger) == null ? void 0 : _a2.call(action, action);
        if (closeOnActionTrigger && (action == null ? void 0 : action.onTrigger)) {
          handleClose();
        }
        break;
      }
      case "Escape": {
        event.preventDefault();
        handleClose();
      }
    }
  };
  const handleInputChange = (event) => {
    onQueryChange(event.currentTarget.value);
    if (hovered === -1) {
      setHovered(0);
    }
  };
  return /* @__PURE__ */ React.createElement(OptionalPortal, {
    withinPortal,
    zIndex
  }, /* @__PURE__ */ React.createElement(GroupedTransition, {
    onExited: () => lockScroll(false),
    onEntered: () => lockScroll(true),
    mounted: opened,
    transitions: {
      spotlight: {
        duration: transitionDuration,
        transition,
        timingFunction: "ease"
      },
      overlay: {
        duration: transitionDuration / 2,
        transition: "fade",
        timingFunction: "ease"
      }
    }
  }, (transitionStyles) => /* @__PURE__ */ React.createElement("div", __spreadValues({
    className: cx(classes.root, className)
  }, others), /* @__PURE__ */ React.createElement("div", {
    className: classes.inner,
    ref: focusTrapRef
  }, /* @__PURE__ */ React.createElement(Paper, {
    style: transitionStyles.spotlight,
    className: classes.spotlight,
    shadow,
    radius,
    onMouseLeave: resetHovered
  }, /* @__PURE__ */ React.createElement(TextInput, {
    value: query,
    onChange: handleInputChange,
    onKeyDown: handleInputKeyDown,
    classNames: { input: classes.searchInput },
    size: "lg",
    placeholder: searchPlaceholder,
    icon: searchIcon,
    onMouseEnter: resetHovered
  }), /* @__PURE__ */ React.createElement(ActionsWrapper, null, /* @__PURE__ */ React.createElement(ActionsList, {
    highlightQuery,
    highlightColor,
    actions: groupedWithLabels,
    actionComponent,
    hovered,
    query,
    nothingFoundMessage,
    onActionHover: setHovered,
    onActionTrigger: (action) => {
      action.onTrigger(action);
      closeOnActionTrigger && handleClose();
    },
    styles,
    classNames,
    radius
  }))), /* @__PURE__ */ React.createElement("div", {
    style: transitionStyles.overlay
  }, /* @__PURE__ */ React.createElement(Overlay, {
    className: classes.overlay,
    zIndex: 1,
    onMouseDown: handleClose,
    color: overlayColor,
    opacity: overlayOpacity,
    blur: overlayBlur
  }))))));
}
Spotlight.displayName = "@mantine/spotlight/Spotlight";

export { Spotlight };
//# sourceMappingURL=Spotlight.js.map
