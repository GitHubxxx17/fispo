---
title: vue笔记（二）
categories: "笔记"
tags:
  - 笔记
  - vue
cover: /cover/g.jpg
---


# 组件

## 非单文件组件

>Vue中使用组件的三大步骤：**定义组件（创建组件）**->**注册组件**->**使用组件（写组件标签）**
   一、**如何定义一个组件？**
    使用`Vue.extend(options)`创建，其中options和 `new Vue(options)`时传入的哪个options几乎一样，但也有点区别：
    1、el不要写，为什么？---最终所有的组件都要经过一个vm的管理，由vm中的el决定服务哪个容器
    2、data必须写成函数，为什么？ ---避免组件被复用时，数据存在引用关系
    备注：使用template可以配置组件结构
   二、**如何注册组件？**
     1、局部注册：靠new Vue的时候传入components选项
     2、全局注册：靠`Vue.component('组件名',组件)`
   三、**编写组件标签：**
     `<student></student>`





<!-- tab 关于组件名 -->
**一个单词组成**：
第一种写法（首字母小写）：school
第二种写法（首字母大写）：School

**多个单词组成**：
第一种写法（kebab-case命名）：my-school
第二种写法（CamelCase命名）：MySchool（需要Vue脚手架支持）

**备注**：
(1). 组件名尽可能回避HTML中已有的元素名称，例如：h2，H2都不行
(2). 可以使用name的配置项指定组件在开发者工具中呈现的名字
<!-- endtab -->

<!-- tab 关于组件标签-->
**第一种写法**：`<school></school>`
**第二种写法**：`<school/>`
**备注**：不使用脚手架时，`<school/>`会导致后续组件不能渲染
<!-- endtab -->

<!-- tab 一个简写方式-->
`const school = Vue.extend(options)`可简写为 `const school = options`
<!-- endtab -->
 

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8"/>
        <title>基本使用</title>
        <script type="text/javascript" src="../js/vue.js"></script>
    </head>
    <body>
        <div id="root">
            <h1>{{msg}}</h1>
            <!-- 第三步：编写组件标签 -->
            <xuexiao></xuexiao>
            <hr>
            <student></student>
        </div>

        <div id='root2'>
            <hello></hello>
        </div>
    </body>

    <script type="text/javascript">
        Vue.config.productionTip = false

        //第一步：创建school组件
        const school = Vue.extend({
            template:`
                <div>
                    <h2>学校名称：{{schoolName}}</h2>
                    <h2>学校地址：{{address}}</h2>
                    <button @click="showName">点击，提示学校名</button>
                </div>
            `,
            //el:'#root', //组件定义时，一定不要写el配置项，因为最终所有的组件都要被一个vm管理，由vm决定服务于谁
            data () {
                return {
                    schoolName:'湖南大学',
                    address:'湖南省长沙市'
                }
            },
            methods: {
                showName(){
                    alert(this.schoolName)
                }
            }
        })

        const student = Vue.extend({
            template:`
                <div>
                    <h2>学生姓名：{{studentName}}</h2>
                    <h2>学生年龄：{{age}}</h2>
                </div>
            `,
            data () {
                return {
                    studentName:'张三',
                    age:18,
                }
            },
        })

        const hello = Vue.extend({
            template:`
                <div>
                    <h2>你好！{{name}}</h2>
                </div>
            `,
            data () {
                return {
                    name:'Tom',
                }
            }
        })

        //注册组件(全局注册)
        Vue.component('hello',hello)

        //创建vm
        new Vue({
            el:'#root',
            data:{
                msg:'你好，同学',
            },
            //第二步：注册组件（局部注册）
            components:{
                xuexiao:school,
                student  //它就是student:student，前是组件名，后是创建时的名字
            }
        })

        new Vue({
            el:'#root2'
        })
    </script>
</html>
```

关于VueComponent：
  1、school组件本质是一个名为VueComponent的构造函数，且不是程序员定义的，是Vue.extend生成的.
  2、我们只需要写`<school/>` 或 `<school><school/>`，Vue解析时会帮我们创建school组件的实例对象，
     即Vue会帮我们执行的: `new VueComponent(options)`
  3、特别注意：每次调用Vue.extend，返回的都是一个全新的VueComponent！！！
  4、关于this指向：
     1）组件配置中：
       data函数、methods中的函数、watch中的函数、computed中的函数，它们的this均是【VueComponent实例对象】
     2）new Vue(options)配置中：
       data函数、methods中的函数、watch中的函数、computed中的函数，它们的this均是【Vue实例对象】
  5、VueComponent的实例对象，以后简称vc（也可称之为：组件实例对象）
     Vue的实例对象，以后简称vm
     
1、一个重要的内置关系：`VueComponent.prototype.__proto__ === Vue.prototype`
2、为什么要有这个关系：让组件实例对象（vc）可以访问到Vue原型上的属性、方法

![](http://GitHubxxx17.github.io/img/vue/5.jpg)

## 单文件组件

### 安装脚手架
**简介**
Vue CLI（全名：command Line Interface）是一个基于 Vue.js 进行快速开发的完整系统。

**安装**
**命令行操作步骤**：
1. 下载速度慢先配置淘宝镜像：
```cmd
npm config set registry http://registry.npm.taobao.org
```
1. 全局安装：
```cmd
npm install -g @vue/cli
```
1. 测试是否安装成功
```cmd
vue -V 
```
1. 创建脚手架
```cmd
vue create vue_test
```
1. 选择vue版本
2. 进入创建好的文件夹并在cmd输入指令
```cmd
npm run serve
``` 

关闭语法检查
找到vue.config.js文件，在其中添加代码
```javascript
module.exports = defineConfig({
  lintOnSave:false //关闭语法检查
})
```


### 脚手架文件结构

>├── node_modules 
├── public
│   ├── favicon.ico: 页签图标
│   └── index.html: 主页面
├── src
│   ├── assets: 存放静态资源
│   │   └── logo.png
│   │── component: 存放组件
│   │   └── HelloWorld.vue
│   │── App.vue: 汇总所有组件
│   │── main.js: 入口文件
├── .gitignore: git版本管制忽略的配置
├── babel.config.js: babel的配置文件
├── package.json: 应用包配置文件 
├── README.md: 应用描述文件
├── package-lock.json：包版本控制文件


**关于不同版本的Vue**:
1. `vue.js`与`vue.runtime.xxx.js`的区别:
(1). `vue.js`是完整版的Vue，包含:**核心功能**+**模板解析器**
(2). `vue.runtime.xxx.js`是运行版的Vue，只包含: **核心功能**;**没有模板解析器**
2. 因为`vue.runtime.xxx.js`没有模板解析器，所以不能使用template配置项，需要使用`render`函数接收到的`createElement`函数去指定具体内容。
  

### 修改配置 
**vue.config.js配置文件**
- 使用`vue inspect > output.js`可以查看到Vue脚手架的默认配置。
- 使用`vue.config.js`可以对脚手架进行个性化定制，详情见：<a href="https://cli.vuejs.org/zh/config/">前往官网查看修改配置参考</a>


### ref属性
1. 被用来给元素或子组件注册引用信息（**id的替代者**）
2. 应用在html标签上获取的是真实DOM元素，应用在组件标签上是组件实例对象（vc）
3. **使用方式**：
   - 打标识：`<h1 ref="xxx">.....</h1>`或 `<School ref="xxx"></School>`
   - 获取：this.$refs.xxx


### prop属性

1. **功能**：让组件接收外部传过来的数据
2. **传递数据**：`<Demo name="xxx"/>`
3. **接收数据**：
 - 第一种方式（只接收）：`props:['name']`
 - 第二种方式（限制类型）：`props:{name:String}`
 - 第三种方式（限制类型、限制必要性、指定默认值）：
```javascript
props:{
	name:{
	type:String, //类型
	required:true, //必要性
	default:'老王' //默认值
	}
}
```

备注
props是只读的，Vue底层会监测你对props的修改，如果进行了修改，就会发出警告，若业务需求确实需要修改，那么请复制props的内容到data中一份，然后去修改data中的数据。


### mixin(混入)

1. **功能**：可以把多个组件共用的配置提取成一个混入对象
2. **使用方式**：
 - **第一步定义混合**：
    ```javascript
    {
        data(){....},
        methods:{....}
        ....
    }
    ```
 - **第二步使用混入**：
​  **全局混入**：`Vue.mixin(xxx)`
​  **局部混入**：`mixins:['xxx']`

### 插件

1. **功能**：用于增强Vue
2. **本质**：包含install方法的一个对象，install的第一个参数是Vue，第二个以后的参数是插件使用者传递的数据。
3. **定义插件**：
```javascript
对象.install = function (Vue, options) {
    // 1. 添加全局过滤器
    Vue.filter(....)

    // 2. 添加全局指令
    Vue.directive(....)

    // 3. 配置全局混入(合)
    Vue.mixin(....)

    // 4. 添加实例方法
    Vue.prototype.$myMethod = function () {...}
    Vue.prototype.$myProperty = xxxx
}
```
4.**使用插件**：`Vue.use()`

### scoped样式

1. **作用**：让样式在局部生效，防止冲突。
2. **写法**：`<style scoped>`


### 总结TodoList案例

>1. 组件化编码流程：
​ (1).拆分静态组件：组件要按照功能点拆分，命名不要与html元素冲突。
​ (2).实现动态组件：考虑好数据的存放位置，数据是一个组件在用，还是一些组件在用：
 - 一个组件在用：放在组件自身即可。
 - 一些组件在用：放在他们共同的父组件上（状态提升）。
​ (3).实现交互：从绑定事件开始。
2. props适用于：
​ (1).父组件 ==> 子组件 通信
​ (2).子组件 ==> 父组件 通信（要求父先给子一个函数）
3. 使用v-model时要切记：v-model绑定的值不能是props传过来的值，因为props是不可以修改的！
4. props传过来的若是对象类型的值，修改对象中的属性时Vue不会报错，但不推荐这样做。

### webStorage
1. 存储内容大小一般支持5MB左右（不同浏览器可能还不一样）
2. 浏览器端通过 `Window.sessionStorage` 和 `Window.localStorage` 属性来实现本地存储机制。
3. **相关API**：
- `xxxxxStorage.setItem('key', 'value')`:
 该方法接受一个键和值作为参数，会把键值对添加到存储中，如果键名存在，则更新其对应的值。
- `xxxxxStorage.getItem('person')`:
​ 该方法接受一个键名作为参数，返回键名对应的值。
- `xxxxxStorage.removeItem('key')`:
​ 该方法接受一个键名作为参数，并把该键名从存储中删除。
- `xxxxxStorage.clear()`:
​ 该方法会清空存储中的所有数据。

**备注**：
1. SessionStorage存储的内容会随着浏览器窗口关闭而消失。
2. LocalStorage存储的内容，需要手动清除才会消失。
3. `xxxxxStorage.getItem(xxx)`如果xxx对应的value获取不到，那么getItem的返回值是null。
4. `JSON.parse(null)`的结果依然是null。

### 组件的自定义事件

1. 一种组件间通信的方式，适用于：**子组件** ===> **父组件**
2. 使用场景：A是父组件，B是子组件，B想给A传数据，那么就要在A中给B绑定自定义事件（事件的回调在A中）。
3. 绑定自定义事件：
第一种方式，在父组件中：`<Demo @atguigu="test"/>`或 `<Demo v-on:atguigu="test"/>`
第二种方式，在父组件中：
```javascript
<Demo ref="demo"/>
......
mounted(){
   this.$refs.xxx.$on('atguigu',this.test)
}
```
若想让自定义事件只能触发一次，可以使用once修饰符，或`$once`方法。
4. 触发自定义事件：`this.$emit('atguigu',数据)`
5. 解绑自定义事件`this.$off('atguigu')`
6. 组件上也可以绑定原生DOM事件，需要使用native修饰符。
7. 注意：通过`this.$refs.xxx.$on('atguigu',回调)`绑定自定义事件时，回调要么配置在methods中，要么用箭头函数，否则this指向会出问题！

### 全局事件总线
1. 一种组件间通信的方式，适用于**任意组件间通信**。
2. **安装全局事件总线**：
```javascript
new Vue({
	......
	beforeCreate() {
		Vue.prototype.$bus = this //安装全局事件总线，$bus就是当前应用的vm
	},
    ......
}) 
```
3. **使用事件总线**：
- **接收数据**：A组件想接收数据，则在A组件中给$bus绑定自定义事件，事件的回调留在A组件自身。
```javascript
methods(){
  demo(data){......}
}
......
mounted() {
  this.$bus.$on('xxxx',this.demo)
}
```
- **提供数据**：`this.$bus.$emit('xxxx',数据)`
4. 最好在`beforeDestroy`钩子中，用$off去解绑当前组件所用到的事件。

### 消息订阅与发布（pubsub）

1. 一种组件间通信的方式，适用于**任意组件间通信**。
2. **使用步骤**：
- **安装pubsub**：`npm i pubsub-js`
- **引入**: `import pubsub from 'pubsub-js'`
- **接收数据**：A组件想接收数据，则在A组件中订阅消息，订阅的回调留在A组件自身。
```javascript
methods(){
  demo(data){......}
}
......
mounted() {
  this.pid = pubsub.subscribe('xxx',this.demo) //订阅消息
}
```
4. 提供数据：`pubsub.publish('xxx',数据)`
5. 最好在beforeDestroy钩子中，用`PubSub.unsubscribe(pid)`去取消订阅。

### nextTick

1. **语法**：`this.$nextTick`(回调函数)
2. **作用**：在下一次 DOM 更新结束后执行其指定的回调。
3. **什么时候用**：当改变数据后，要基于更新后的新DOM进行某些操作时，要在nextTick所指定的回调函数中执行。

### Vue封装的过度与动画
**作用**：在插入、更新或移除DOM元素时，在合适的时候给元素添加样式类名。
**写法**：
1. **准备好样式**：
 - 元素进入的样式：
    `v-enter`：进入的起点
    `v-enter-active`：进入过程中
    `v-enter-to`：进入的终点
 - 元素离开的样式：
    `v-leave`：离开的起点
    `v-leave-active`：离开过程中
    `v-leave-to`：离开的终点
2. 使用`<transition>`包裹要过度的元素，并配置name属性：
```javascript
<transition name="hello">
	<h1 v-show="isShow">你好啊！</h1>
</transition>
```
**备注**：若有多个元素需要过度，则需要使用：`<transition-group>`，且每个元素都要指定key值。

### vue脚手架配置代理
#### 方法一
在`vue.config.js`中添加如下配置：
```javascript
devServer:{
  proxy:"http://localhost:5000"
}
```
>**说明**：
**优点**：配置简单，请求资源时直接发给前端（8080）即可。
**缺点**：不能配置多个代理，不能灵活的控制请求是否走代理。
工作方式：若按照上述配置代理，当请求了前端不存在的资源时，那么该请求会转发给服务器 （优先匹配前端资源）

#### 方法二
​编写`vue.config.js`配置具体代理规则：
```javascript
module.exports = {
	devServer: {
      proxy: {
      '/api1': {// 匹配所有以 '/api1'开头的请求路径
        target: 'http://localhost:5000',// 代理目标的基础路径
        changeOrigin: true,
        pathRewrite: {'^/api1': ''}
      },
      '/api2': {// 匹配所有以 '/api2'开头的请求路径
        target: 'http://localhost:5001',// 代理目标的基础路径
        changeOrigin: true,
        pathRewrite: {'^/api2': ''}
      }
    }
  }
}
/*
   changeOrigin设置为true时，服务器收到的请求头中的host为：localhost:5000
   changeOrigin设置为false时，服务器收到的请求头中的host为：localhost:8080
   changeOrigin默认值为true
*/
```
>**说明**：
**优点**：可以配置多个代理，且可以灵活的控制请求是否走代理。
**缺点**：配置略微繁琐，请求资源时必须加前缀。

### 插槽
**作用**：让父组件可以向子组件指定位置插入html结构，也是一种组件间通信的方式，适用于 **父组件** ===> **子组件** 。

**分类**：默认插槽、具名插槽、作用域插槽
**默认插槽**：
```html
父组件中：
        <Category>
           <div>html结构1</div>
        </Category>
子组件Category中：
        <template>
            <div>
               <!-- 定义插槽 -->
               <slot>插槽默认内容...</slot>
            </div>
        </template>
```

**具名插槽**：
```html
父组件中：
        <Category>
            <template slot="center">
              <div>html结构1</div>
            </template>

            <template v-slot:footer>
               <div>html结构2</div>
            </template>
        </Category>
子组件Category中：
        <template>
            <div>
               <!-- 定义插槽 -->
               <slot name="center">插槽默认内容...</slot>
               <slot name="footer">插槽默认内容...</slot>
            </div>
        </template>
```
**作用域插槽**：
**理解**：数据在组件的自身，但根据数据生成的结构需要组件的使用者来决定。（games数据在Category组件中，但使用数据所遍历出来的结构由App组件决定）
**具体编码**：
```html
父组件中：
<!-- 父组件中展示下面两种不同的子组件结构。使用的都是子组件中的同一个数据 -->
<Category>
    <template scope="scopeData">
        <!-- 生成的是ul列表 -->
        <ul>
            <li v-for="g in scopeData.games" :key="g">{{g}}</li>
        </ul>
    </template>
</Category>

<Category>
    <template slot-scope="scopeData">
        <!-- 生成的是h4标题 -->
        <h4 v-for="g in scopeData.games" :key="g">{{g}}</h4>
    </template>
</Category>
子组件中Category：
<template>
    <div>
        <slot :games="games"></slot>
    </div>
</template>

<script>
    export default {
        name:'Category',
        props:['title'],
        //数据在子组件自身
        data() {
            return {
                games:['红色警戒','穿越火线','劲舞团','超级玛丽']
            }
        },
    }
</script>
```