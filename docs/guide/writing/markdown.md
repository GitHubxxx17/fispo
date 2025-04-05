---
title: markdown 扩展
---

# Markdown 扩展
Fispo 带有内置的 Markdown 扩展。

## 链接

外部链接和内部链接都会被处理。

### 外部链接

所有的外部链接都会被加上`target="_blank" rel="noreferrer"`，点击会在新标签页打开外部网站，例如：
- [react](https://react.docschina.org/)
- [vite](https://vitejs.cn/vite3-cn/)


### 内部链接
内部链接将转换为单页导航的路由链接。
例如，给定以下目录结构：
``` md
.
├─ index.md
├─ foo
│  ├─ index.md
│  ├─ a.md
│  └─ b.md
└─ bar
   ├─ index.md
   ├─ a.md
   └─ b.md
```

假设现在处于 foo/a.md 文件中：
``` md
[Home](/) <!-- 将用户导航至根目录下的 index.html -->
[foo](/foo/) <!-- 将用户导航至目录 foo 下的 index.html -->
[foo heading](./#heading) <!-- 将用户锚定到目录 foo 下的index文件中的一个标题上 -->
[foo a - heading](#heading) <!-- 将用户锚定到当前文件中的一个标题上 -->
[bar - three](../bar/three) <!-- 可以省略扩展名 -->
[bar - three](../bar/a.md) <!-- 可以添加 .md -->
[bar - four](../bar/b.html) <!-- 或者可以添加 .html -->
````

---

## frontmatter
Front-matter 是文件开头的 YAML 代码块，用于配置写作设置。
```md
---
title: Blogging Like a Hacker
lang: en-US
---
```
此数据将可用于页面的其余部分，以及所有自定义和主题组件。
更多信息，参见[frontmatter](./frontmatter.md)。

## 标签外挂

### 引用 note

Fispo 的标签外挂参考了 Hexo 独有的功能标签外挂，并不是标准的 Markdown 格式。

{% note warning modern %}
标签外挂虽然能为主题带来一些额外的功能和 UI 方面的强化，但是，标签外挂也有明显的限制，使用时请留意。
{% endnote %}

**用法**：
``` md
{% note [class] [no-icon] [icon] [style] %}
Any content (support inline tags too.io).
{% endnote %}
```

| 名称        |      用法      |
| :-------------------: | :-----------: | 
| class     | 【可选】标识，不同的标识有不同的配色（ default / primary / success / info / warning / danger ） |
| no-icon    |   【可选】不显示 icon   |  
|  icon     |   【可选】以icon-开头标识icon   |  
| style |   【可选】可以覆盖配置中的 style（simple/modern/flat/disabled）   | 



{% note primary icon-palette flat %}
simple
{% endnote %}

**示例代码**：
``` md
{% note simple %}
默认 提示块标签
{% endnote %}

{% note default simple %}
default 提示块标签
{% endnote %}

{% note primary simple %}
primary 提示块标签
{% endnote %}

{% note success simple %}
success 提示块标签
{% endnote %}

{% note info simple %}
info 提示块标签
{% endnote %}

{% note warning simple %}
warning 提示块标签
{% endnote %}

{% note danger simple %}
danger 提示块标签
{% endnote %}
```

**样式预览**：
{% note simple %}
默认 提示块标签
{% endnote %}

{% note default simple %}
default 提示块标签
{% endnote %}

{% note primary simple %}
primary 提示块标签
{% endnote %}

{% note success simple %}
success 提示块标签
{% endnote %}

{% note info simple %}
info 提示块标签
{% endnote %}

{% note warning simple %}
warning 提示块标签
{% endnote %}

{% note danger simple %}
danger 提示块标签
{% endnote %}

{% note primary icon-pen-fancy flat %}
modern
{% endnote %}

**示例代码**：
```md
{% note modern %}
默认 提示块标签
{% endnote %}

{% note default modern %}
default 提示块标签
{% endnote %}

{% note primary modern %}
primary 提示块标签
{% endnote %}

{% note success modern %}
success 提示块标签
{% endnote %}

{% note info modern %}
info 提示块标签
{% endnote %}

{% note warning modern %}
warning 提示块标签
{% endnote %}

{% note danger modern %}
danger 提示块标签
{% endnote %}
```
**样式预览**：
{% note modern %}
默认 提示块标签
{% endnote %}

{% note default modern %}
default 提示块标签
{% endnote %}

{% note primary modern %}
primary 提示块标签
{% endnote %}

{% note success modern %}
success 提示块标签
{% endnote %}

{% note info modern %}
info 提示块标签
{% endnote %}

{% note warning modern %}
warning 提示块标签
{% endnote %}

{% note danger modern %}
danger 提示块标签
{% endnote %}


{% note primary icon-coffee flat %}
flat
{% endnote %}
**示例代码**：
```md
{% note flat %}
默认 提示块标签
{% endnote %}

{% note default flat %}
default 提示块标签
{% endnote %}

{% note primary flat %}
primary 提示块标签
{% endnote %}

{% note success flat %}
success 提示块标签
{% endnote %}

{% note info flat %}
info 提示块标签
{% endnote %}

{% note warning flat %}
warning 提示块标签
{% endnote %}

{% note danger flat %}
danger 提示块标签
{% endnote %}
```
**样式预览**：
{% note flat %}
默认 提示块标签
{% endnote %}

{% note default flat %}
default 提示块标签
{% endnote %}

{% note primary flat %}
primary 提示块标签
{% endnote %}

{% note success flat %}
success 提示块标签
{% endnote %}

{% note info flat %}
info 提示块标签
{% endnote %}

{% note warning flat %}
warning 提示块标签
{% endnote %}

{% note danger flat %}
danger 提示块标签
{% endnote %}

### 上标标签 tip
{% tip info %}
tip的样式参考自 [Akilarの糖果屋](https://akilar.top/posts/615e2dec/)
{% endtip %}

**用法**：
``` md
{% tip [class] [no-icon] [icon] %}
Any content
{% endnote %}
```

| 名称        |      用法      |
| :-------------------: | :-----------: | 
| class     | 【可选】标识，不同的标识有不同的配色（ default/success/error/warning/bolt/ban/home/sync/cogs/key/bell ） |
| no-icon   |   【可选】不显示 icon   |  
|  icon     |   【可选】以icon-开头标识icon    |  


**示例代码**：
```md
{% tip %}default{% endtip %}
{% tip info %}info{% endtip %}
{% tip success %}success{% endtip %}
{% tip error %}error{% endtip %}
{% tip warning %}warning{% endtip %}
{% tip bolt %}bolt{% endtip %}
{% tip ban %}ban{% endtip %}
{% tip home %}home{% endtip %}
{% tip sync %}sync{% endtip %}
{% tip cogs %}cogs{% endtip %}
{% tip key %}key{% endtip %}
{% tip bell %}bell{% endtip %}
{% tip fa-atom %}自定义font awesome图标{% endtip %}
```

**样式预览**：
{% tip %}default{% endtip %}
{% tip info %}info{% endtip %}
{% tip success %}success{% endtip %}
{% tip error %}error{% endtip %}
{% tip warning %}warning{% endtip %}
{% tip bolt %}bolt{% endtip %}
{% tip ban %}ban{% endtip %}
{% tip home %}home{% endtip %}
{% tip sync %}sync{% endtip %}
{% tip cogs %}cogs{% endtip %}
{% tip key %}key{% endtip %}
{% tip bell %}bell{% endtip %}
{% tip icon-atom %}自定义font awesome图标{% endtip %}



### 时间轴

**示例代码**：
```md
{% timeline 2022 %}

<!-- timeline 01-02 -->

这是测试页面

<!-- endtimeline -->

{% endtimeline %}
```

**样式预览**：
{% timeline 2022 %}

<!-- timeline 01-02 -->

这是测试页面

<!-- endtimeline -->

{% endtimeline %}