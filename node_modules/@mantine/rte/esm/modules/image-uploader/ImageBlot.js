function createImageBlot(InlineBlot) {
  var _a;
  return _a = class extends InlineBlot {
    static create(src) {
      const node = super.create(src);
      if (typeof src === "boolean" && src) {
        return node;
      }
      const image = document.createElement("img");
      image.setAttribute("src", src);
      node.appendChild(image);
      return node;
    }
    static value(domNode) {
      const { src, custom } = domNode.dataset;
      return { src, custom };
    }
    deleteAt(index, length) {
      super.deleteAt(index, length);
      this.cache = {};
    }
  }, _a.blotName = "imageBlot", _a.className = "ql-image-uploading", _a.tagName = "span", _a;
}

export { createImageBlot };
//# sourceMappingURL=ImageBlot.js.map
