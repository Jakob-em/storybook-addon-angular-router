# Angular Router Storybook Addon
[![Storybook](https://raw.githubusercontent.com/storybookjs/brand/master/badge/badge-storybook.svg?sanitize=true)](https://storybook.js.org)
[![npm](https://img.shields.io/npm/v/storybook-addon-angular-router)](https://www.npmjs.com/package/storybook-addon-angular-router)
[![Release](https://github.com/Jakob-em/storybook-addon-angular-router/actions/workflows/release.yml/badge.svg)](https://github.com/Jakob-em/storybook-addon-angular-router/actions/workflows/release.yml)
[![npm](https://img.shields.io/npm/dm/storybook-addon-angular-router)](https://www.npmjs.com/package/storybook-addon-angular-router)

> A simple plugin to make working with the angular router
in storybook easier

### How to use it
Install the addon via npm:
```shell
npm i storybook-addon-angular-router
```
Add it to your storybook configuration:
```js
// .storybook/main.js
module.exports = {
    addons: ["storybook-addon-angular-router"],
};
```

Every call to `navivate` and `navigateByUrl` on the router is now logged in the aciton
panel together with all parameters.

If you want to test the `routerLinkActive` directive in your story
you can set the active route for the story like this:

```js
export const WithActiveLink = Template.bind({});
WithActiveLink.parameters = {
    angularRouter: {active: '/location/1'}
};
```


If you want to **disable** the plugin for a single story you can
add the following parameter to your story:
```js
export const DisabledPlugin = Template.bind({});
DisabledPlugin.parameters = {
    angularRouter: {disable: true}
}
```

### How it works
The plugin adds the `RouterTestingModule` and a custom
`Router` implementation to your stories.
The custom `Router` implementation provides
only the most basic functionality needed to use it in your stories.
