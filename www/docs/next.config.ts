import createMDX from "@next/mdx";
import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
import { redirects } from "@/lib/redirects";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  redirects: redirects,
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  trailingSlash: false,

  turbopack: {
    root: "./",
    rules: {
      "*.svg": {
        loaders: [
          {
            loader: "@svgr/webpack",
            options: {
              icon: true,
              svgo: true,
              dimensions: false,
            },
          },
        ],
        as: "*.js",
      },
    },
    resolveAlias: {
      "@/*": "./src/*",
      "@/content/*": "./content/*",
    },
  },

  webpack(config) {
    const fileLoaderRule = config.module.rules.find(
      (rule: { test: { test: (arg0: string) => unknown } }) =>
        rule.test?.test?.(".svg")
    );

    config.module.rules.push(
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/,
      },
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] },
        use: [
          {
            loader: "@svgr/webpack",
            options: {
              icon: true,
              svgo: true,
              dimensions: false,
            },
          },
        ],
      }
    );

    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },
};

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
  options: {
    remarkPlugins: [
      "remark-gfm",
      "remark-mdx-frontmatter",
      "remark-frontmatter",
    ],
    rehypePlugins: [],
  },
});

export default withNextIntl(withMDX(nextConfig));
