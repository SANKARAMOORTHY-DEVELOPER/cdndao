'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const testRegex = /(^(a|p)m?$)|(^$)/;
function createAmPmHandler({ onChange, nextRef }) {
  return (value, triggerShift) => {
    var _a, _b;
    const valLower = value.toLowerCase();
    if (valLower === "am" || valLower === "pm") {
      onChange(valLower);
      triggerShift && ((_a = nextRef == null ? void 0 : nextRef.current) == null ? void 0 : _a.focus());
      triggerShift && ((_b = nextRef == null ? void 0 : nextRef.current) == null ? void 0 : _b.select());
      return;
    }
    if (!testRegex.test(valLower)) {
      return;
    }
    onChange(valLower);
  };
}

exports.createAmPmHandler = createAmPmHandler;
//# sourceMappingURL=create-amPm-handler.js.map
