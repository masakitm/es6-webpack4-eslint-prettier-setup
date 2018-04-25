# env setup
# eslint + airbnb + prettier + Flow + babel

links
* https://www.kken.io/posts/prettier-eslint/
* http://tech-1natsu.hatenablog.com/entry/2018/01/07/154941
* https://qiita.com/isihigameKoudai/items/520c1cb6540e0641a00c
* https://babeljs.io/

format on save: eslint => prettier

## packages
for devDependencies

```
// package name => what for

babel-core             (webpack)
babel-loader           (webpack)
babel-preset-env       (webpack)
babel-preset-react     (JSX / Flow)
babel-preset-flow      (flow)
babel-polyfill         (old browsers)

flow-bin               (Flow, `$ yarn flow init` => `$ flow` to check type)

eslint
eslint-config-airbnb
eslint-plugin-import   (eslint-config-airbnb)
eslint-plugin-jsx-a11y (eslint-config-airbnb)
eslint-plugin-react    (eslint-config-airbnb)
eslint-config-prettier (webpack / eslint)
eslint-plugin-prettier (webpack / eslint)

prettier

webpack
webpack-cli            (webpack4)
webpack-dev-server
```

### notes
* babel: transpile js (sample: es6 to es5)
* eslint: error check for ECMA Script
* prettier: format scripts by the rules

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
