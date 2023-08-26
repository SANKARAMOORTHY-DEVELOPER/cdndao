'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var radixIcons = require('@modulz/radix-icons');
var OrderedList = require('./icons/OrderedList.js');
var H1 = require('./icons/H1.js');
var H2 = require('./icons/H2.js');
var H3 = require('./icons/H3.js');
var H4 = require('./icons/H4.js');
var H5 = require('./icons/H5.js');
var H6 = require('./icons/H6.js');
var Sup = require('./icons/Sup.js');
var Sub = require('./icons/Sub.js');

const CONTROLS = {
  code: {
    icon: radixIcons.CodeIcon,
    controls: "code"
  },
  codeBlock: {
    icon: radixIcons.CodeIcon,
    controls: "code-block"
  },
  bold: {
    icon: radixIcons.FontBoldIcon,
    controls: "bold"
  },
  italic: {
    icon: radixIcons.FontItalicIcon,
    controls: "italic"
  },
  underline: {
    icon: radixIcons.UnderlineIcon,
    controls: "underline"
  },
  strike: {
    icon: radixIcons.StrikethroughIcon,
    controls: "strike"
  },
  unorderedList: {
    icon: radixIcons.ListBulletIcon,
    controls: "list",
    value: "bullet"
  },
  orderedList: {
    icon: OrderedList.OrderedList,
    controls: "list",
    value: "ordered"
  },
  link: {
    icon: radixIcons.Link1Icon,
    controls: "link"
  },
  image: {
    icon: radixIcons.ImageIcon,
    controls: "image"
  },
  clean: {
    icon: radixIcons.TextNoneIcon,
    controls: "clean"
  },
  alignCenter: {
    icon: radixIcons.TextAlignCenterIcon,
    controls: "align",
    value: "center",
    noActive: true
  },
  alignLeft: {
    icon: radixIcons.TextAlignLeftIcon,
    controls: "align",
    value: "",
    noActive: true
  },
  alignRight: {
    icon: radixIcons.TextAlignRightIcon,
    controls: "align",
    value: "right",
    noActive: true
  },
  video: {
    icon: radixIcons.VideoIcon,
    controls: "video"
  },
  h1: {
    icon: H1.H1,
    controls: "header",
    value: "1"
  },
  h2: {
    icon: H2.H2,
    controls: "header",
    value: "2"
  },
  h3: {
    icon: H3.H3,
    controls: "header",
    value: "3"
  },
  h4: {
    icon: H4.H4,
    controls: "header",
    value: "4"
  },
  h5: {
    icon: H5.H5,
    controls: "header",
    value: "5"
  },
  h6: {
    icon: H6.H6,
    controls: "header",
    value: "6"
  },
  sup: {
    icon: Sup.Sup,
    controls: "script",
    value: "super"
  },
  sub: {
    icon: Sub.Sub,
    controls: "script",
    value: "sub"
  },
  blockquote: {
    icon: radixIcons.QuoteIcon,
    controls: "blockquote"
  }
};

exports.CONTROLS = CONTROLS;
//# sourceMappingURL=controls.js.map
