module.exports = {
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-actions", "@storybook/addon-links"],
  webpackFinal: async config => {
    // Transpile Gatsby module because Gatsby includes un-transpiled ES6 code.
    config.module.rules[0].exclude = [/node_modules\/(?!(gatsby)\/)/]

    // use installed babel-loader which is v8.0-beta (which is meant to work with @babel/core@7)
    config.module.rules[0].use[0].loader = require.resolve("babel-loader")

    // use @babel/preset-react for JSX and env (instead of staged presets)
    config.module.rules[0].use[0].options.presets = [
      require.resolve("@babel/preset-react"),
      require.resolve("@babel/preset-env"),
    ]

    config.module.rules[0].use[0].options.plugins = [
      // use @babel/plugin-proposal-class-properties for class arrow functions
      require.resolve("@babel/plugin-proposal-class-properties"),
      // use babel-plugin-remove-graphql-queries to remove static queries from components when rendering in storybook
      require.resolve("babel-plugin-remove-graphql-queries"),
    ]

    // Prefer Gatsby ES6 entrypoint (module) over commonjs (main) entrypoint
    config.resolve.mainFields = ["browser", "module", "main"]

    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve("babel-loader"),
      options: {
        presets: [["react-app", { flow: false, typescript: true }]],
        plugins: [
          require.resolve("@babel/plugin-proposal-class-properties"),
          // use babel-plugin-remove-graphql-queries to remove static queries from components when rendering in storybook
          require.resolve("babel-plugin-remove-graphql-queries"),
        ],
      },
    })
    config.resolve.extensions.push(".ts", ".tsx")
    return config
  },
}

// module.exports = {
//   "stories": [
//     "../src/**/*.stories.mdx",
//     "../src/**/*.stories.@(js|jsx|ts|tsx)"
//   ],
//   "addons": [
//     "@storybook/addon-links",
//     "@storybook/addon-essentials"
//   ],
//   typescript: {
//     check: false,
//     checkOptions: {},
//     reactDocgen: 'react-docgen-typescript',
//     reactDocgenTypescriptOptions: {
//       shouldExtractLiteralValuesFromEnum: true,
//       propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
//     },
//   }
// }

// import { configure, addParameters } from "@storybook/react"
// import { addDecorator } from "@storybook/react"
// import React from "react"
// import GlobalStyles from "../src/global-style"
// function withGlobalStyles(storyFn) {
//   return (
//     <React.Fragment>
//       <GlobalStyles />
//       {storyFn()}
//     </React.Fragment>
//   )
// }
// addDecorator(withGlobalStyles)
// // automatically import all files ending in *.stories.js
// configure(require.context("../src", true, /\.stories\.tsx$/), module)
// // Gatsby's Link overrides:
// // Gatsby defines a global called ___loader to prevent its method calls from creating console errors you override it here
// global.___loader = {
//   enqueue: () => {},
//   hovering: () => {},
// }
// // Gatsby internal mocking to prevent unnecessary errors in storybook testing environment
// global.__PATH_PREFIX__ = ""
// // This is to utilized to override the window.___navigate method Gatsby defines and uses to report what path a Link would be taking us to if it wasn't inside a storybook
// window.___navigate = pathname => {
//   action("NavigateTo:")(pathname)
// }