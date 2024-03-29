---
title: 'OSRC Guide'
metaTitle: 'OSRC Guide'
metaDescription: 'OSRC Guide'
sidebar_position: 1
slug: /
hide_table_of_contents: false
---

# OSRC Guide

OSRC(开源运行时社区) 是基于云原生技术，让开源爱好者以运行时形态分享开源作品的社区服务。

# 基本概念

在使用OSRC前，可以先简单了解一下几个概念：云原生、项目(`Project`)、应用(`App`)、运行时(`Runtimes`)、运行时实例(`Instance`)、Pages。

## 云原生

OSRC团队定义云原生为一套基础软件开发设施（IPaaS），让用户可以**高效**部署自己的软件应用到云端，并实现**南北&东西向**的网络访问。   
极致的DevOps和CI/CD是云原生内核。

> 南北向网络访问：用户通过互联网访问基于云原生部署的应用    
> 东西向网络访问：云原生服务之间通过内部网络互相访问

在此基础上，云原生还提供丰富的特性：

### 安全
云原生系统应用行业领先的安全技术，帮助用户保护数据和应用。

### 效率
**Serverless**     
服务器无感知化，OSRC提供的云原生能力像一个操作系统，希望能给用户提供极致的Serverless体验，目标是让用户开发、部署、管理在云端的应用与在个人电脑上管理各种软件实现一致的体验。

**DevOps&CI/CD**   
OSRC提供的CI/CD工具，让用户可以分钟级发布和应用更新，目前提供了Java应用和nodejs静态网站应用相关工具。关于OSRC构建DevOps&CI/CD的细节，欢迎**进一步的探索**！

**可靠性**  
AIOps、自动化运维、专业团队。       
部署在云原生系统上的软件具备AIOps特性，使用先进的自动化运维工具，并且由专业的团队提供服务和技术支持，无论在软件特性和团队能力上，都应该提供一流的服务。

**可观测性**   
云原生提供丰富的工具，让用户可以方便的观测自身应用，包括先进的APM工具、日志管理&分析工具等等。

## 项目(`Project`)

OSRC项目(`Project`)是对外展示的一个产品包装，映射到我们自己的一个产品，项目内包含运行时后端，前端Pages，Wiki文档，展示内容等。  
方便我们以项目的展示维度分享开源作品，给体验使用者更直观的触达和感受。

## 应用(`App`)

OSRC应用(`App`)归属于项目(`Project`)，是基于云原生系统可运行的**无状态**后台应用服务，通过OSRC发布的CI工具，可以快速发布应用。

在OSRC设计中，一个应用可以具备**多个程序入口**，以实现不同的功能和服务。

**无状态**应用程序入口分两种：

- `Service` :  是一种持续运行（LongTerm）的应用，用户不主动停止，Service应用将一直提供服务。比如我们常见的各种API后台服务。

> 一个OSRC应用Service入口是唯一的

- `Task` : 是一个性程序作业任务，运行完成即退出（ShortTerm），比如我们在终端输入的'ls'命令，或者熟悉大数据的朋友，各种数据处理Spark或MR程序都是Task应用，OSRC开发的云原生系统，天然支持各种大数据作业。

> 一个OSRC应用的Task入口可以是多个

注意:
app的size大小,限制为1Gb.app内部的文件上传size大小,限制为1.5Gb.

## 运行时&运行实例&域(`Runtimes`)

OSRC运行时(`Runtimes`)归属于应用(`App`)，应用需要启动运行生成运行实例，才能对外提供服务。对无状态应用，可以启动多个运行时实例。    
运行时具备唯一的**域(`Domain`)**，即访问此服务的域名URL，通过该域，实现用户对此应用的南北向访问。社区用户可以把一个运行时分享出来，让大家直接体验。

> 对一个应用启动多个运行时实例，OSRC采用的是LB策略进行流量负载均衡。

## 静态站点(`Pages`)

Pages 是无需服务器资源，无需运行，发布后通过浏览器可以直接访问的静态网页应用。OSRC Pages 同 GitHub Pages, Gitee Pages 等类似提供前端静态托管服务。    
我们可以通过常见的静态站点生成器：vuepress, Jekyll, Hugo, Hexo, Gatsby, Nuxt.js, Docusaurus等制作我们的静态站点，通过Pages发布到OSRC上。

OSRC Pages有如下特点：

- 用户可以发布多个Pages，每个Pages都具备独立且唯一的域，可以通过域直接访问，可以自定义域名。
- Pages归属于项目(`Project`)下，作为我们开源产品的展示窗口。
- OSRC Pages可以通过代理设置与OSRC应用(`App`)集成，即前端链接后端，实现动态应用，详见 [OSRC 实战案例,前后端集成](/tutorials/quick-start/osrc-pages)

----

感谢您阅读OSRC的简介以及相关概念，让我们开始探索使用吧！[Let's Deploy OSRC！](/tutorials/quick-start/osrc-app)
