'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@mantine/core');

const sizes = {
  xs: 32,
  sm: 40,
  md: 46,
  lg: 52,
  xl: 56
};
var useStyles = core.createStyles((theme, { size }) => {
  const colors = core.getSharedColorScheme({ color: theme.primaryColor, theme, variant: "filled" });
  return {
    yearPicker: {
      width: "100%"
    },
    yearPickerControls: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center"
    },
    yearPickerControl: {
      flex: "0 0 25%",
      color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
      height: theme.fn.size({ size, sizes }),
      textAlign: "center",
      borderRadius: theme.radius.sm,
      fontSize: theme.fn.size({ size, sizes: theme.fontSizes }),
      "&:hover": {
        backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[0]
      },
      "&:disabled": {
        color: theme.colorScheme === "dark" ? theme.colors.dark[3] : theme.colors.gray[4],
        cursor: "not-allowed",
        "&:hover": {
          backgroundColor: "transparent"
        }
      }
    },
    yearPickerControlActive: {
      backgroundColor: colors.background,
      color: colors.color,
      "&:hover": {
        backgroundColor: colors.hover
      }
    }
  };
});

exports.default = useStyles;
//# sourceMappingURL=YearPicker.styles.js.map
