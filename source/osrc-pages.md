---
title: OSRC Pages
description: 这里将引导您部署一个OSRC Pages应用!
---

> OSRC Pages部署提供了NodeJs的一个CLI工具。osrc-cli工具以开源方式提供，[OSRC 开发者工具](https://github.com/maplecloudy/maplecloudy-osrc-tools/tree/master/osrc-cli) , 欢迎感兴趣参与贡献，OSRC正在努力提供各种编程语言的支持

# Pages应用

下面介绍下如何发布Pages应用到OSRC。

## 安装发布工具 `osrc-cli`   

> OSRC的打包工具是与开发工具集成提供的，不需要额外配置，这是OSRC工具本身的特性，也是**OSRC CI**设计的原则。

- 安装CLI插件

```bash
# 需要nodejs环境 
npm i -g osrc-cli
# or
yarn global add osrc-cli
# 输入osrc 会获得帮助信息
osrc
```

更多OSRC-CLI使用请参考: [OSRC-CLI](https://www.npmjs.com/package/osrc-cli)    

> osrc-cli 目前支持**node: "^12.20.0 || ^14.13.1 || >=16.0.0**
> 如果您使用其他不兼容的node版本在开发，一个Workaround的方案是：使用您需要的node版本编译您的项目，然后切换到一个osrc-cli支持的node版本，使用osrc命令发布您的项目。

## 部署Pages

部署您的前端应用需要您先编译项目，并且确定编译成功生成对应的静态目录，然后使用`osrc-cli`来进行部署，具体操作步骤如下：


1. CLI登录OSRC，若无账户请您先到 www.osrc.com 注册  

```bash
# osrc login让您在本地登录到Osrc社区
osrc login
# osrc info 让您看到目前的登录信息
osrc info
```

2. 编译项目生成静态目录后，部署 Pages 

```bash
# osrc deploy 发布您的应用到OSRC，默认会上传dist目录下的文件
osrc deploy
# 如果编译输出其他目录，可以通过-d 指定要发布的静态目录 eg: public
osrc deploy -d public
```

3. 配置关联项目(`Project`)  

`osrc deploy` 部署过程中会提示您将此Page部署到哪个项目下，您可以选择新建项目或者部署到已有项目。   

4. 部署成功 

经过以上的**osrc deploy**操作，如果提示**success**, 恭喜您，已经部署好了您的Pages。


## 前后端链接，前端Pages和后端App联动配置  

OSRC Pages支持集成**OSRC APP运行时**作为后台服务，实现动态应用。 
即配置前端Pages访问我们已经部署的后端APP服务，实现真正的动态应用产品。  


![page_config](/assets/img/page-config.png)   

> 在实现上OSRC尽量做到跟前端在本地开发场景下配置代理服务一样的体验
> 一个应用可以提供多个代理配置，以集成多个后端服务。

**现在您可以访问Domain体验您完整的开源产品啦！**  

## 项目发布到公共社区   

目前为止您的项目是私有的，如果您希望您制作的开源产品公开发布到OSRC社区，请完善项目的其它信息(info,readme,logo等)，然后点击 **publish**  

![project-publish](/assets/img/[project-publish.png)   

DONE！您的项目已经发布到OSRC社区，会被更多人发现和看到。    

![projects](/assets/img/[projects.png)

OSRC社区期待您伟大的开源项目！   

----

经过以上操作，您已经体验了目前OSRC社区为您提供的各种能力，OSRC团队会继续努力为大家提供更好的运行时社区能力，也欢迎大家提供宝贵意见！

欢迎加好友进行交流！
<img src="/assets/img/kim-card.jpg" width = "35%" height = "35%" alt="Kim" align=center /><img src="/assets/img/pengfei-card.jpg" width = "35%" height = "35%" alt="Pengfei" align=center />
