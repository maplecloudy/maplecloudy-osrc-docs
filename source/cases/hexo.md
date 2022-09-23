---
title: hexo 项目部署
description: 这里将引导您部署hexo，让我们开始吧!
---
# 快速搭建博客

今天，我们来讲述一个快速搭建博客的的方法。

之前有大神在论坛中讲述了现在市面上博客的优缺点，优点还是非常突出的，用户交互做的好，可以快速圈粉，写的文章在百度、谷歌等主流引擎可以直接搜索到等等。缺点也是比较明显的，比如：会受到平台的各种限制、恶心的广告等等的不自由。

在这之前也看到过大神为了专心创作使用hexo自己搭建服务器，购买了域名和服务器，花费力气去搭一个博客网站，定期维护。相对普通人来说，在经济和精力上是一个比较大的挑战。

还有一些牛人，直接在GitHub page平台上托管博客，这样可以安心用来创作，而且不需要定期维护。相信这个选择相对大多数人是比较好的选择。

最近，我发现了另外一个很有意思的社区，我们也可以通过[OSRC](https://www.osrc.com/about)来搭建博客系统。OSRC不但能同时管理多个pages项目，而且如果你有后端服务也可以发布到OSRC。

# 了解Hexo

Hexo是一款基于Node.js的静态博客框架，依赖少易于安装使用，可以方便的生成静态网页托管在GitHub和OSRC上，是搭建博客的首选框架。大家可以进入[hexo官网](https://hexo.io/zh-cn/)进行详细查看，因为Hexo的创建者是台湾人，对中文的支持很友好，可以选择中文进行查看。

# Hexo在OSRC上的搭建步骤

1. 安装Git
2. 安装Node.js和NPM
3. 部署到OSRC，如果是已安装环境的小伙伴直接\[点这里\](#部署到OSRC)
4. 发布

***

# 1. 安装GIT

Git是目前世界上最先进的分布式版本控制系统，可以有效、高速的处理从很小到非常大的项目版本管理。也就是用来管理你的hexo博客文章，上传到GitHub的工具。Git非常强大，我觉得建议每个人都去了解一下。廖雪峰老师的Git教程写的非常好，大家可以了解一下。Git教程

windows：到git官网上下载,Download git,下载后会有一个Git Bash的命令行工具，以后就用这个工具来使用git。

linux：对linux来说实在是太简单了，因为最早的git就是在linux上编写的，只需要一行代码
sudo apt-get install git

MacOS：因为之前安装了XCode，所以不需要再次安装了。如果没有安装过XCode可以通过homebrew来安装。

- 1、未安装homebrew，需安装homebrew

       /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

- 2、安装git

       	brew install git

# 2、安装Node.js和NPM

- 1、访问nodejs官网并[下载](https://nodejs.org/en/)

- 2、双击刚下载的文件，按步骤默认安装就行

- 3、安装完成后打开终端，输入

         npm -v  
         node -v  

  两个命令，如出现的版本信息，说明安装成功。

# 3、部署到OSRC

OSRC提供了GitHub类似的Pages服务，不同的是OSRC是国产，国产，国产！相比GitHub最大的好处就是，它不受网络的限制！下面我们一起来将Hexo发布到OSRC。

- 1、克隆项目

        git clone https://github.com/hexojs/site.git  

- 2、打开项目文件

        cd site    

![](https://osrtm.oss-cn-beijing.aliyuncs.com/wiki/img/1640781025171\_%E5%85%8B%E9%9A%86%E4%BB%A3%E7%A0%81%E6%88%90%E5%8A%9F.png)

我们可以用 ls 命令看一下下载的文件是否完整

![](https://osrtm.oss-cn-beijing.aliyuncs.com/wiki/img/1640781046990\_%E6%A3%80%E6%9F%A5%E6%96%87%E4%BB%B6%E6%98%AF%E5%90%A6%E5%AE%8C%E6%95%B4.png)

- 3、执行前端依赖

         yarn   

![](https://osrtm.oss-cn-beijing.aliyuncs.com/wiki/img/1640781063915_yarn%E5%87%BA%E9%94%99.png)

这里发现网络连接一直出现问题，不能正确拉取依赖。

我们换一种拉取前端依赖的方法

    npm i    

![](https://osrtm.oss-cn-beijing.aliyuncs.com/wiki/img/1640781083305_npm%E5%BC%80%E5%A7%8B%E6%89%A7%E8%A1%8C.png)

这个过程稍微有点漫长，好在拉取成功。
![](https://osrtm.oss-cn-beijing.aliyuncs.com/wiki/img/1640781130315_npm%E6%88%90%E5%8A%9F.png)

- 4、编译文件

        yarn build    

![](https://osrtm.oss-cn-beijing.aliyuncs.com/wiki/img/1640781293197\_%E7%BC%96%E8%AF%91%E6%88%90%E5%8A%9F.jpg)

- 5、指定登录地址
  指定登录地址

        osrc -r https://www.osrc.com   

执行登录，输入用户名

    	osrc login

![](https://osrtm.oss-cn-beijing.aliyuncs.com/wiki/img/1640781416043\_%E8%BE%93%E5%85%A5%E7%94%A8%E6%88%B7%E5%90%8D%E5%AF%86%E7%A0%81.png)

- 6、上传
  通过观察我们发现，编译后的文件存储目录是public，所有我们在上传的时候要指定一下上传的目录

  osrc deploy -d public

![](https://osrtm.oss-cn-beijing.aliyuncs.com/wiki/img/1640781439120\_%E4%B8%8A%E4%BC%A0%E6%88%90%E5%8A%9F.png)

- 7、登录OSRC查看
  登录\[OSRC\](www.osrc.com)
- 点击进入到os的项目page主页

![](https://oss.osrc.com/wiki/img/1658227820065_hexo1.png)进入到page详情页,找到系统默认生成的domain,即可进行快速访问

![](https://oss.osrc.com/wiki/img/1658227860820_hexo2.png)

- 8、打开项目地址
  成功打开主页
- ![](https://oss.osrc.com/wiki/img/1658227963529_hexo3.png)

经过测试，发现了一个比较奇怪的问题，这些菜单无法访问，通过浏览器的信息我们看到了以下错误

![](https://osrtm.oss-cn-beijing.aliyuncs.com/wiki/img/1640781710224\_%E6%B5%8F%E8%A7%88%E5%99%A8%E9%94%99%E8%AF%AF.jpg)

最终我们发现前端路由地址指向是有问题的，我们可以对编译好的文件进行一些小的修改来解决一下这个问题

找到找到site/public文件夹，使用记事本或者文本编辑工具，打开index.html。
打开后找到Script标签，插入以下代码

    <script>	
    if (location.pathname.endsWith('/')) {	
            location += 'index.html';		
     }	
    </script>	

我们来看一下插入的位置

![](https://osrtm.oss-cn-beijing.aliyuncs.com/wiki/img/1640781740120\_%E4%BB%A3%E7%A0%81%E6%8F%92%E5%85%A5%E7%9A%84%E4%BD%8D%E7%BD%AE.png)

返回查看，一切正常，万事大吉～

如果你也有兴趣了解这个项目，可以访问：https://page-osrc-9a4a0c86cdc1fc479d95ef478e1da77b.osrc.com