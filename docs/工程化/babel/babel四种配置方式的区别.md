# babel 四种配置方式的区别.md

在 Babel 中，存在四种主要的方式来指定你的项目配置。下面来一一说明它们的区别：

## babel.config.js

此方法主要适用于那些需要在它们的整个应用程序级别共享 Babel 配置的大型单体应用程序或需要在项目根目录以外的目录中引用其他配置文件的项目。babel.config.js 不仅支持 JSON 格式，还能直接操作 JS 对象，更可以使用 JS 逻辑（例如环境变量或函数）进行条件配置。

## babel.config.json

在 Babel 7.8.0 以后，开始支持 .json 格式的配置文件。功能上相当于 babel.config.js ，但是因为是 JSON，所以只能写静态配置，不能包含 JavaScript 逻辑。

## .babelrc 或.babelrc.json

.babelrc 是一种更灵活的方式，特别是在处理大型项目中多层嵌套的目录结构。Babel 在执行时会在每个文件夹里查找 babel.config.js 或 .babelrc，这样可以对同一个项目中不同部分的代码分别进行不同的转译。与 babel.config.js 或 babel.config.json 相比，.babelrc 使用的配置更倾向于局部性，也就是说，Babel 将只会使用最匹配的 .babelrc 配置文件。与 .babelrc 类似，.babelrc.json 自 Babel 7.8.0 开始也得到支持。

## package.json

Babel 配置也可以在 package.json 文件中指定，其中的 babel 键将被作为配置项，适用于不希望在项目中散布太多 .babelrc 或 babel.config.\* 文件的情况下。

## 总结

总的来说，这四种配置方式为你提供了根据项目需要灵活选择的可能性。根据你的项目规模，你可能想在你的大型 monorepo 项目中考虑使用 babel.config.js/json，或是对一个更模块化的项目使用 .babelrc 或 package.json 的配置。所有这些配置方式最终都是为了让你的 Babel 配置更加适应你的具体项目需求。
