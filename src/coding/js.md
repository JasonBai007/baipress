# 前端脚本编写规范

> 一些日常总结的最佳实践

## 缩进
建议采用**两个空格**的缩进方式。

## 注释
针对**复杂逻辑**，编码者必须写明详细的注释。

## 命名

::: tip Source
来自：[小玲同学的前端开发规范](http://n_123.coding.me/web_standard/web_standard/js.html)
:::

1. 变量

* 驼峰式命名，驼峰式命名法由小(大)写字母开始，后续每个单词首字母都大写。
* **命名方法**：**小驼峰式命名法**。
* **命名规范**：前缀应当是**名词**。（函数的名字前缀为动词，以此区分变量和函数）。
* **命名建议**：尽量在变量名字中体现所属类型，如：`length`、`count`等表示数字类型；而包含`name`、`title`表示为字符串类型。

``` js
// 好的命名方式
var maxCount = 10;
var tableTitle = 'LoginTable';

// 不好的命名方式
var setCount = 10;
var getTitle = 'LoginTable';
```

2、函数

* **命名方法**：**小驼峰式命名法**。
* **命名规范**：前缀应当为**动词**。
* **命名建议**：可使用常见动词约定。

``` js
// 是否可阅读
function canRead() {
    return true;
}

// 获取名称
function getName() {
    return this.name;
}
```

## 组件化
当使用 Vue 进行组件化、模块化开发时，**当前组件的样式必须写在当前文件中**，严禁组件自己的样式写到公共样式文件中。

## 高阶函数
当需要遍历数组时，尽量采用以下**高阶函数**：
* forEach
* map
* filter
* reduce
* sort
* every
* some

这些高阶函数的使用方法，请参阅：[一张图看懂JavaScript中数组的迭代方法](https://img-blog.csdn.net/20170207110723394?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvWWVvbWFuOTI=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)
