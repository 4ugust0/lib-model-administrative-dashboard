import remarkGfm from 'remark-gfm';
import rehypeFormat from 'rehype-format';
import createMDX from '@next/mdx';

const mdxConfig = {
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeFormat],
  },
};

const withMDX = createMDX(mdxConfig);

export default withMDX({
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
});
