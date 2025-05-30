---
title: vue笔记（三）
categories: "笔记"
tags:
  - 笔记
  - vue
cover: /cover/h.jpg
---


# vuex
**概念**
在Vue中实现集中式状态（数据）管理的一个Vue插件，对vue应用中多个组件的共享状态进行集中式的管理（读/写），也是一种组件间通信的方式，且适用于任意组件间通信。
**何时使用？**
​多个组件需要共享数据时

## 搭建vuex环境
1. **创建文件**：`src/store/index.js`
```javascript
//引入Vue核心库
import Vue from 'vue'
//引入Vuex
import Vuex from 'vuex'
//应用Vuex插件
Vue.use(Vuex)

//准备actions对象——响应组件中用户的动作
const actions = {}
//准备mutations对象——修改state中的数据
const mutations = {}
//准备state对象——保存具体的数据
const state = {}

//创建并暴露store
export default new Vuex.Store({
	actions,
	mutations,
	state
})
```
2. 在`main.js`中创建vm时传入`store`配置项
```javascript
......
//引入store
import store from './store'
......

//创建vm
new Vue({
	el:'#app',
	render: h => h(App),
	store
})
```
## 基本使用
1. 初始化数据、配置`actions`、配置`mutations`，操作文件`store.js`
```javascript
//引入Vue核心库
import Vue from 'vue'
//引入Vuex
import Vuex from 'vuex'
//引用Vuex
Vue.use(Vuex)

const actions = {
    //响应组件中加的动作
	jia(context,value){
		// console.log('actions中的jia被调用了',miniStore,value)
		context.commit('JIA',value)
	},
}

const mutations = {
    //执行加
	JIA(state,value){
		// console.log('mutations中的JIA被调用了',state,value)
		state.sum += value
	}
}

//初始化数据
const state = {
   sum:0
}

//创建并暴露store
export default new Vuex.Store({
	actions,
	mutations,
	state,
})
```
2. 组件中读取vuex中的数据：`$store.state.sum`
3.  组件中修改vuex中的数据：`$store.dispatch('action中的方法名',数据)`或 `$store.commit('mutations中的方法名',数据)`
>**备注**：若没有网络请求或其他业务逻辑，组件中也可以越过`actions`，即不写`dispatch`，直接编写`commit`

## getters的使用
1. **概念**：当`state`中的数据需要经过加工后再使用时，可以使用`getters`加工。
2. 在`store.js`中追加`getters`配置
```javascript
......

const getters = {
	bigSum(state){
		return state.sum * 10
	}
}

//创建并暴露store
export default new Vuex.Store({
	......
	getters
})
```
3. 组件中读取数据：`$store.getters.bigSum`


## 四个map方法的使用

1. **mapState方法**：用于帮助我们映射`state`中的数据为计算属性
```javascript
computed: {
    //借助mapState生成计算属性：sum、school、subject（对象写法）
     ...mapState({sum:'sum',school:'school',subject:'subject'}),
         
    //借助mapState生成计算属性：sum、school、subject（数组写法）
    ...mapState(['sum','school','subject']),
},
```
1. **mapGetters方法**：用于帮助我们映射`getters`中的数据为计算属性
```javascript
computed: {
    //借助mapGetters生成计算属性：bigSum（对象写法）
    ...mapGetters({bigSum:'bigSum'}),

    //借助mapGetters生成计算属性：bigSum（数组写法）
    ...mapGetters(['bigSum'])
},
```
1. **mapActions方法**：用于帮助我们生成与`actions`对话的方法，即：包含`$store.dispatch(xxx)`的函数
```javascript
methods:{
    //靠mapActions生成：incrementOdd、incrementWait（对象形式）
    ...mapActions({incrementOdd:'jiaOdd',incrementWait:'jiaWait'})

    //靠mapActions生成：incrementOdd、incrementWait（数组形式）
    ...mapActions(['jiaOdd','jiaWait'])
}
```
1. **mapMutations方法**：用于帮助我们生成与`mutations`对话的方法，即：包含`$store.commit(xxx)`的函数
```javascript
methods:{
    //靠mapActions生成：increment、decrement（对象形式）
    ...mapMutations({increment:'JIA',decrement:'JIAN'}),
    
    //靠mapMutations生成：JIA、JIAN（对象形式）
    ...mapMutations(['JIA','JIAN']),
}
```
>**备注**：mapActions与mapMutations使用时，若需要传递参数需要：在模板中绑定事件时传递好参数，否则参数是事件对象。


## 模块化+命名空间

1. **目的**：让代码更好维护，让多种数据分类更加明确。
2. 修改`store.js`
```javascript
const countAbout = {
  namespaced:true,//开启命名空间
  state:{x:1},
  mutations: { ... },
  actions: { ... },
  getters: {
    bigSum(state){
       return state.sum * 10
    }
  }
}

const personAbout = {
  namespaced:true,//开启命名空间
  state:{ ... },
  mutations: { ... },
  actions: { ... }
}

const store = new Vuex.Store({
  modules: {
    countAbout,
    personAbout
  }
})
```
3. 开启命名空间后，组件中读取state数据：
```javascript
//方式一：自己直接读取
this.$store.state.personAbout.list
//方式二：借助mapState读取：
...mapState('countAbout',['sum','school','subject']),
```
4. 开启命名空间后，组件中读取getters数据：
```javascript
//方式一：自己直接读取
this.$store.getters['personAbout/firstPersonName']
//方式二：借助mapGetters读取：
...mapGetters('countAbout',['bigSum'])
```
5. 开启命名空间后，组件中调用dispatch
```javascript
//方式一：自己直接dispatch
this.$store.dispatch('personAbout/addPersonWang',person)
//方式二：借助mapActions：
...mapActions('countAbout',{incrementOdd:'jiaOdd',incrementWait:'jiaWait'})
```
6. 开启命名空间后，组件中调用commit
```javascript
//方式一：自己直接commit
this.$store.commit('personAbout/ADD_PERSON',person)
//方式二：借助mapMutations：
...mapMutations('countAbout',{increment:'JIA',decrement:'JIAN'}),
```

# 路由
1. **理解**： 一个路由（route）就是一组映射关系（`key - value`），多个路由需要路由器（router）进行管理。
2. **前端路由**：key是路径，value是组件。


## 基本使用
1. 安装`vue-router`，命令：`npm i vue-router`
2. 应用插件：`Vue.use(VueRouter)`
3. 编写router配置项:
```javascript
//引入VueRouter
import VueRouter from 'vue-router'
//引入Luyou 组件
import About from '../components/About'
import Home from '../components/Home'

//创建router实例对象，去管理一组一组的路由规则
const router = new VueRouter({
	routes:[
		{
			path:'/about',
			component:About
		},
		{
			path:'/home',
			component:Home
		}
	]
})

//暴露router
export default router
```
4. 实现切换（`active-class`可配置高亮样式）
```javascript
<router-link active-class="active" to="/about">About</router-link>
```
5. 指定展示位置
```javascript
<router-view></router-view>
```

## 几个注意点
>1. 路由组件通常存放在`pages`文件夹，一般组件通常存放在`components`文件夹。
2. 通过切换，“隐藏”了的路由组件，默认是被销毁掉的，需要的时候再去挂载。
3. 每个组件都有自己的`$route`属性，里面存储着自己的路由信息。
4. 整个应用只有一个router，可以通过组件的`$router`属性获取到。

## 多级路由（多级路由）
1. 配置路由规则，使用children配置项：
```javascript
routes:[
	{
		path:'/about',
		component:About,
	},
	{
		path:'/home',
		component:Home,
		children:[ //通过children配置子级路由
			{
				path:'news', //此处一定不要写：/news
				component:News
			},
			{
				path:'message',//此处一定不要写：/message
				component:Message
			}
		]
	}
]
```
2. 跳转（要写完整路径）：
```html
<router-link to="/home/news">News</router-link>
```

## 路由的query参数
1. 传递参数
```html
<!-- 跳转并携带query参数，to的字符串写法 -->
<router-link :to="/home/message/detail?id=666&title=你好">跳转</router-link>
				
<!-- 跳转并携带query参数，to的对象写法 -->
<router-link 
	:to="{
		path:'/home/message/detail',
		query:{
		   id:666,
            title:'你好'
		}
	}"
>跳转</router-link>
```
2. 接收参数：
```javascript
$route.query.id
$route.query.title
```

## 命名路由
1. **作用**：可以简化路由的跳转。
2. 如何使用
  给路由命名：
```javascript 
{
	path:'/demo',
	component:Demo,
	children:[
		{
			path:'test',
			component:Test,
			children:[
				{
                      name:'hello' //给路由命名
					path:'welcome',
					component:Hello,
				}
			]
		}
	]
}
```
简化跳转：
```html
<!--简化前，需要写完整的路径 -->
<router-link to="/demo/test/welcome">跳转</router-link>

<!--简化后，直接通过名字跳转 -->
<router-link :to="{name:'hello'}">跳转</router-link>

<!--简化写法配合传递参数 -->
<router-link 
	:to="{
		name:'hello',
		query:{
		   id:666,
            title:'你好'
		}
	}"
>跳转</router-link>
```

## 路由的params参数
1. 配置路由，声明接收params参数
```javascript
{
	path:'/home',
	component:Home,
	children:[
		{
			path:'news',
			component:News
		},
		{
			component:Message,
			children:[
				{
					name:'xiangqing',
					path:'detail/:id/:title', //使用占位符声明接收params参数
					component:Detail
				}
			]
		}
	]
}
```

2. 传递参数
```html
<!-- 跳转并携带params参数，to的字符串写法 -->
<router-link :to="/home/message/detail/666/你好">跳转</router-link>
				
<!-- 跳转并携带params参数，to的对象写法 -->
<router-link 
	:to="{
		name:'xiangqing',
		params:{
		   id:666,
            title:'你好'
		}
	}"
>跳转</router-link>
```
>**特别注意**：路由携带params参数时，若使用to的对象写法，则不能使用path配置项，必须使用name配置！

3. 接收参数：
```javascript
$route.params.id
$route.params.title
```

## 路由的props配置
**​作用**：让路由组件更方便的收到参数
```javascript
{
	name:'xiangqing',
	path:'detail/:id',
	component:Detail,

	//第一种写法：props值为对象，该对象中所有的key-value的组合最终都会通过props传给Detail组件
	// props:{a:900}

	//第二种写法：props值为布尔值，布尔值为true，则把路由收到的所有params参数通过props传给Detail组件
	// props:true
	
	//第三种写法：props值为函数，该函数返回的对象中每一组key-value都会通过props传给Detail组件
	props(route){
		return {
			id:route.query.id,
			title:route.query.title
		}
	}
}
```

## <router-link>的replace属性
>**作用**：控制路由跳转时操作浏览器历史记录的模式
**浏览器的历史记录有两种写入方式**：分别为push和replace，push是追加历史记录，replace是替换当前记录。路由跳转时候默认为push
**如何开启replace模式**：`<router-link replace .......>News</router-link>`


## 编程式路由导航
1. **作用**：不借助`<router-link>`实现路由跳转，让路由跳转更加灵活
2. 具体编码：
```javascript
//$router的两个API
this.$router.push({
	name:'xiangqing',
		params:{
			id:xxx,
			title:xxx
		}
})

this.$router.replace({
	name:'xiangqing',
		params:{
			id:xxx,
			title:xxx
		}
})
this.$router.forward() //前进
this.$router.back() //后退
this.$router.go() //可前进也可后退
```

## 缓存路由组件
1. **作用**：让不展示的路由组件保持挂载，不被销毁。
2. **具体编码**：
```html
<keep-alive include="News"> 
    <router-view></router-view>
</keep-alive>
```

## 两个新的生命周期钩子
>1. **作用**：路由组件所独有的两个钩子，用于捕获路由组件的激活状态。
2. **具体名字**：
- `activated`路由组件被激活时触发。
- `deactivated`路由组件失活时触发。

## 路由守卫
1. **作用**：对路由进行权限控制
2. **分类**：全局守卫、独享守卫、组件内守卫
3. 全局守卫:
```javascript
//全局前置守卫：初始化时执行、每次路由切换前执行
router.beforeEach((to,from,next)=>{
	console.log('beforeEach',to,from)
	if(to.meta.isAuth){ //判断当前路由是否需要进行权限控制
		if(localStorage.getItem('school') === 'atguigu'){ //权限控制的具体规则
			next() //放行
		}else{
			alert('暂无权限查看')
			// next({name:'guanyu'})
		}
	}else{
		next() //放行
	}
})

//全局后置守卫：初始化时执行、每次路由切换后执行
router.afterEach((to,from)=>{
	console.log('afterEach',to,from)
	if(to.meta.title){ 
		document.title = to.meta.title //修改网页的title
	}else{
		document.title = 'vue_test'
	}
})
```

独享守卫:
```javascript
beforeEnter(to,from,next){
	console.log('beforeEnter',to,from)
	if(to.meta.isAuth){ //判断当前路由是否需要进行权限控制
		if(localStorage.getItem('school') === 'atguigu'){
			next()
		}else{
			alert('暂无权限查看')
			// next({name:'guanyu'})
		}
	}else{
		next()
	}
}
```

组件内守卫：
```javascript
//进入守卫：通过路由规则，进入该组件时被调用
beforeRouteEnter (to, from, next) {
},
//离开守卫：通过路由规则，离开该组件时被调用
beforeRouteLeave (to, from, next) {
}
```

## 路由器的两种工作模式
>1. 对于一个url来说，什么是hash值？—— #及其后面的内容就是hash值。
2. hash值不会包含在 HTTP 请求中，即：hash值不会带给服务器。
**hash模式**：
- 地址中永远带着#号，不美观 。
- 若以后将地址通过第三方手机app分享，若app校验严格，则地址会被标记为不合法。
- 兼容性较好。
**history模式**：
- 地址干净，美观 。
- 兼容性和hash模式相比略差。
- 应用部署上线时需要后端人员支持，解决刷新页面服务端404的问题。
  
**配置路由**
```javascript
const router = new VueRouter({
	routes:[
		{
			path:'/about',
			component:About
		},
		{
			path:'/home',
			component:Home
		}
	]
})
```



