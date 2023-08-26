'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function attachShortcuts(keyboardModule) {
  ["1", "2", "3", "4", "5", "6"].forEach((key) => {
    keyboardModule.addBinding({
      key,
      shortKey: true,
      altKey: true
    }, function toggleHeader(range, context) {
      var _a;
      if (((_a = context.format) == null ? void 0 : _a.header) === Number(key)) {
        this.quill.removeFormat(range);
      } else {
        this.quill.formatLine(range, "header", key);
      }
    });
  });
}

exports.attachShortcuts = attachShortcuts;
//# sourceMappingURL=attach-shortcuts.js.map
