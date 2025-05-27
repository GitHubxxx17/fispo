---
title: vue3笔记（四）
categories: "笔记"
tags:
  - 笔记
  - vue
cover: /cover/f.jpg
---

# Vue3简介


{% timeline vue3简介 %}

<!-- timeline 性能的提升 -->

1. 打包大小减少41%
2. 初次渲染快55%, 更新渲染快133%
3. 内存减少54%

<!-- endtimeline -->

<!-- timeline 源码的升级-->

使用`Proxy`代替`defineProperty`实现响应式
重写虚拟`DOM`的实现和`Tree-Shaking`

<!-- endtimeline -->

<!-- timeline 支持TypeScript-->

Vue3可以更好的支持`TypeScript`

<!-- endtimeline -->

<!-- timeline Vue3新的特性-->

1. Composition API（组合API）
  `setup`配置
  `ref`与`reactive`
  `watch`与`watchEffect`
  `provide`与 `inject`
2. 新的内置组件
  `Fragment`
  `Teleport`
  `Suspense`
3. 其他改变
  新的生命周期钩子
  `data`选项应始终被声明为一个函数
  移除`keyCode`支持作为`v-on`的修饰符


<!-- endtimeline -->

{% endtimeline %}


# 创建Vue3.0工程

## 使用 vue-cli 创建（<a href="https://cli.vuejs.org/zh/guide/creating-a-project.html#vue-create">官方文档vue-create</a>）

```cmd
## 查看@vue/cli版本，确保@vue/cli版本在4.5.0以上
vue --version
## 安装或者升级你的@vue/cli
npm install -g @vue/cli
## 创建
vue create vue_test
## 启动
cd vue_test
npm run serve
```

## 使用 vite 创建（<a href="https://v3.cn.vuejs.org/guide/installation.html#vite">官方文档vite</a>）


<a href="https://vitejs.cn">vite官网</a>

什么是vite？—— 新一代前端构建工具。
优势如下：
1. 开发环境中，无需打包操作，可快速的冷启动。
2. 轻量快速的热重载（HMR）。
3. 真正的按需编译，不再等待整个应用编译完成。


传统（Webpack）构建与 Vite 构建对比图

![](http://GitHubxxx17.github.io/img/vue/6.png)
![](http://GitHubxxx17.github.io/img/vue/7.png)

# 分析文件目录
## main.js

<!-- tab vue2-->
```javascript
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
```
<!-- endtab -->

<!-- tab vue3-->
```javascript
// 引入的不再是Vue构造函数了，引入的是一个名为createApp的工厂函数
import { createApp } from 'vue'
import App from './App.vue'

// 创建应用实例对象——app(类似于之前Vue2中的vm，但app是轻量级（部分API），vm是重量级（所有的API）)
const app = createApp(App)
console.log(app)
// 挂载
app.mount('#app')
```
<!-- endtab -->

## App.vue
我们再来看看组件，在`template`标签里可以没有根标签了
```html
<template>
	<!-- Vue3组件中的模板结构可以没有根标签 -->
	<img alt="Vue logo" src="./assets/logo.png">
	<HelloWorld msg="Welcome to Your Vue.js App"/>
</template>
```

# 常用 Composition API

## setup
>1. setup是Vue3中一个新的配置项，值为一个函数。
2. setup是所有Composition API（组合API） 表演的舞台 。
3. 组件中所用到的：数据、方法等等配置项，均要配置在setup中。
4. setup函数的两种返回值：
- 若返回一个对象，则对象中的属性、方法，在模板（template标签）中均可以直接使用。(setup中的重点)
- 若返回一个渲染函数：则可以自定义渲染内容。（了解的内容）

**注意点**：
1. 尽量不要与Vue2的配置混用
- Vue2.x配置（data、methos、computed…）中可以访问到setup中的属性、方法。
- 但在setup中不能访问到Vue2.x配置（data、methos、computed…）。
- 如果有重名, setup优先。
2. setup不能是一个async函数，因为返回值不再是return的对象, 而是promise, 模板看不到return对象中的属性。（后期也可以返回一个Promise实例，但需要Suspense和异步组件的配合）

setup函数配置具体实现：
```javascript
<!--Vue3的setup函数配置-->
<template>
  <h1>Vue3的setup配置</h1>
  <h2>姓名：{{username}}</h2>
  <h2>性别：{{sex}}</h2>
  <h2>个人介绍：我是{{username}},性别{{sex}}</h2>
</template>
<script>
  export default {
    name: 'App',
    setup() {
      // 定义
      let username = 'Shier'
      let sex = '男'
      // 定义函数调用
      function personInfo() {
        alert('我是' + username + '性别为:' + sex)
      }
      // 将变量或者函数返回 ,返回的是一个对象 ，放回的属性就可以直接在template标签中直接使用，不需要使用this
      return {
        username,
        sex,
        personInfo
      }
    }
  }
</script>
```

## ref函数
>1. **作用**: 定义一个 ref 响应式的数据
2. **语法**: `const xxx = ref(initValue)`
创建一个包含响应式数据的引用对象（reference对象，简称ref对象）。
**JS中操作数据**： `xxx.value`
**模板中读取数据**: 不需要`.value`，直接：`<div>{{xxx}}</div>`

使用ref函数需要注意三点：
1. 接收的数据可以是：基本类型、也可以是对象类型。
2. 基本类型的数据：响应式依然是靠`Object.defineProperty()`的get与set完成的。
3. 对象类型的数据：内部求助了Vue3.0中的一个新函数—— reactive函数。

ref函数的具体实现:
```javascript
<!--Vue3的setup函数配置-->
<template>
  <h1>个人信息</h1>
  <h2>姓名：{{ username }}</h2>
  <h2>性别：{{ sex }}</h2>
  <button @click="changeInfo">修改信息</button>
</template>
<script>
  // 导入reactive
  import {ref} from "vue";

  export default {
    name: 'App',
    setup() {
      // 定义变量,使用ref函数响应式声明
      let username = ref('Shier')
      let sex = ref('男')

      // 定义修改信息函数
      function changeInfo() {
        username.value = 'shier1122'
        sex.value = '女'
      }

      // 返回值，上面定义的变量、函数、方法
      return {
        username,
        sex,
        changeInfo,
        job
      }
    }
  }
</script>
```


## reactive函数
>1. reactive只能定义一个对象、数组类型的响应式数据（基本类型不要用它，要用ref函数）
2. **语法**：`const 代理对象= reactive(源对象)`接收一个对象（或数组），返回一个代理对象（Proxy的实例对象，简称proxy对象）
3. reactive定义的响应式数据是深层次的。
4. 内部基于 ES6 的 Proxy 实现，通过代理对象操作源对象内部数据进行操作。

```javascript
<!--Vue3的reactive-->
<template>
  <h1>个人信息</h1>
  <h2>姓名：{{ person.username }}</h2>
  <h2>性别：{{ person.sex }}</h2>
  <h2>工作：{{ person.type }}</h2>
  <h2>薪水：{{ person.salary }}</h2>
  <button @click="changeInfo">修改信息</button>
</template>
<script>
  // 导入reactive
  import {reactive} from "vue";

  export default {
    name: 'App',
    setup() {
      // 使用reactive创建对象数据类型
      let person = reactive({
        username: 'Shier',
        sex: '男',
        type: '全栈工程师',
        salary: '40k',
        // 使用reactive创建数组数据类型
        hobby: reactive(['学习', '跑步', '编程'])
      })

      // 定义修改信息函数
      function changeInfo() {
        person.username = 'shier22'
        person.sex = '女'
        // reactive修改对象数据
        person.salary = '45k'
        person.type = '产品经理'
        // reactive 修改数组数据：通过索引值修改
        person.hobby[0] = '打王者'
      }

      // 返回值，上面定义的变量、函数、方法
      return {
        person,
        changeInfo,
      }
    }
  }
</script>
```

## Vue3中的响应式原理

<!-- tab vue2.x的响应式-->
**实现原理**：
- **对象类型**：通过`Object.defineProperty()`对属性的读取、修改进行拦截（数据劫持）。
- **数组类型**：通过重写更新数组的一系列方法来实现拦截。（对数组的变更方法进行了包裹）。

```javascript
Object.defineProperty(data, 'count', {
    get () {}, 
    set () {}
})
```

**存在问题**：
- 新增属性、删除属性, 界面不会更新。
- 直接通过下标修改数组, 界面不会自动更新。
<!-- endtab -->

<!-- tab Vue3.0的响应式 -->

**实现原理**:
- **通过Proxy（代理）**: 拦截对象中任意属性的变化, 包括：属性值的读写、属性的添加、属性的删除等。
- **通过Reflect（反射）**: 对源对象的属性进行操作。
MDN文档中描述的<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy">Proxy</a>与<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect">Reflect</a>
```javascript
new Proxy(data, {
	// 拦截读取属性值
    get (target, prop) {
    	return Reflect.get(target, prop)
    },
    // 拦截设置属性值或添加新属性
    set (target, prop, value) {
    	return Reflect.set(target, prop, value)
    },
    // 拦截删除属性
    deleteProperty (target, prop) {
    	return Reflect.deleteProperty(target, prop)
    }
})

proxy.name = 'tom'
```
<!-- endtab -->


Proxy具体实现案例
```javascript
<!--Vue3的reactive-->
<template>
  <h1>个人信息</h1>
  <h2>姓名：{{ person.username }}</h2>
  <h2>性别：{{ person.sex }}</h2>
  <h2 v-show="person.age">年龄：{{ person.age }}</h2>
  <h2 v-show="person.type">工作：{{ person.type }}</h2>
  <h2>薪水：{{ person.salary }}</h2>
  <button @click="changeInfo">修改信息</button>
  <button @click="deleteInfo">删除工作</button>
  <button @click="addAge">添加年龄</button>
</template>
<script>
  // 导入reactive
  import {reactive} from "vue";

  export default {
    name: 'App',
    setup() {
      // 使用reactive创建对象数据类型
      let person = reactive({
        username: 'Shier',
        sex: '男',
        type: '全栈工程师',
        salary: '40k',
        // 使用reactive创建数组数据类型
        hobby: reactive(['学习', '跑步', '编程'])
      })

      // 定义修改信息函数
      function changeInfo() {
        person.username = 'shier22'
        person.sex = '女'
        // reactive修改对象数据
        person.salary = '45k'
        person.type = '产品经理'
        // reactive 修改数组数据：通过索引值修改
        person.hobby[0] = '打王者'
      }
      // Vue3中增删改查
      function addAge() {
        person.age = '18'
      }
      function deleteInfo() {
       delete person.type
      }

      // 返回值，上面定义的变量、函数、方法
      return {
        person,
        changeInfo,
        addAge,
        deleteInfo
      }
    }
  }
</script>
```


## reactive对比ref

**从定义数据角度对比**：
- ref用来定义：基本类型数据。
- reactive用来定义：对象（或数组）类型数据。

**备注**：ref也可以用来定义对象（或数组）类型数据, 它内部会自动通过`reactive`转为代理对象。

**从原理角度对比**：
- ref通过`Object.defineProperty()`的get与set来实现响应式（数据劫持）。
- reactive通过使用Proxy来实现响应式（数据劫持）, 并通过Reflect操作源对象内部的数据。

**从使用角度对比**：
- ref定义的数据：操作数据需要`.value`，读取数据时模板中直接读取不需要`.value`。
- reactive定义的数据：操作数据与读取数据：均不需要`.value`。


## setup的两个注意点
**setup执行的时机**：在beforeCreate之前执行一次，this是undefined。
**setup的参数**：
**props**：值为对象，包含：组件外部传递过来，且组件内部声明接收了的属性。
**context**：上下文对象
- **attrs**: 值为对象，包含：组件外部传递过来，但没有在props配置中声明的属性, 相当于`this.$attrs`。
- **slots**: 收到的插槽内容, 相当于 `this.$slots`。
- **emit**: 分发自定义事件的函数, 相当于 `this.$emit`。

## 计算属性与监视
### computed函数

与Vue2.x中`computed`配置功能一致
在Vue3中的计算属性属于一个组合，需要引入，`computed`函数

```javascript
import {computed} from 'vue'

setup(){
    ...
	//计算属性——简写
    let fullName = computed(()=>{
        return person.firstName + '-' + person.lastName
    })
    //计算属性——完整
    let fullName = computed({
        get(){
            return person.firstName + '-' + person.lastName
        },
        set(value){
            const nameArr = value.split('-')
            person.firstName = nameArr[0]
            person.lastName = nameArr[1]
        }
    })
}
```
具体实现名字合并案例

```javascript
<template>
  <h1>个人信息</h1>
  姓：<input type="text" v-model="person.firstName"><br><br>
  名：<input type="text" v-model="person.lastName"><br><br>
  <span>全名： {{person.fullName}}</span><br><br>
  修改名字：<input type="text" v-model="person.fullName">
</template>

<script>
  // 导入reactive,在
  import {reactive, computed} from "vue";

  export default {
    name: "ComputedDemo",
    setup() {
      // 使用reactive创建对象数据类型
      let person = reactive({
        firstName: '十',
        lastName: '二',
      })
      /*// 简单写法（只读）将computed组合创建在person对象中,将值返回
      person.fullName = computed(() => {
        return person.firstName + '-' + person.lastName
      })*/
      // 完整写法（读写）将computed组合创建在person对象中,将值返回
      person.fullName = computed({
        get(){
          return person.firstName + '-' + person.lastName
        },
        set(value){
          const nameArray = value.split('-')
          person.firstName = nameArray[0]
          person.lastName = nameArray[1]
        }
      })
      // 返回值，上面定义的变量、函数、方法
      return {
        person
      }
    }
  }
</script>
```


### watch函数
与Vue2.x中watch配置功能一致
**两个小“坑”**：
- 监视reactive定义的响应式数据时：oldValue无法正确获取、强制开启了深度监视（deep配置失效）。
- 监视reactive定义的响应式数据中某个属性时：deep配置有效。

```javascript
<template>
  <h1 v-show="sum">当前求和结果{{ sum }}</h1><br>
  <button @click="sum++">sum+1</button>
  <hr>
  <h1 v-show="msg">当前信息：{{ msg }}</h1><br>
  <button @click="msg+='@'">信息修改</button>
  <hr>
  <h1 v-show="person.name">姓名:{{person.name}}</h1><br>
  <h1 v-show="person.age">年龄:{{person.age}}</h1><br>
  <h1 v-show="person.job.salary">薪资:{{person.job.salary}}K</h1><br>
  <button @click="person.name+='~'">姓名修改</button>
  <button @click="person.age++">年龄增加</button>
  <button @click="person.job.salary++">薪资++</button>
</template>

<script>
  // 引入需要的组合
  import {reactive, ref, watch} from "vue";

  export default {
    name: "WatchDemo",
    setup() {
      // 监视的数据
      let sum = ref(1)
      let msg = ref('Vue3')
      let person = reactive({
        name: 'Shier',
        age: 19,
        job: {
          job1: '全栈',
          salary:88
        }
      })

      //情况一：监视ref定义的响应式数据
      /*watch(sum, (newValue, oldValue) => {
        console.log('sum变化了', newValue, oldValue)
      }, {immediate: true})

      //情况二：监视多个ref定义的响应式数据
      watch([sum, msg], (newValue, oldValue) => {
        console.log('sum或msg变化了', newValue, oldValue)
      })

      /!* 情况三：监视reactive定义的响应式数据(也就是监视的是person整个对象，则会自动强制开启深度监视)
            若watch监视的是reactive定义的响应式数据，则无法正确获得oldValue！！
            若watch监视的是reactive定义的响应式数据，则强制开启了深度监视
      *!/
      watch(person, (newValue, oldValue) => {
        console.log('person变化了', newValue, oldValue)
      }, {immediate: true, deep: false}) //此处的deep配置不再奏效

      //情况四：监视reactive定义的响应式数据中的某个属性
      watch(() => person.job, (newValue, oldValue) => {
        console.log('person的job变化了', newValue, oldValue)
      }, {immediate: true, deep: true})

      //情况五：监视reactive定义的响应式数据中的某些属性
      watch([() => person.job, () => person.name], (newValue, oldValue) => {
        console.log('person的job变化了', newValue, oldValue)
      }, {immediate: true, deep: true})
*/
      //特殊情况
      watch(() => person.job, (newValue, oldValue) => {
        console.log('person的job变化了', newValue, oldValue)
      }, {deep: true}) //此处由于监视的是reactive素定义的对象中的某个属性，所以deep配置有效

      return {
        sum,
        msg,
        person
      }
    }
  }
</script>
```

### watchEffect函数

>**watch的套路是**：既要指明监视的属性，也要指明监视的回调。
**watchEffect的套路是**：不用指明监视哪个属性，监视的回调中用到哪个属性，那就监视哪个属性。
**watchEffect有点像computed**：
- 但computed注重的计算出来的值（回调函数的返回值），所以必须要写返回值。
- 而watchEffect更注重的是过程（回调函数的函数体），所以不用写返回值。

```javascript
//watchEffect所指定的回调中用到的数据只要发生变化，则直接重新执行回调。
watchEffect(()=>{
    const x1 = sum.value
    const x2 = person.age
    console.log('watchEffect配置的回调执行了')
})
```

## Vue3生命周期

Vue3.0中可以继续使用Vue2.x中的生命周期钩子，但有有两个被更名：
- `beforeDestroy`改名为 `beforeUnmount`
- `destroyed`改名为 `unmounted`

Vue3.0也提供了 Composition API 形式的生命周期钩子，与Vue2.x中钩子对应关系如下：
- `beforeCreate`==>`setup()`
- `created` ==>`setup()`
- `beforeMount` ==>`onBeforeMount`
- `mounted`==>`onMounted`
- `beforeUpdate`==>`onBeforeUpdate`
- `updated` ==>`onUpdated`
- `beforeUnmount` ==>`onBeforeUnmount`
- u`nmounted` ==>`onUnmounted`

使用组合式 API 名称时，在前面添加 `onXxxx`

![](http://GitHubxxx17.github.io/img/vue/8.png)

## 自定义hook函数

>什么是hook？—— 本质是一个函数，把setup函数中使用到的Composition API（组合式API）进行了封装。
类似于vue2.x中的mixin。
自定义hook的优势：
- 复用代码。 
- 让setup中的逻辑更清楚易懂。
在工程目录下创建一个hooks文件夹，里面的文件命名规则useXxxx 明起意

使用案例
hooks/usePont.js
```javascript
// 引入需要的组合
import {reactive, onBeforeMount, onBeforeUnmount} from "vue";

// 创建函数 点击函数并且暴露出去
export default function () {
  // 实现鼠标点击获取坐标数据
  let point = reactive({
    x: 0,
    y: 0
  })

  // 实现方法
  function doPoint(e) {
    point.x = e.pageX
    point.y = e.pageY
    console.log('点击坐标为：(' + e.pageX + ',' + e.pageY + ')')
  }

  // 调用生命周期钩子-- 挂载之前 添加事件
  onBeforeMount(() => {
    window.addEventListener('mousemove', doPoint)
  })
  // 调用生命周期钩子-- 卸载挂载之前 移除事件
  onBeforeUnmount(() => {
    window.removeEventListener('mousemove', doPoint)
  })
  // 必须返回point 不然没有数据传入，报错
  return point
}
```

CustomHooksDemo.vue
```javascript
<template>
  <h1>当前求和结果:{{ sum }}</h1><br>
  <button @click="sum++">sum+1</button>
  <hr>
  <h1>当前鼠标坐标为:({{ point.x }},{{point.y}})</h1><br>
</template>

<script>
  // 引入需要的组合
  import {ref} from "vue";
  import usePoint from "../hooks/usePoint";

  export default {
    name: "CustomHooksDemo",
    setup() {
      console.log('组合setup--------')
      // 监视的数据
      let sum = ref(0)
      // 调用引入的usePoint函数
      let point = usePoint()
      return {sum,point}
    },
  }
</script>
```

Test.vue
```javascript
<template>
  <h1>当前鼠标坐标为:({{ point.x }},{{ point.y }})</h1><br>
</template>
<script>
  // 引入需要的组合
  import usePoint from "../hooks/usePoint";

  export default {
    name: "Test",
    setup() {
      // 调用usePoint函数，使用里面的鼠标移动来获取到坐标
      const point = usePoint()
      return {point}
    }
  }
</script>
```

APP.vue
```javascript
<!--Vue3的自定义hook-->
<template>
  <button @click="isShowDate = !isShowDate">隐藏/显示</button>
  <LifecycleDemo v-if="isShowDate"/>
  <hr>
  <Test/>
</template>
<script>
  // 引入组件
  import LifecycleDemo from "./components/CustomHooksDemo";
  import Test from "./components/Test";
  // 引入组合
  import {ref} from 'vue'

  export default {
    name: 'App',
    // 注册组件
    components: {LifecycleDemo,Test},
    setup() {
      let isShowDate = ref(true)
      return {
        isShowDate
      }
    }
  }
</script>
```


## toRef

>**作用**：创建一个 ref 对象，其value值指向另一个对象中的某个属性。
**语法**：`const name = toRef(person,'name')`
**应用**: 要将响应式对象中的某个属性单独提供给外部使用时。
**扩展**：toRefs与toRef功能一致，但可以批量创建多个 ref 对象，语法：`toRefs(person)`

```javascript
<template>
  <h1 v-show="person.name">姓名:{{person.name}}</h1><br>
  <h1 v-show="person.age">年龄:{{person.age}}</h1><br>
  <h1 v-show="person.job.salary">薪资:{{person.job.salary}}K</h1><br>
  <button @click="person.name+='~'">姓名修改</button>
  <button @click="person.age++">年龄增加</button>
  <button @click="person.job.salary++">薪资++</button>
</template>

<script>
  // 引入toRef、toRefs组合
  import {reactive,toRef,toRefs} from "vue";

  export default {
    name: "toRef",
    setup() {
      // 监视的数据
      let person = reactive({
        name: 'Shier',
        age: 19,
        job: {
          job1: '全栈',
          salary:88
        }
      })
      // toRef
      let nameRef = toRef(person,'name'); // 第一个参数为数据对象，第二个参数为数据对象的属性

      return {
        person,
        // toRef 写法
        name:toRef(person,'name'),
        salary: toRef(person.job,'salary'),
        // toRefs写法
        ...toRefs(person) // 将person中多个属性返回给模板使用
      }
    }
  }
</script>
```

# 其它 Composition API（组合API）

## shallowReactive 与 shallowRef

>**shallowReactive**：只处理对象最外层属性的响应式（浅响应式）。
**shallowRef**：只处理基本数据类型的响应式，不进行对象的响应式处理。
什么时候使用?
如果有一个对象数据，结构比较深， 但变化时只是外层属性变化 ===> `shallowReactive`。
如果有一个对象数据，后续功能不会修改该对象中的属性，而是生新的对象来替换 ===> `shallowRef`。

## readonly 与 shallowReadonly

**readonly**: 让一个响应式数据变为只读的（深只读）。
**shallowReadonly**：让一个响应式数据变为只读的（浅只读）。
**应用场景**: 不希望数据被修改时。

```javascript
<template>
  <h1>姓名:{{ name }}</h1><br>
  <h1>年龄:{{ age }}</h1><br>
  <h1>薪资:{{ job.job1.salary }}K</h1><br>
  <button @click="name+='~'">姓名修改</button>
  <button @click="age++">年龄增加</button>
  <button @click="job.job1.salary++">薪资++</button>
</template>

<script>
  // 引入组合
  import {reactive, toRefs, readonly,shallowReadonly} from "vue";
  export default {
    name: "toRef",
    setup() {
      // 监视的数据
      let person = reactive({
        name: 'Shier',
        age: 19,
        job: {
          job1: {
            jobs11: '全栈',
            salary: 88
          }
        }
      })
      // 全部只读的
      person = readonly(person)
      // 浅层的是只读，深层的为是可修改的
      person = shallowReadonly(person)

      return {
        person,
        // toRefs写法
        ...toRefs(person)
      }
    }
  }
</script>
```

## toRaw 与 markRaw

>**toRaw**：
**作用**：将一个由reactive生成的响应式对象转为普通对象。
**使用场景**：用于读取响应式对象对应的普通对象，对这个普通对象的所有操作，不会引起页面更新。
**markRaw**：
**作用**：标记一个对象，使其永远不会再成为响应式对象。
**应用场景**:
- 有些值不应被设置为响应式的，例如复杂的第三方类库等。
- 当渲染具有不可变数据源的大列表时，跳过响应式转换可以提高性能。

## customRef

**作用**：创建一个自定义的 ref，并对其依赖项跟踪和更新触发进行显式控制。有两个参数：
- **trigger()**：用来触发修改的内容，然后去更新模板
- **track()**：追踪
必须具有返回值

实现防抖效果：
```javascript
<template>
	<input type="text" v-model="keyword">
	<h3>{{keyword}}</h3>
</template>

<script>
	import {ref,customRef} from 'vue'
	export default {
		name:'Demo',
		setup(){
			// let keyword = ref('hello') //使用Vue准备好的内置ref
			//自定义一个myRef
			function myRef(value,delay){
				let timer
				//通过customRef去实现自定义
				return customRef((track,trigger)=>{
					return{
						get(){
							track() //告诉Vue这个value值是需要被“追踪”的
							return value
						},
						set(newValue){
							clearTimeout(timer)
							timer = setTimeout(()=>{
								value = newValue
								trigger() //告诉Vue去更新界面
							},delay)
						}
					}
				})
			}
			let keyword = myRef('hello',500) //使用程序员自定义的ref
			return {
				keyword
			}
		}
	}
</script>
```

## provide 与 inject

**作用**：实现祖与后代组件间通信
**套路**：父组件有一个 provide 选项来提供数据，后代组件有一个 inject 选项来开始使用这些数据
**具体写法**：
祖组件中：
```javascript
setup(){
	......
    let car = reactive({name:'奔驰',price:'40万'})
    provide('car',car)
    ......
}
```
后代组件中：
```javascript
setup(props,context){
	......
    const car = inject('car')
    return {car}
	......
}
```

具体的实现案例
APP.vue 作为祖组件

```javascript
<!--Vue3的自定义hook-->
<template>
  <div class="app">
    <h2> APP祖组件 爷爷：{{ name }}---年龄：{{ age }}</h2>
    <Child/>
  </div>
</template>
<script>
  // 引入组件
  import {reactive, provide} from "vue";
  import Child from "./components/Child";

  export default {
    name: 'App',
    components: {Child},
    setup() {
      let grandfather = reactive({name: '张三', age: 88})
      // 将数据提供出去
      provide('grandfather',grandfather)
      return {...grandfather}
    }
  }
</script>

<style scoped>
  .app {
    background-color: gray;
    padding: 10px;
  }
</style>
```

Child.vue 子组件
不在子组件中注入祖组件中的属性
```javascript
<template>
  <div class="child">
    <h2> Child组件 儿子</h2>
    <Son/>
  </div>
</template>

<script>
  import {inject} from 'vue'
  import Son from './Son'

  export default {
    name: "Child",
    components:{Son},
  }
</script>

<style scoped>
  .child {
    background-color: orange;
    padding: 10px;
  }
</style>
```

Son.vue 孙组件
```javascript
<template>
  <div class="son">
    <h2> Son组件 我的爷爷名字：{{grandfather.name}}---爷爷年龄：{{grandfather.price}}</h2>
  </div>
</template>

<script>
  // 导入inject
  import {inject} from "vue";

  export default {
    name: "Son",
    setup(){
      // 将信息注入
      let grandfather = inject('grandfather')
      return{grandfather}
    }
  }
</script>

<style scoped>
  .son {
    background-color: green;
  }
</style>
```


## 响应式数据的判断API

>**isRef**: 检查一个值是否为一个 ref 对象
**isReactive**: 检查一个对象是否是由 reactive 创建的响应式代理
**isReadonly**: 检查一个对象是否是由 readonly 创建的只读代理
**isProxy**: 检查一个对象是否是由 reactive 或者 readonly 方法创建的代理

```javascript
<!--Vue3的API-->
<template>
  <h2> APP</h2>
</template>
<script>
  // 引入组件
  import {reactive, provide, ref, readonly, isProxy, isReadonly, isRef, isReactive} from "vue";

  export default {
    name: 'App',
    setup() {
      let demo = reactive({name: '张三', age: 88})
      let sum = ref(0)
      // 将数据提供出去
      let demoRef = isRef(demo)
      let demoReactive = isReactive(demo)
      let sumReactive = isReactive(sum)
      let sumReadOnly = isReadonly(demo)
      let demoProxy = isProxy(demo)

      console.log('demoReactive---', demoReactive)  // true
      console.log('demoRef---', demoRef) // false  由reactive创建
      console.log('sumReactive---', sumReactive) // false 由reactive创建
      console.log('sumReadOnly---', sumReadOnly) // false 可修改的
      console.log('demoProxy---', demoProxy) // true 由reactive创建 都是使用代理的
      return {...demo}
    }
  }
</script>
```

# Composition API 的优势

## Options API(配置项API) 存在的问题（Vue2）
使用传统OptionsAPI中，新增或者修改一个需求，就需要分别在data，methods，computed里修改 。

![](http://GitHubxxx17.github.io/img/vue/9.image)
![](http://GitHubxxx17.github.io/img/vue/10.image)

## Composition API(组合API) 的优势（Vue3）

我们可以更加优雅的组织我们的代码，函数。让相关功能的代码更加有序的组织在一起。

# 新的组件

## Fragment

>在Vue2中组件的结构必须有一个根标签
在Vue3中: 组件可以没有根标签, 内部会将多个标签包含在一个Fragment虚拟元素中
好处: 减少标签层级, 减小内存占用

## Teleport(标签)
什么是Teleport？—— Teleport 是一种能够将我们的组件html结构移动到指定位置的技术。

```javascript
<template>
  <div>
    <button @click="isShowDialog=true">打开弹窗</button>
    <!-- 指定在哪个标签下面添加 -->
    <teleport to="body">
      <!--点击了按钮之后顺便携带弹窗属性-->
      <div v-if="isShowDialog" class="mask">
        <div class="dialog">
          <h2>弹窗</h2>
          <h3>文本内容</h3>
          <button @click="isShowDialog=false">关闭弹窗</button>
        </div>
      </div>
    </teleport>
  </div>
</template>

<script>
  import {ref} from "vue";

  export default {
    name: "Dialog",
    setup() {
      let isShowDialog = ref(false)
      return {isShowDialog}
    }
  }
</script>

<style scoped>
  .mask {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgb(0, 0, 0, 0.5);
  }

  .dialog {
    position: absolute;
    text-align: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 400px;
    height: 400px;
    background-color: #00a4ff;
  }
</style>
```

## Suspense（标签）
等待异步组件时渲染一些额外内容，让应用有更好的用户体验

**使用步骤**：
异步引入组件
```javascript
// import Child from 'vue'// 静态引入

import {defineAsyncComponent} from 'vue'
const Child = defineAsyncComponent(()=>import('./components/Child.vue'))
```
使用`Suspense`包裹组件，并配置好`default`与 `fallback`
```javascript
<template>
	<div class="app">
		<h3>我是App组件</h3>
		<Suspense>
			<template v-slot:default>
				<Child/>
			</template>
			<template v-slot:fallback>
				<h3>加载中.....</h3>
			</template>
		</Suspense>
	</div>
</template>
```

具体实现案例

`Child.vue`
```javascript
<template>
  <div class="child">
    <h2> Child儿子组件 </h2>
    {{sum}}
  </div>
</template>

<script>
  import {ref} from "vue";
  export default {
    name: "Child",
    // 异步
    async setup(){
      let sum = ref(0)
      let p = new Promise((resolve, reject)=>{
        setTimeout(()=>{
          resolve({sum})
        },2000)
      })
      return await p
    }
  }
</script>

<style scoped>
  .child {
    background-color: orange;
    padding: 10px;
  }
</style>
```
`APP.vue`
```javascript
<!--Vue3的自定义hook-->
<template>
  <div class="app">
    <h3>我是App组件</h3>
    <Suspense>
      <template v-slot:default>
        <Child/>
      </template>
      <template v-slot:fallback>
        <h3>加载中.....</h3>
      </template>
    </Suspense>
  </div>
</template>
<script>
  // 引入组件
  //import Child from "./components/Child"; // 静态引入
  // 异步引入
  import {defineAsyncComponent} from 'vue'
  const Child = defineAsyncComponent(()=>import('./components/Child'))
  export default {
    name: 'App',
    components: {Child},
  }
</script>

<style scoped>
  .app {
    background-color: gray;
    padding: 10px;
  }
</style>

```


# 其他

## 全局API的转移

Vue 2.x 有许多全局 API 和配置。

例如：**注册全局组件**、**注册全局指令**等。

```javascript
//注册全局组件
Vue.component('MyButton', {
  data: () => ({
    count: 0
  }),
  template: '<button @click="count++">Clicked {{ count }} times.</button>'
})

//注册全局指令
Vue.directive('focus', {
  inserted: el => el.focus()
}
```

Vue3.0中对这些API做出了调整：

将全局的API，即：`Vue.xxx`调整到应用实例（`app`）上

 | 2.x 全局 API（Vue） | 3.x 实例 API (app) |
 | :---: | :--: |
 | Vue.config.xxxx    |   app.config.xxxx  |
 | Vue.config.productionTip     | Vue3中移除  |
 | Vue.component   |  app.component  |
 | Vue.directive   |  app.directive  |
 | Vue.mixin   |  app.mixin  |
 | Vue.use  |  app.use  |
 | Vue.prototype  |  app.config.globalProperties  |


## 其他改变

1. data选项应始终被声明为一个函数。

2. 过度类名的更改：
`Vue2.x`写法
```css
.v-enter,
.v-leave-to {
  opacity: 0;
}
.v-leave,
.v-enter-to {
  opacity: 1;
}
```
`Vue3.x`写法
```css
.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.v-leave-from,
.v-enter-to {
  opacity: 1;
}
```

3. 移除`keyCode`作为 `v-on` 的修饰符，同时也不再支持`config.keyCodes`

4. 移除`v-on.native`修饰符
父组件中绑定事件:
```html
<my-component
  v-on:close="handleComponentEvent"
  v-on:click="handleNativeClickEvent"
/>
```
子组件中声明自定义事件:
```javascript
<script>
  export default {
    emits: ['close']
  }
</script>
```

5. 移除过滤器（filter）
过滤器虽然这看起来很方便，但它需要一个自定义语法，打破大括号内表达式是 “只是 JavaScript” 的假设，这不仅有学习成本，而且有实现成本！建议用方法调用或计算属性去替换过滤器。