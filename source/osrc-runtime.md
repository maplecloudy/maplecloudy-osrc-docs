[comment]: <> (---)

[comment]: <> (title: 运行时)

[comment]: <> (description: 这里将引导您在OSRC启动应用，以及分享运行时，让我们开始吧!)

[comment]: <> (---)

> OSRC应用运行时功能处于Beta测试阶段，目前从页面操作上来说没有任何限制，是希望给大家方便的运行时体验，我们也发现了一些问题，正在改进中。
> 提交运行时应用是需要CPU和内存资源的，希望大家在提交的时候慎重考虑资源的消耗。

# let's run!
## 应用主页
从用户头像打开我的应用界面：
![我的应用](/assets/img/my-app-list.png)

这时您会看到发布的OSRC显示在card中，选择一个你想启动的应用，进去应用详情页面：
![应用详情](/assets/img/app-detail.png)

## 应用配置
这里我们打开的是一个[法国人做的商城开源作品](https://github.com/shopizer-ecommerce/shopizer)，有一个Service类型的程序入口，旁边有一个设置按钮，您可以设置运行时的资源、参数、以及服务的EndPoints.

![运行时配置](/assets/img/rt-setup.png)

- 资源配置 很简单的两项，可以设置CPU和内存，默认值是1CPU，1G内存
> 目前支持最小内存是1G，增量单位是512M,最大单个实例内存是4G
> 系统信息如下：
```bash
LSB Version:	:core-4.1-amd64:core-4.1-noarch
Distributor ID:	CentOS
Description:	CentOS Linux release 7.9.2009 (Core)
Release:	7.9.2009
Codename:	Core
```
> 默认的Java版本
```bash
java version "1.8.0_162"
Java(TM) SE Runtime Environment (build 1.8.0_162-b12)
Java HotSpot(TM) 64-Bit Server VM (build 25.162-b12, mixed mode)
```
- 参数配置 用户可以设定多个参数，以Key-Value方式传递给应用
- EndPoints 用户在该运行时**域**下可以访问的相对地址，也可以是绝对地址，用于引用其他跟这个运行时有关的网络资源。这个后面我们会详细说明
## 运行时

结束配置点击S图标，来运行它：
![运行OSRC应用](/assets/img/run-osrc-app.png)
点击确认，进入运行时页面：
![运行时页面](/assets/img/app-runtime.png)
我们看到实例中多了一个绿色正在运行的实例，这里还有很多灰色代表停止的历史实例。在这个实例起作用之前，我么还要对实例进行一下端口号配置：
![运行实例页面](/assets/img/rti.png)
> 在提交应用的时候，我们推荐用户在任何需要端口号的地方使用随机端口，在云原生场景下，由于强大的服务发现能力，端口号这个概念是不需要用户关心的，当然这需要一个习惯过程
> 如图把日志翻到最前面，我们发现了端口，然后再更新端口那里进行更新，这样你的服务才能正常访问。
> 这里需要的端口号配置操作是一个Workaround方案，我们正在优化云原生引擎，以支持端口的自动发现，以及用户可能在一个服务中使用多个端口号，具体技术方案我们还在评估，也欢迎大家关注我们，提供宝贵意见！

再次返回运行时页面：
![运行实EndPoints](/assets/img/rt-endpoints.png)
这里我已经配置了多个Endpoints，这里我就不再赘述，上面[sm-shop示例的应用](https://www.osrc.com/runtimes/runtime_734504301977448448)我已经发布，大家都可以访问了，点击体验一下，相信大家都能理解Endpoints的意义。
> 一个应用可以输出多个EndPoints,展示应用本身的多方面能力，比如对于开发者会很关心**sm-shop**的接口文档，看下这个应用接口，定义的非常规范，会有一种赏心悦目的感觉。

## 发布应用

在页面上的发布按钮=分享，发布后您就不能更改应用的相关配置信息了，这个时候，任何人通过搜索，都可以找到您分享的应用。

---
到这里您已经体验了OSRC社区大部分能力，做前端的朋友是不是着急了，我们的前端应用不需要这么复杂啊，那么接下来让我们介绍[OSRC Pages](/osrc-pages.html),体验下SPA Pages应用发布，以及集成后台服务实现动态应用吧！
