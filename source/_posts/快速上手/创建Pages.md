# 发布Pages

# 1. 安装GIT
Git是目前世界上最先进的分布式版本控制系统，可以有效、高速的处理从很小到非常大的项目版本管理。也就是用来管理你的hexo博客文章，上传到GitHub的工具。Git非常强大，我觉得建议每个人都去了解一下。廖雪峰老师的Git教程写的非常好，大家可以了解一下。Git教程

windows：到git官网上下载,Download git,下载后会有一个Git Bash的命令行工具，以后就用这个工具来使用git。

linux：对linux来说实在是太简单了，因为最早的git就是在linux上编写的，只需要一行代码
>  sudo apt-get install git

MacOS：因为之前安装了XCode，所以不需要再次安装了。如果没有安装过XCode可以通过homebrew来安装。
-  1、未安装homebrew，需安装homebrew
> /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
-  2、安装git
>brew install git

# 2、安装Node.js和NPM
- 1、访问nodejs官网并下载https://nodejs.org/en/

- 2、双击刚下载的文件，按步骤默认安装就行

- 3、安装完成后打开终端，输入
 > npm -v  

> node -v  


# 3、部署到OSRC
	
- 1、克隆项目
> git clone https://github.com/hexojs/site.git  

- 2、打开项目文件
> cd site  

我们可以用命令看一下下载的文件是否完整
>ls  


- 3、执行前端依赖
> yarn  

- 4、编译文件  

>yarn build   

- 5、指定登录地址
指定登录地址
>osrc-cli -r https://www.osrc.com  
执行登录  
> osrc-cli login
输入用户名

输入密码


- 6、上传
通过观察我们发现，编译后的文件存储目录是public，所有我们在上传的时候要指定一下上传的目录
>osrc-cli upload -d public


- 7、登录OSRC即可查看
登录OSRC

在右上角，可以找到我的pages












