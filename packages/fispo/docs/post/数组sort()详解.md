---
title: 数组sort()详解
categories: "笔记"
tags:
  - 笔记
cover: /cover/b.jpg
---

# 数组sort()

{% note info simple %}
info 提示块标签
{% endnote %}

> 语法：arr.sort([compareFunction])

compareFunction这个参数是可填可不填的


> 语法：arr.sort([compareFunction])
1. compareFunction这个参数是可填可不填的
2. compareFunction 是一个函数,用来指定按某种顺序进行排列的函数。
3. 如果省略，元素按照转换为的字符串的各个字符的Unicode位点进行排序。
4. 该排序方法会改变原始数组

## 默认排序

```javascript
let arr1 = [40, 5, 2, 3, 1, 6];
let arr2 = ["40", "5", "2", "3", "1", "6"];
arr1.sort();
arr2.sort();
console.log(arr1, arr2); //[ 1, 2, 3, 40, 5, 6 ] [ '1', '2', '3', '40', '5', '6' ][ '1', '2', 3', '40', '5', '6' ]//[ 1, 2, 3, 40, 5, 6 ] [ '1', '2', '3', '40', '5', '6' ][ '1', '2', 3', '40', '5', '6' ]
```

## 升序

> **原理**:sort()里面的函数返回值如果大于0，则a、b交换位置；（数组原本位置为a在b的前面）
> 如果返回值小于0，则a、b不交换位置；
> 如果返回值等于0，则a、b的位置不变。

```javascript
let arr = [40, 5, 2, 3, 1, 6];
arr.sort((a, b) => {
  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  } else if (a == b) {
    return 0;
  }
});
console.log(arr); // [1,2,3,5,6,40]

//简写
arr.sort((a, b) => a - b);
```

## 降序

原理和升序同理

```javascript
let arr = [40, 5, 2, 3, 1, 6];
arr.sort((a, b) => {
  if (a < b) {
    return 1;
  } else if (a > b) {
    return -1;
  } else if (a == b) {
    return 0;
  }
});
console.log(arr); // [ 40, 6, 5, 3, 2, 1 ]

//简写
arr.sort((a, b) => b - a);
```

# sort源码原理

在v8源码sort部分中，对于需要排序的元素个数n，具体排序策略有几下中情形：

1. 当 n<=10 时，采用插入排序；
2. 当 n>10 时，采用三路快速排序；
3. 10< n <=1000，采用中位数作为哨兵元素；
4. n>1000，每隔 200~215 个元素挑出一个元素，放到一个新数组中，然后对它排序，找到中间位置的数，以此作为中位数。

# sort的其他语法

## 将数组的奇数和偶数分离

```javascript
let arr = [2, 3, 1, 2, 5, 1, 2];
arr.sort((a, b) => {
  if (a % 2 == 1) return -1;
});
console.log(arr); //[1, 5, 1, 3, 2, 2, 2]
```

## 打乱数组

```javascript
let arr = [1, 2, 3, 4, 5, 6, 7];
arr.sort(function (a, b) {
  return Math.random() - 0.5; //Math.random()方法在(0,1)开区间随机取值
});
console.log(arr); //[2, 1, 3, 7, 5, 4, 6]
```
