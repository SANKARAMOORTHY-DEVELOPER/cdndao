'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Editor = require('react-quill');
var RichTextEditor = require('./components/RichTextEditor/RichTextEditor.js');
var Toolbar = require('./components/Toolbar/Toolbar.js');
var defaultControl = require('./components/RichTextEditor/default-control.js');
var defaultLabels = require('./components/RichTextEditor/default-labels.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var Editor__default = /*#__PURE__*/_interopDefaultLegacy(Editor);



exports.Editor = Editor__default;
exports.Quill = Editor.Quill;
exports.RichTextEditor = RichTextEditor.RichTextEditor;
exports.default = RichTextEditor.RichTextEditor;
exports.Toolbar = Toolbar.Toolbar;
exports.DEFAULT_CONTROLS = defaultControl.DEFAULT_CONTROLS;
exports.DEFAULT_LABELS = defaultLabels.DEFAULT_LABELS;
//# sourceMappingURL=index.js.map
