var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/remark/remark-toc-heading.ts
var remark_toc_heading_exports = {};
__export(remark_toc_heading_exports, {
  default: () => remarkTocHeadings
});
function remarkTocHeadings(options) {
  return async (tree) => {
    const { visit } = await import("unist-util-visit");
    const { toString } = await import("mdast-util-to-string");
    const { slug } = (await import("github-slugger")).default;
    return visit(tree, "heading", (node, index, parent) => {
      const textContent = toString(node);
      options.exportRef.push({
        value: textContent,
        url: "#" + slug(textContent),
        depth: node.depth
      });
    });
  };
}
var init_remark_toc_heading = __esm({
  "src/remark/remark-toc-heading.ts"() {
  }
});

// src/index.ts
var src_exports = {};
__export(src_exports, {
  default: () => src_default
});
module.exports = __toCommonJS(src_exports);
var import_mdx_bundler = require("mdx-bundler");
var markdownToReact = async (source, options, id) => {
  const remarkGfm = await import("remark-gfm");
  const remarkToc = await Promise.resolve().then(() => (init_remark_toc_heading(), remark_toc_heading_exports));
  const rehypeSlug = await import("rehype-slug");
  const rehypeAutolinkHeadings = await import("rehype-autolink-headings");
  const toc = [];
  const mdJSX = await (0, import_mdx_bundler.bundleMDX)({
    source,
    mdxOptions: (options2, frontmatter2) => {
      options2.remarkPlugins = [
        ...options2.remarkPlugins ?? [],
        remarkGfm.default,
        [remarkToc.default, { exportRef: toc }]
      ];
      options2.rehypePlugins = [...options2.rehypePlugins ?? [], rehypeSlug.default, rehypeAutolinkHeadings.default];
      return options2;
    },
    esbuildOptions: (options2) => {
      return options2;
    }
  });
  const { code, frontmatter } = mdJSX;
  const tsxOut = `
  const mdContainer = ${JSON.stringify(code)};
  const attributes = ${JSON.stringify(frontmatter)};
  const toc = ${JSON.stringify(toc)};
  export default (props) => {
    return props.children({mdContainer, attributes, toc})
  }
  `;
  return {
    code: tsxOut
  };
};
var plugin = (options) => {
  return {
    name: "xnate-plugin-vite-md",
    enforce: "pre",
    transform(code, id) {
      if (!/\.md$/.test(id)) {
        return;
      }
      try {
        return markdownToReact(code, options, id);
      } catch (error) {
        this.error(error);
        return "";
      }
    }
  };
};
var src_default = plugin;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
