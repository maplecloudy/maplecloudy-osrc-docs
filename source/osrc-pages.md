---
title: OSRC Pages
description: 这里将引导您发布一个OSRC Pages应用!
---

> OSRC 提供了CI相关的工具，在Pages发布上提供了NodeJs的一个Cli工具。CI工具以开源方式提供，[OSRC 开发者工具](https://github.com/maplecloudy/maplecloudy-osrt-tools/tree/master/osrc-cli),感兴趣的同学可以不同形式参与，OSRC正在努力提供各种编程语言的支持！

# Pages应用

下面介绍下如何发布Pages应用到OSRC。

## 发布工具osrc-cli

> OSRC的打包工具是与开发工具集成提供的，不需要额外配置，这是OSRC工具本身的特性，也是**OSRC CI**设计的原则。

- 安装插件

```bash
# clone maplecloudy-osrc-tools to local
git clone https://github.com/maplecloudy/maplecloudy-osrt-tools.git
#进入osrc-cli目录
cd maplecloudy-osrt-tools/osrc-cli
# 下载后通过maven在本地安装
npm link
# 输入osrc 会获得帮助信息
osrc
# osrc login让您在本地登录到Osrc社区
osrc login
# osrc info 让您看到目前的登录信息
osrc info
# osrc deploy 发布您的应用到OSRC，默认会上传dist目录下的文件，需要您先编译，如果编译输出其他目录，可以通过-d 指定要发布的内容
osrc deploy
```

## 发布Pages

发布您的前端应用需要您先编译项目，并且确定编译成功，然后使用osrc-cli来进行发布，具体操作步骤如下：
> osrc-cli 目前存在一些兼容问题，目前支持**node: "^12.20.0 || ^14.13.1 || >=16.0.0**
> 如果您使用其他不兼容的node版本在开发，一个Workaround的方案是：使用您需要的node去编译您的项目，然后切换到一个osrc-cli支持的node版本，使用osrc命令去发布您的项目。
> osrc-cli 已经尝试发布到npm仓库，让大家可以方便的以**npm i -g osrc-cli**的方式使用，不过目前存在一些问题，有相关的经验的同学，可以多给些宝贵意见！

```bash
# 输入osrc 会获得帮助信息
osrc
# osrc login让您在本地登录到Osrc社区
osrc login
# osrc info 让您看到目前的登录信息
osrc info
# osrc deploy 发布您的应用到OSRC，默认会上传dist目录下的文件，需要您先编译，如果编译输出其他目录，可以通过-d 指定要发布的内容
osrc deploy
```

## 分享应用

经过以上的**osrc deploy**操作，如果提示**success**,恭喜您，已经发布好了您的应用。
登录[www.osrc.com](htttps://www.osrc.com),在用户头像点击后的下拉菜单中选择**我的Pages**：
![我的Pages](/assets/img/my-pages.png)
在我的Pages列表页面应该能看到您刚发布的Pages应用：
![我的Pages](/assets/img/my-pages-list.png)
点击对应的card进入到Pages详情页面：
![Pages Detail](/assets/img/pages-detail.png)
图中红色圈住的链接，就是我们为您的Pages 分配的**域**，点击就能访问您的应用了。
点击上图中的**发布**按钮，您就可以把您的应用分享给社区的朋友。

## 动态应用配置

OSRC Pages支持集成OSRC 运行时作为后台服务，实现动态应用。
通过上图中的代理配置就可以绑定一个运行时，实现后台访问。
> 在实现上OSRC尽量做到跟前端开发在本地开发场景下配置代码服务一样的体验
> 一个应用可以提供多个代理配置，以集成多个后端服务。


----

好了，经过以上操作，您已经体验了目前OSRC社区为您提供的各种能力，OSRC团队会继续努力为大家提供更好的运行时社区能力，也欢迎大家提供宝贵意见！
需要的朋友可以加好友进行交流！
<img src="/assets/img/kim-card.jpg" width = "35%" height = "35%" alt="Kim" align=center /><img src="/assets/img/pengfei-card.jpg" width = "35%" height = "35%" alt="Pengfei" align=center />

