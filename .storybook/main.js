module.exports = {
  "stories": [
    "../src/**/_stories_/**/*.stories.mdx",
    "../src/**/_stories_/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/react"
}
