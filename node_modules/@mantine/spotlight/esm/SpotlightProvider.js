import React, { useRef, useState } from 'react';
import { useDidUpdate, useDisclosure } from '@mantine/hooks';
import { useActionsState } from './use-actions-state/use-actions-state.js';
import { useSpotlightShortcuts } from './use-spotlight-shortcuts/use-spotlight-shortcuts.js';
import { Spotlight } from './Spotlight/Spotlight.js';
import { useSpotlightEvents } from './events.js';
import { SpotlightContext } from './Spotlight.context.js';

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
function SpotlightProvider(_a) {
  var _b = _a, {
    actions: initialActions,
    children,
    shortcut = "mod + K",
    onSpotlightClose,
    onSpotlightOpen,
    onQueryChange,
    cleanQueryOnClose = true,
    transitionDuration = 150
  } = _b, others = __objRest(_b, [
    "actions",
    "children",
    "shortcut",
    "onSpotlightClose",
    "onSpotlightOpen",
    "onQueryChange",
    "cleanQueryOnClose",
    "transitionDuration"
  ]);
  const timeoutRef = useRef(-1);
  const [query, setQuery] = useState("");
  const [actions, { registerActions, updateActions, removeActions, triggerAction }] = useActionsState(initialActions, query);
  useDidUpdate(() => {
    updateActions(initialActions);
  }, [initialActions]);
  const handleQueryChange = (value) => {
    setQuery(value);
    onQueryChange == null ? void 0 : onQueryChange(value);
  };
  const [opened, { open, close, toggle }] = useDisclosure(false, {
    onClose: () => {
      onSpotlightClose == null ? void 0 : onSpotlightClose();
      if (cleanQueryOnClose) {
        timeoutRef.current = window.setTimeout(() => {
          handleQueryChange("");
        }, transitionDuration);
      }
    },
    onOpen: () => {
      onSpotlightOpen == null ? void 0 : onSpotlightOpen();
      window.clearTimeout(timeoutRef.current);
    }
  });
  const ctx = {
    openSpotlight: open,
    closeSpotlight: close,
    toggleSpotlight: toggle,
    registerActions,
    removeActions,
    triggerAction,
    opened,
    actions,
    query
  };
  useSpotlightShortcuts(shortcut, open);
  useSpotlightEvents(ctx);
  return /* @__PURE__ */ React.createElement(SpotlightContext.Provider, {
    value: ctx
  }, /* @__PURE__ */ React.createElement(Spotlight, __spreadValues({
    actions,
    onClose: close,
    opened,
    query,
    onQueryChange: handleQueryChange,
    transitionDuration
  }, others)), children);
}
SpotlightProvider.displayName = "@mantine/spotlight/SpotlightProvider";

export { SpotlightProvider };
//# sourceMappingURL=SpotlightProvider.js.map
