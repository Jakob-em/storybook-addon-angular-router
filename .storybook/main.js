module.exports = {
    core: {
      builder: 'webpack5',
    },
    stories: [
        "../stories/**/*.stories.mdx",
        "../stories/**/*.stories.@(js|jsx|ts|tsx)",
    ],
    addons: [
        "../preset.js",
        "@storybook/addon-docs",
        "@storybook/addon-controls",
        "@storybook/addon-actions",
    ],
    webpackFinal: async (config) => {
      if (!config.resolve.fallback) {
        config.resolve.fallback = {};
      }
      config.resolve.fallback.crypto = false;
      return config;
  },
};
