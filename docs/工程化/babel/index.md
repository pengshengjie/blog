---
sidebar_position: 1
---

# babel
Babel是JavaScript的编译器
使用最新的JavaScript语法

## 什么是Babel
Babel主要的是提供ES6+语法向后兼容,它主要可以做以下的事
+ 语法转换

比如我想把ES6的语法转为ES5,箭头函数转为function,demo如下
```js
// 转换前
[1, 2, 3].map(n => n + 1);
```
```js
// 转换后
[1, 2, 3].map(function(n) {
  return n + 1;
});
```

+ 填充当前环境缺失的特性(polyfill)

Babel通过polyfill可以支持最新的ES语法

+ 源代码转换

Babel可以转换非js语法的功能,如jsx

将`@babel/preset-react`作为预设配置到babel中既可支持jsx语法

TypeScript支持

将`@babel/preset-typescript`作为预设配置到babel中,Babel可以支持ts类型,将ts转换为js

## 插件机制

Babel是用插件集成的,使用现有插件或者自定义插件组合你自己的预设

使用 [astexplorer.net](https://astexplorer.net) 即时创建插件或使用生成器-babel-plugin 生成插件模板。


```js
// 这是一个插件的demo
export default function({ types: t }) {
  return {
    visitor: {
      Identifier(path) {
        let name = path.node.name; // reverse the name: JavaScript -> tpircSavaJ
        path.node.name = [...name]
          .reverse()
          .join("");
      },
    },
  };
}
```