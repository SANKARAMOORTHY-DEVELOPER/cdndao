'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@mantine/core');

var useStyles = core.createStyles((theme, { noActive }) => {
  const colors = core.getSharedColorScheme({ color: theme.primaryColor, variant: "light", theme });
  return {
    control: {
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.white,
      border: `1px solid ${theme.colorScheme === "dark" ? "transparent" : theme.colors.gray[3]}`,
      "&.ql-active": noActive ? {} : {
        backgroundColor: theme.colorScheme === "dark" ? colors.background : theme.colors[theme.primaryColor][0],
        color: theme.colors[theme.primaryColor][theme.colorScheme === "dark" ? 2 : 7],
        "&:hover": {
          backgroundColor: theme.colorScheme === "dark" ? colors.background : theme.colors[theme.primaryColor][0]
        }
      }
    }
  };
});

exports.default = useStyles;
//# sourceMappingURL=ToolbarButton.styles.js.map
