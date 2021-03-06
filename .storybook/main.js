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
};
