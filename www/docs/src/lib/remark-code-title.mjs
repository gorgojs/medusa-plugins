/** @import {Root} from 'mdast' */

/**
 * Remark plugin that parses title="..." from code fence meta
 * and exposes it as a `title` prop on the rendered `code` element.
 *
 * @returns {(tree: Root) => void}
 */
export default function remarkCodeTitle() {
  return (tree) => {
    walk(tree);
  };
}

function walk(node) {
  if (node.type === "code" && node.meta) {
    const m = node.meta.match(/title="([^"]+)"/);
    if (m) {
      node.data ??= {};
      node.data.hProperties ??= {};
      node.data.hProperties.title = m[1];
    }
  }
  node.children?.forEach(walk);
}
