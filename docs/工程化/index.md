# 前端工程化

## 如何理解工程化

在产品的设计与交付过程中，我们会对产品进行开发。
在开发环节中，我们有前端，后端，测试等部门。随着部门的增多，公司开发的组织架构越来越复杂，如何发挥组织管理资源的最大效能成为了一个问题。如果在团队中，每个开发人员朝的方向不同，那么就可能出现内耗。为了降低管理成本，提升效能，我们会用到一系列的管理工具。

- 降低管理成本:如打卡器，它能降低人力成本。
- 提升效能:如规范代码的规范，devOps,脚手架等,让初级前端工程师关注于业务本身，发挥他们的最大效能。

对于前端而言，我们会用到一些不同的管理工具来解决不同的问题。如同事的代码风格不一样，我们可以用 Eslint,Prettire；浏览器的兼容性有问题，那么我们用 babel,还有很多问题，如模块划分，命名规范，性能优化，版本控制，性能优化工具等。

我们把前端各个技术领域的管理工具汇集在一起进行有效的组织，这个过程叫做前端工程化。

## 工程化解决的问题

### JS语言问题

#### 兼容性

##### API 兼容

- 比如有些新的 API 在老的浏览器中不支持

```js
// node 16版本支持
// node 10版本不支持
const y = [1, 3, 2].toSorted((a, b) => a - b);
```

- 解决方案

```js
Array.prototype.flatMap = // ...
```

- polyfill

现在工程化主流的 polyfill 方案是使用，`core-js`

```js
require("core-js/modules/es.array.to-sorted");

const s = [1, 3, 2];
const y = s.toSorted((a, b) => a - b);

console.log(y);
console.log(s);
```

##### 语法兼容

- 一些低版本的浏览器不支持`aysnc await`语法

```js
// 低版本不支持
async function test() {
  return await Promise.resolve(1);
}

(async () => {
  console.log(await test());
})();
```

- 使用兼容性方案转换代码

```js
const regenerator = require("regenerator");

const fs = require("fs");
const path = require("path");

const dir = path.resolve(__dirname, "t.js");

const code = fs.readFileSync(dir, "utf-8");

console.log(code);

const s = regenerator.compile(code, {
  includeRuntime: true,
});

fs.writeFileSync(path.resolve(__dirname, "test.js"), s.code, "utf-8");
```

#### 语言增强
一些js不支持的语言也同样可以用语言增强来实现，以下是一些代码

+ jsx -> React.createElement
+ ts -> tsc -> js

#### 代码集成转换工具

现在市面上最主流的代码转换工具是Babel;

Babel是一个将代码转换为AST的工具，它可以使用一系列插件对AST进行操作，从而达到语法转换结果。

### CSS问题

#### 语法缺失

如循环判断拼接等

#### 功能缺失

如数学函数颜色函数自定义函数等

#### 兼容性
一些高阶

#### 解决方案

目前主流的解决方案有less、sass