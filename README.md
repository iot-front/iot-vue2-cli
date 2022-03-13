# developcenter

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

# 项目开发规范

### 项目结构
``` javascript
├── src 
│   ├── api                           // 全局配置
│   ├── components                    // 全局公共组件
│   ├── assset                        // 全局配置
│   │   ├── css                       // 全局CSS
│   │   └── images                    // 图片存储路径
│   │   
│   ├── router                        // 路由
│   │   ├── product                   // 第一层级目录路由配置文件
│   │   │   └── index.js              // 第一层级路由配置js
│   │   └── index.js                  // 主路由index.js
│   │   
│   ├── directives                    // 全局指令
│   │   └── permission.js             // 权限控制
│   │   
│   ├── store                         // 通用枚举
│   ├── api                           // 通用枚举
│   ├── utils                         // 工具类处理
│   │   
│   └── views                         // 页面
│   │   └── menuFile                  // 一级菜单入口文件
│   │      ├── components             // 组件
│   │      └── 二级菜单入口             // 文件夹
│   │          └── index.vue          // 页面vue名称
│   │          ...                    // 多级菜单入口
│   │          
│   │          
├── public                            // 代码生成
```
后续如果新增菜单入口需要在项目结构中添加。

### Router 路由配置
```
const router = [
    { 
        // 配置的路由和文件位置保持一致
        path: '/products/poductionApproval/rollup',
        component: () => import('@/views/products/productRollup/index.vue'),
        name: "productionRollup",
        meta: { 
            keepAlive: false,
            // 目录名称，方便根据目录搜索文件名
            name: '产品数据回滚管理', 
        },
        children: [{
            ...
        }]
    }
]
```
### 命名规范

#### 文件命名

驼峰命名：mallManagementSystem

kebab-case 命名：mall-management-system

#### 命名严谨性

英文全拼或者国际通用名称，禁止使用拼音

正例：henan / luoyang / rmb 等国际通用的名称，可视同英文。

杜绝完全不规范的缩写，避免望文不知义：

反例：AbstractClass“缩写”命名成 AbsClass；condition“缩写”命名成 condi，此类随意缩写严重降低了代码的可阅读性。

### HTML规范

#### 缩进

缩进使用 2 个空格（一个 tab）

嵌套的节点应该缩进。

#### 分块注释

对每个功能块元素，加上HTML注释


#### 语义化

HTML5 中新增很多语义化标签，所以优先使用语义化标签，避免一个页面都是 div 或者 p 标签

正例
``` html
<header></header>
<footer></footer>
```
反例
``` html
<div></div>
<div></div>
```
### CSS规范

#### 命名规范

类名使用小写字母，以中划线分隔
id 采用驼峰式命名
scss 中的变量、函数、混合、placeholder 采用驼峰式命名
ID 和 class 的名称总是使用可以反应元素目的和用途的名称，或其他通用的名称，代替表象和晦涩难懂的名称

不推荐：
``` css
.fw-800 {
  font-weight: 800;
}

.red {
  color: red;
}
```
推荐
``` css
.heavy {
  font-weight: 800;
}

.important {
  color: red;
}
```
#### 选择器

1、css 选择器中避免使用标签名

从结构、表现、行为分离的原则来看，应该尽量避免 css 中出现 HTML 标签，并且在 css 选择器中出现标签名会存在潜在的问题

2、很多前端开发人员写选择器链的时候不使用 直接子选择器（注：直接子选择器和后代选择器的区别）。有时，这可能会导致疼痛的设计问题并且有时候可能会很耗性能。然而，在任何情况下，这是一个非常不好的做法。如果你不写很通用的，需要匹配到 DOM 末端的选择器， 你应该总是考虑直接子选择器。

不推荐：
``` css
.content .title {
  font-size: 2rem;
}
```
推荐：
``` css
.content > .title {
  font-size: 2rem;
}
```
尽量使用缩写属性

推荐：
``` css
border-top: 0;
font: 100%/1.6 palatino, georgia, serif;
padding: 0 1em 2em;
```
不推荐
``` css
border-top-style: none;
font-family: palatino, georgia, serif;
font-size: 100%;
padding-bottom: 2em;
padding-left: 1em;
padding-right: 1em;
padding-top: 0;
```
避免嵌套层级过多

将嵌套深度限制在3级。对于超过4级的嵌套，给予重新评估。这可以避免出现过于详实的CSS选择器。

避免大量的嵌套规则。当可读性受到影响时，将之打断。推荐避免出现多于20行的嵌套规则出现

``` scss
// 不推荐
main{
  .title{
    .name{
       color:#fff
    }
  }
}

// 推荐
.main-title{
   .name{
      color:#fff
   }
}
```
### SCSS代码格式

1、@import; 
2、变量声明; 
3、样式声明;
``` scss
@import "mixins/size.scss";

$default-text-color: #333;

.page {
  width: 960px;
  margin: 0 auto;
}
```
### Javascript 规范

#### 缩进

缩进使用 2 个空格（一个 tab）

#### 命名

小驼峰命名方式 lowerCamelCase（变量、函数）

method 方法必须是动词 或者 动词+名称形式

正例：saveShopCarData /openShopCarInfoDialog

对增删改查使用：add / delete / update / query、

#### 函数注释

vscode配置相关插件
``` javascript
/**
  * fn: description
  * @param {number} a
  * @param {number} b
  * @returns number
  * author: 
  * Date: 
  */
function sum(a, b) {
    return a + b
}
```
#### 常量定义

常量命名全部大写，单词间用下划线隔开，力求语义表达完整清楚，不要嫌名字长。

const MAX_STOCK_COUNT = 0
### VUE 规范

#### Vue 编码基础

vue 项目规范以Vue 官方规范（https://cn.vuejs.org/v2/style-guide/）

组件名为多个单词
``` javascript
Vue.component("todo-item", {
    ....
})

export default {
    name: "TodoItem"
    // ...
}
```
#### Props 定义

props定义应该尽量详细。

它们写明了组件的 API，所以很容易看懂组件的用法；
在开发环境下，如果向一个组件提供格式不正确的 prop，Vue 将会告警，以帮助你捕获潜在的错误来源。
``` javascript
props: {
  status: {
    type: String,
    required: true,
    validator: function (value) {
      return [
        'syncing',
        'synced',
        'version-conflict',
        'error'
      ].indexOf(value) !== -1
    }
  }
}
```