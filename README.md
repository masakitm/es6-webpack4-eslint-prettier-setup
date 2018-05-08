# env setup
# eslint + airbnb + prettier + flow + babel

links
* https://www.kken.io/posts/prettier-eslint/
* http://tech-1natsu.hatenablog.com/entry/2018/01/07/154941
* https://qiita.com/isihigameKoudai/items/520c1cb6540e0641a00c
* https://babeljs.io/
* https://github.com/mizchi/rn-universal-components-boilerplate

format on save: eslint => prettier

## npm packages
for devDependencies

-D

```
// package name        (what for)

babel-core             (webpack)
babel-loader           (webpack)
babel-preset-react     (JSX / flow)
babel-preset-flow      (flow)
babel-eslint           (flow)
babel-preset-env       (old browsers)
babel-polyfill         (old browsers)

flow-bin               (flow, `$ yarn flow init` => `$ flow` to check types)

eslint
eslint-config-airbnb
eslint-plugin-import   (eslint-config-airbnb)
eslint-plugin-jsx-a11y (eslint-config-airbnb)
eslint-plugin-react    (eslint-config-airbnb)
eslint-config-prettier (webpack / eslint)
eslint-plugin-prettier (webpack / eslint)
eslint-plugin-flow     (flow)

prettier

webpack
webpack-cli            (webpack4)
webpack-dev-server
```

### notes
```
babel    : transpile js (ex: es6 to es5)
eslint   : error check for ECMA Script
prettier : format scripts very easily
flow     : ECMA Script type check

if you are a vscode user,
recommend the `Flow Language Support` plugin.
https://marketplace.visualstudio.com/items?itemName=flowtype.flow-for-vscode
```

## package.json scripts
```
…
"scripts": {
  "start": "webpack-dev-server --hot",
  "dev": "webpack --mode development",
  "build": "webpack --mode production",
  "lint": "node_modules/.bin/eslint 'src/**/*.js' --fix"
}
…
```

* start - start local server
* dev   - build development mode
* build - build productions mode
* lint  - eslint

## .babelrc
```
{
  "presets": [
    [
      "env",
      {
        "modules": false,
        "targets": {
          "browsers": [
            "last 2 versions",
            "safari >= 7"
          ]
        }
      }
    ],
    "flow",
    "react"
  ]
}
```

## .eslintrc
```
{
  "parser": "babel-eslint",
  "plugins": ["prettier", "react", "jsx-a11y", "import"],
  "extends": [
    "prettier",
    "prettier/flowtype",
    "prettier/react",
    "airbnb"
  ],
  "rules": {
    "quotes": ["error", "single"]
  }
}

```

## .editorconfig
```
root = true

[*]

indent_style = space
indent_size = 2

end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true
```

## .eslintignore
```
.*/node_modules/.*
dist/bundle.js
```

## .flowconfig
```
[ignore]
.*/node_modules/.*

[include]

[libs]

[lints]

[options]

[strict]
```
