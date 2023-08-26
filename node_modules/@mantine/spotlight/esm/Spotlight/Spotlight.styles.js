import { createStyles } from '@mantine/core';

var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
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
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var useStyles = createStyles((theme, { centered, maxWidth, topOffset, radius }) => ({
  root: __spreadProps(__spreadValues({}, theme.fn.cover()), {
    position: "fixed"
  }),
  spotlight: {
    position: "relative",
    zIndex: 2,
    backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.white,
    borderRadius: theme.fn.radius(radius),
    width: "100%",
    maxWidth,
    overflow: "hidden",
    marginLeft: "calc(var(--removed-scroll-width, 0px) * -1)"
  },
  overlay: __spreadProps(__spreadValues({}, theme.fn.cover()), {
    position: "fixed"
  }),
  inner: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    paddingTop: centered ? theme.spacing.md : topOffset,
    justifyContent: centered ? "center" : "flex-start",
    alignItems: "center"
  },
  searchInput: {
    border: 0,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
    backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.white
  }
}));

export default useStyles;
//# sourceMappingURL=Spotlight.styles.js.map
