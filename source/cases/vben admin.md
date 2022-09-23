---
title: vben admin 项目部署
description: 这里将引导您部署vben admin，让我们开始吧!
---
# 1.背景

OSRC（开源运行时社区[osrc.com](https://osrc.com/)） 是基于云原生技术，让开源爱好者以运行时形态分享开源作品的社区服务。OSRC(开源运行时社区)致力于推动开源项目向更成熟方向发展，开源项目可以在OSRC社区中在线运行起来，运行起来的项目可以提供更鲜活的体验，从而为投身于开源的小伙伴提供助力。

## Vue Vben Admin介绍

![logo](https://anncwb.github.io/anncwb/images/logo.png)

Vue Vben Admin 是一个免费开源的中后台模版。使用了最新的vue3,vite2,TypeScript等主流技术开发，开箱即用的中后台前端解决方案，也可用于学习参考。

## 特性

- 最新技术栈：使用 Vue3/vite2 等前端前沿技术开发
- TypeScript: 应用程序级 JavaScript 的语言
- 主题：可配置的主题
- 国际化：内置完善的国际化方案
- Mock 数据 内置 Mock 数据方案
- 权限 内置完善的动态路由权限生成方案
- 组件 二次封装了多个常用的组件

![1](https://anncwb.github.io/anncwb/images/preview1.png)  
![2](https://anncwb.github.io/anncwb/images/preview2.png)  
![3](https://anncwb.github.io/anncwb/images/preview3.png)

**官网: <https://vvbin.cn/next/>**

# 2. 在开源运行时社区的部署过程

下面描述一下系统在 OSRC 的部署过程。

## step 1：获取代码

首先从 Github 获取代码 :  [github.com](https://github.com/vbenjs/vue-vben-admin.git) :

        git clone https://github.com/vbenjs/vue-vben-admin.git

## step 2:分析代码

该项目是纯前端的， 只需部署前端即可。

## step 3: 项目部署

### 1. 检查配置

node版本要求：
"node": "^12 || \>=14"

### 2. 构建前端项目

#### 2.1. 依赖安装

        yarn

![1652955405740_21.PNG](https://osrtm.oss-cn-beijing.aliyuncs.com/wiki/img/1652955405740_21.PNG)

#### 2.2. build

1. 运行 npm run dev

   npm run dev

![1652955420835_7.PNG](https://osrtm.oss-cn-beijing.aliyuncs.com/wiki/img/1652955420835_7.PNG)

2. 运行 build

![1652955443655_8.PNG](https://osrtm.oss-cn-beijing.aliyuncs.com/wiki/img/1652955443655_8.PNG)
![1652955455064_9.PNG](https://osrtm.oss-cn-beijing.aliyuncs.com/wiki/img/1652955455064_9.PNG)

### 3. 前端osrc部署

执行deploy命令osrc deploy

      osrc deploy

![1652955479685_14.PNG](https://osrtm.oss-cn-beijing.aliyuncs.com/wiki/img/1652955479685_14.PNG)

### 4. 进入系统

打开链接，进入系统：系统链接
[系统链接](https://page-osrc-72e0682176321b2ae5d4a263e7a689d6.maplecloudy.com/)

![1652955493270_5.PNG](https://osrtm.oss-cn-beijing.aliyuncs.com/wiki/img/1652955493270_5.PNG)
![1652955503889_10.PNG](https://osrtm.oss-cn-beijing.aliyuncs.com/wiki/img/1652955503889_10.PNG)
![1652955529315_11.PNG](https://osrtm.oss-cn-beijing.aliyuncs.com/wiki/img/1652955529315_11.PNG)
![1652955514916_12.PNG](https://osrtm.oss-cn-beijing.aliyuncs.com/wiki/img/1652955514916_12.PNG)