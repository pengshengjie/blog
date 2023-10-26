# @babel/register

`@babel/register`一个由Babel提供的便利工具,它将Babel编译集成到Node.js的require()函数中。这意味着，当你在Node.js应用中require()一个JavaScript文件时，@babel/register会自动将这个文件通过Babel编译进行转化。

具体来说，如果你的代码中使用了新的ES6、ES7特性，或者使用了JSX语法等还未被Node原生支持的特性，正常情况下直接Node运行会报错。这时候你只需要在运行你的代码之前引入@babel/register，然后它就会帮你处理这些需要编译的代码。

使用方法

```js
require("@babel/register")({
  // Array of ignore conditions, either a regex or a function. (Optional)
  // File paths that match any condition are not compiled.
  ignore: [
    // When a file path matches this regex then it is **not** compiled
    /regex/,

    // The file's path is also passed to any ignore functions. It will
    // **not** be compiled if `true` is returned.
    function(filepath) {
      return filepath !== "/path/to/es6-file.js";
    },
  ],

  // Array of accept conditions, either a regex or a function. (Optional)
  // File paths that match all conditions are compiled.
  only: [
    // File paths that **don't** match this regex are not compiled
    /my_es6_folder/,

    // File paths that **do not** return true are not compiled
    function(filepath) {
      return filepath === "/path/to/es6-file.js";
    },
  ],

  // Setting this will remove the currently hooked extensions of `.es6`, `.es`, `.jsx`, `.mjs`
  // and .js so you'll have to add them back if you want them to be used again.
  extensions: [".es6", ".es", ".jsx", ".js", ".mjs"],

  // Setting this to false will disable the cache.
  cache: true,
});
```

默认情况下babel将忽略`node_modules`文件,可以通过修改ignore配置项修改它的默认行为

注意： @babel/register 不支持动态编译原生 Node.js ES 模块，因为目前还没有稳定的 API 来拦截 ES 模块加载。