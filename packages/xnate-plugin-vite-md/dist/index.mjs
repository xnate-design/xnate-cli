// src/index.ts
import { bundleMDX } from "mdx-bundler";
var markdownToReact = async (source, options, id) => {
  const remarkGfm = await import("remark-gfm");
  const remarkToc = await import("./remark-toc-heading-QYFEWKHQ.mjs");
  const rehypeSlug = await import("rehype-slug");
  const rehypeAutolinkHeadings = await import("rehype-autolink-headings");
  const toc = [];
  const mdJSX = await bundleMDX({
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
export {
  src_default as default
};
