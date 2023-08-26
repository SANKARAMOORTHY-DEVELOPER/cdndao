'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const CLEANUP = [
  "list",
  "strike",
  "underline",
  "link",
  "bold",
  "italic",
  "image",
  "clean",
  "align",
  "video",
  "header",
  "script",
  "blockquote",
  "code",
  "code-block"
];
function replaceIcons(quillIconsModule) {
  CLEANUP.forEach((icon) => {
    quillIconsModule[icon] = {};
  });
}

exports.replaceIcons = replaceIcons;
//# sourceMappingURL=replace-icons.js.map
