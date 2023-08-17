/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  framework: {
    name: "@storybook/angular",
    options: {}
  },
  core: {},
  stories: ["../stories/**/*.stories.mdx", "../stories/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["../preset.js", "@storybook/addon-docs", "@storybook/addon-controls", "@storybook/addon-actions", "@storybook/addon-mdx-gfm"]
};
export default config;