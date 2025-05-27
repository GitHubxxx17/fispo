---
title: node.js
categories: "笔记"
tags:
  - 笔记
cover: /cover/e.jpg
---

# 初识node.js与内置模块

## 回顾与思考

1. 为什么JavaScript可以再浏览器中被执行？
    待执行的JS代码
    JS解析引擎
    不同的浏览器使用不同的JS解析引擎
2. 为什么JS可以操作DOM还有BOM?
    每个浏览器中内置了DOM，BOM这样的API函数，因此浏览器中的javaScript才可以调用它们
3. 浏览器中JS的运行环境
    运行环境是指代码正常运行所需要的必要环境
Chrome浏览器运行环境：
    V8引擎,"v8引擎负责解析和执行js代码"和
    内置API函数,"内置API是由运行环境提供的特殊接口，只能在所属的运行环境中被调用",

## Node.js简介

1. 什么是Node.js?
    Node.js是一个基于Chrome V8引擎的JS运行环境
2. Node.js中的JS运行环境
    V8引擎和内置API函数

浏览器是JS的前端运行环境
Node.js是Js的后端运行环境
Node.js中无法调用DOM和BOM等浏览器内置API


3. Node.js可以做什么？
![](http://GitHubxxx17.github.io/img/node.js/1.jpg)

## 终端中的快捷键
![](http://GitHubxxx17.github.io/img/node.js/2.jpg)

# fs文件系统模块

## 什么是文件系统模块
fs模块是Node.js官方提供的、用来操作文件的模块，它提供了一系列的方法和属性，用来满足用户对文件的操作需求

## 读取指定文件中的内容

```
fs.readFile(path[,options],callback)
```

1. 参数1：必选参数，字符串，表示文件的路径
2. 参数2：可选参数，表示以什么编码格式来读取文件
3. 参数3：必选参数，文件读取完成后，通过回调函数拿到读取的结果。

```js
// 1.导入fs模块,来操作文件
const fs = require('fs')
// 2.调用fs.readFile()方法读取文件
fs.readFile('./file/1.txt', 'utf8', function (err, dataStr) {
    // 打印失败的结果，如果读取成功，则err的值为null
    // 如果读取失败，则err的值为错误对象，dataStr的值为undefined
    console.log(err)
    // 打印成功的结果
    console.log(dataStr)

})
```

### 判断文件是否读取成功

```js
// 1.导入fs模块,来操作文件
const fs = require('fs')
// 2.调用fs.readFile()方法读取文件
fs.readFile('./file/1.txt', 'utf8', function (err, dataStr) {
    // 打印失败的结果，如果读取成功，则err的值为null
    // 如果读取失败，则err的值为错误对象，dataStr的值为undefined
    if (err) {
        return console.log('读取文件失败' + err.message)
    }
    console.log('读取文件成功' + dataStr)

})
```

## 向指定的文件中写入内容

```
fs.writeFile(file, data[, options], callback)
```

1. 参数1：必选参数，字符串，表示文件的存放路径
2. 参数2：必选参数，表示要写入的内容
3. 参数3：可选参数，表示以什么编码格式来读取文件，默认值是utf8
4. 参数4：必选参数，文件写入完成后的回调函数。

### 判断文件是否读取成功
```js
// 1.导入fs模块,来操作文件
const fs = require('fs')
// 2.调用fs.readFile()方法读取文件
fs.writeFile('./file/1.txt', 'utf8', function (err, dataStr) {
    // 打印失败的结果，如果读取成功，则err的值为null
    // 如果读取失败，则err的值为错误对象，dataStr的值为undefined
    if (err) {
        return console.log('读取文件失败' + err.message)
    }
    console.log('读取文件成功' + dataStr)

})
```

## 案例：考试成绩整理
![](http://GitHubxxx17.github.io/img/node.js/3.jpg)

```js
// 导入fs模块
const fs = require('fs')
// 2.调用fs.readFile()方法读取文件
fs.readFile('./file/2.txt', 'utf8', function (err, dataStr) {
    // 打印失败的结果，如果读取成功，则err的值为null
    // 如果读取失败，则err的值为错误对象，dataStr的值为undefined
    // 3.判断文件是否读取成功
    if (err) {
        return console.log('读取文件失败' + err.message)
    }
    console.log('读取文件成功' + dataStr)


    // 4.1先把成绩的数据，按照空格进行分割
    const arrOld = dataStr.split(' ')
    // 4.2循环分割后的数组，对每一项的数据，进行字符串的替换操作
    const arrNew = []
    arrOld.forEach(item => {
        arrNew.push(item.replace('=', ':'))
    })
    console.log(arrNew)
    // 4.3把新数组中的每一项，进行合并，得到新的字符串
    const newStr = arrNew.join('\n\r')
    console.log(newStr)
    // 5.调用fs.writeFile()方法，把处理完毕的成绩，写入到新文件中
    fs.writeFile('./file/成绩ok.txt', newStr, function (err) {
        if (err) {
            return console.log('写入文件失败！' + err.message)
        }
        console.log('写入文件成功！')
    })
})

```


# path路径模块
```js
const path=require('path')
```

## 路径问题
![](http://GitHubxxx17.github.io/img/node.js/4.jpg)

## path.join()语法格式
使用path.join方法，可以把多个路径片段拼接为较为完整的路径字符串
```js
path.join([...paths])
path.join(__dirname,[...paths])
```

## path.basename()
使用该方法可以获取路径中的最后一部分，经常通过这个方法获取路径中的文件名，语法格式如下
```js
path.basename(path[,ext])
```
参数：path:必选参数，表示一个路径的字符串
    ext可选参数，表示文件拓展名
返回：表示路径中的最后一部分
## path.extname()
使用该方法可以获取路径中的拓展名部分，语法格式如下
```js
path.extname(path)
```


## 案例：模块化html
```js
const fs = require('fs');

const path = require('path');

const regStyle = /<style>[\s\S]*<\/style>/
const regScript = /<script>[\s\S]*<\/script>/

fs.readFile(path.join(__dirname,'./login.html'),'utf8',(err,dataStr) => {
    if(err){
        return console.log('读取文件失败'+err.message);
    }
    resolveCSS(dataStr);
    resolveScript(dataStr);
    resolveHTML(dataStr)
})

// 处理css样式
function resolveCSS(htmlStr){
    //使用正则表达式提取<style>
    const r1 = regStyle.exec(htmlStr);
    //将提取出来的字符串进行字符串的replace替换操作
    const newcss = r1[0].replace('<style>','').replace('</style>','');
    //将提取的样式写入login.css中
    fs.writeFile(path.join(__dirname,'./login/login.css'),newcss,(err) => {
        if(err){
            return console.log('css文件写入失败'+err.message);
        }
        console.log('css文件写入成功');
    })
}

// 处理script样式
function resolveScript(htmlStr){
    //使用正则表达式提取<script>
    const r1 = regScript.exec(htmlStr);
    //将提取出来的字符串进行字符串的replace替换操作
    const newscript = r1[0].replace('<script>','').replace('</script>','');
    //将提取的样式写入login.js中
    fs.writeFile(path.join(__dirname,'./login/login.js'),newscript,(err) => {
        if(err){
            return console.log('js文件写入失败'+err.message);
        }
        console.log('js文件写入成功');
    })
}


// 处理html样式
function resolveHTML(htmlStr){
    //将提取出来的字符串进行字符串的replace替换操作
    const newhtml = htmlStr.replace(regStyle,'<link rel="stylesheet" href="./login.css">').replace(regScript,'<script src="./login.js"></script>');
    //将提取的样式写入login.html中
    fs.writeFile(path.join(__dirname,'./login/login.html'),newhtml,(err) => {
        if(err){
            return console.log('html文件写入失败'+err.message);
        }
        console.log('html文件写入成功');
    })
}
```

# http模块

## 基础概念
什么是客户端，什么是服务器？
在网络节点中，负责消费资源的电脑，叫做客户端。
负责对外提供网络资源的电脑，叫做服务器。
Http模块是Node.js官方提供的，用来创建web服务器的模块。通过http模块提供的Http.createServer()方法，就能方便的把一台普通电脑，变成一台web服务器，从而对外提供Web资源服务。
```js
const http=require('http')
```

![](http://GitHubxxx17.github.io/img/node.js/5.jpg)
![](http://GitHubxxx17.github.io/img/node.js/6.jpg)
![](http://GitHubxxx17.github.io/img/node.js/7.jpg)
![](http://GitHubxxx17.github.io/img/node.js/8.jpg)


## 创建最基本的web服务器

```js
const http = require('http');
const server = http.createServer();

server.on('request',(req,res) => {
    //获取请求的url地址
    const url = req.url;
    //设置默认的响应内容为404 Not found
    let content = '<h1>404 Not found</h1>';
    //判断用户请求的是否为/或/index.html首页
    //判断用户请求去的是否为/about.html关于页面
    if(url === '/' || url === '/index.html'){
        content = '<h1>首页</h1>'
    }else if(url === 'about.html'){
        content = '<h1>关于页面</h1>'
    }
    // 设置Content-Type响应头，解决中文乱码问题
    res.setHeader('Content-Type','text/html;charset=utf-8')
    // 将内容相应给客户端
    res.end(content);
})

server.listen(80,() => {
    console.log('server run at http://192.168.43.169');
})
```

# 模块化

## 模块化的基本概念
什么是模块化？
模块化是指解决一个复杂问题时，自顶向下逐层把系统划分为若干模块的过程。对于整个系统来说，模块是可组合、分解和变换的单元
编程领域中的模块化：就是遵守固定的规则，把一个大文件拆成独立并且互相依赖的多个小模块。
模块化规范
就是对代码进行模块化的拆分与组合时，需要遵守的规则
使用什么样的语法格式来引用模块
在模块中使用什么样的语法格式向外暴露成员

## Node.js中的模块化
根据模块来源的不同，将模块分为了三大类，分别是：
1. 内置模块（fs，path，http）
2. 自定义模块（用户创建的每个Js文件）
3. 第三方模块（由第三方开发出来的模块）

什么是模块作用域？
和函数作用域类似，在自定义模块中定义的变量、方法等成员，只能在当前模块内被访问，这种模块级别的访问限制，叫做模块作用域
防止了全局变量污染的问题
向外共享模块作用域中的成员
module对象
在每个js自定义模块中都有一个module对象，它里面存储了和当前模块有关的信息
module.export对象
可以使用该对象将模块内的成员共享出去，供外界使用。外界用require方法导入自定义模块时，得到的就是Module.exports所指的对象
exports对象
由于module.exports单词写起来比较复杂，为了简化向外共享成员的代码，Node提供了exports对象。默认情况下，exports和module.exports指向同一个对象，最终共享的结果，还是以module.exports指向的结果为准
exports和module.exports的使用误区


## 模块化规范
![](http://GitHubxxx17.github.io/img/node.js/9.jpg)

## npm与包

### 包的基本概念

Node.js中的第三方模块又叫做包
从哪里搜索包：全球最大的包共享平台
从哪里下载包：下载包的服务器
如何下载包？npm包管理工具

### 包的命令
```
//安装包
npm i 包的完整名称

//安装指定版本的包
npm i 包的完整名称@2.22.2

//npm包管理工具提供了一个快捷命令，可以在执行命令时所处的目录中，快速创建package.json这个包管理配置文件
npm init -y

//执行npm install 命令时，npm 包管理工具会先读取package.json中的dependencies节点
//读取到记录的所有依赖包名称和版本号之后，包管理工具会把这些包一次性的下载到项目中去
npm install 

//卸载包
npm uninstall 包的完整名称

//解决下包速度慢的问题
//淘宝NPM镜像服务器
//镜像：是一种文件存储形式每一个磁盘上的数据在另一个磁盘上存在完全相同的副本即为镜像
//切换npm的下包镜像源。下包的镜像源，指的就是下包的服务器地址
npm config get registry
npm config set registry=https://registry.npm.taobao.org/

//包的分类
npm i 包名-D //开发依赖包（会被记录到devDependencies节点下）
npm i 包名//核心依赖包（会被记录到）

//全局包
npm i包名-g //全局安装指定的包
npm uninstall 包名-g//卸载全局安装的包

//i5ting_toc是一个可以把md文档转为Html页面的小工具
//将i5ting_toc安装为全局包
npm install -g i5ting_toc
//调用,轻松实现md转换为html的功能
i5ting_toc -f 要转换的md文件路径 -o


```

1. 初次装包完成后，在项目文件夹下多一个叫做node_modules的文件夹和package-lock.json的配置文件，其中node_modules文件夹用来存放所有已安装到项目中的包。require（）导入第三方包时，就是从这个目录中查找并加载包
package-lock.json配置文件用来记录node_modules目录下的每一个包的下载信息，例如包的版本号，下载地址等
2. 安装指定版本的包：
默认情况下，会自定安装最新版本的包，如果需要安装指定版本的包，可以在包名之后，通过@符号指定具体的版本
3. 包的语义化版本规范
包的版本号是以“点分十进制”形式进行定义的，总共有三位数字，例如2.24.0
其中每一位数字所代表的含义如下：第一位:大版本
第二位：功能版本 第三位：bug修复版本
只要前面的版本号增长了，则后面的版本号归零


### 规范的包结构
![](http://GitHubxxx17.github.io/img/node.js/10.jpg)

## 模块的加载机制
优先从缓存中加载
模块在第一次被加载后会被缓存。这也意味着多次调用require()不会导致模块的代码被多次执行。注意：不论是内置模块，自定义模块，还是第三方模块，它们都会优先从缓存中加载，从而提高模块的加载效率。

tabs 加载机制
<!-- tab 内置模块的加载机制 -->
内置模块加载优先级最高。
<!-- endtab -->
<!-- tab 自定义模块的加载机制-->
使用require（）加载自定义模块时，必须指定以./或…/开头的路径标识符。在加载自定义模块时，如果没有指定的话，则node模块就会把他当成内置模块或者第三方模块进行加载
同时，在使用require（）导入自定义模块时，如果省略了文件的拓展名，则node.js就会按顺序分别尝试加载以下的文件
1. 按照确切的文件名进行加载
2. 补全.js拓展名进行加载
3. 补全.json拓展名进行加载
4. 补全.node拓展名进行加载
5. 加载失败，终端报错
<!-- endtab -->
<!-- tab 第三方模块的加载机制-->
如果传递给require()的模块标识符不是一个内置模块，也没有./等等开题，则Node.js会从当前模块的父目录开始，尝试从.node_modules文件夹中加载第三方模块。如果没有找到第三方模块，则移动到再上一层父目录中，进行加载，直到文件系统的根目录
<!-- endtab -->


### 目录作为模块
![](http://GitHubxxx17.github.io/img/node.js/11.jpg)

# express
## express简介
Express是基于Node.js平台，快速，开放，极简的Web开发框架
使用Express,我们可以方便、快速地创建web网站的服务器和api接口的服务器
## express的使用
```js
//1.导入express
const express = require('express')
const res = require('express/lib/response')
//2.创建web服务器
const app = express()
//4.监听客户端的GET和POST请求，并向客户端响应具体的内容
app.get('/user', () => {
    //调用express提高的res.send()方法，向客户端响应一个json对象
    res.send({ name: 'zs', age: 20, gender: '男' })
})
app.post('/user', (req, res) => {
    //调用express提供的res.send()方法，向客户端响应一个文本字符串
    res.send('请求成功')
})
app.get('/', (req, res) => {
    //通过req.query可以获取到客户端发送过来的查询参数
    //注意：在默认情况下，req.query是一个空对象
    console.log(req.query)
    res.send(req.query)

})
//url地址中，我们开业通过：参数名的形式，匹配动态参数值
app.get('/user/:id', (req, res) => {
    //req.params默认是一个空对象
    //里面存放这通过：动态匹配到的参数值
    console.log(req.params)
    res.send(req.params)
})
//3.启动web服务器
app.listen(80, () => {
    console.log('express server running at http://127.0.0.1')
})
```

## 托管静态资源
![](http://GitHubxxx17.github.io/img/node.js/12.jpg)
![](http://GitHubxxx17.github.io/img/node.js/13.jpg)
![](http://GitHubxxx17.github.io/img/node.js/14.jpg)

# express 路由
## 路由的概念
广义上来讲，路由就是映射关系
在Express中，路由指的是客户端请求与服务器处理函数之间的映射关系
Express中的路由分三部分组成，分别是请求的类型，请求的URL地址，处理函数。
### express中路由的例子
```js
//匹配GET请求，且请求URL为/
app.get('/',function(req,res){
res.send('Hello World!')
})
//匹配post请求，且请求URL为/
app.post('/',function(req,res){
res.send('Got a POST request')
})
```


