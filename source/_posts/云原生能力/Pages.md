## 概述
前端的应用,我们称之为Pages.
## pages的生成规则
换言之,怎么判断本次部署的app和上次部署的app为同一个或不同的app呢?
我们通过`username+bundle+version`的方式进行判断.
### username
username即为您在osrc平台上注册时的username
### bundle
bundle英文翻译为`捆绑、系列`的意思.  
对于Pages,bundle的信息是通过package.json中的属性信息抽取出来的,类似与maven中groupId和artifactId的组合,起到`坐标`的作用.
将来bundle会支持用户的自定义.
### version
version即为package.json中指定的version.

综上,假如应用进行了两次deploy操作,您的`username+bundle+version`一样,那么这两次的deploy我们会认为是同一个Pages,且前一次Pages的属性信息会被后一次覆盖,如`description`等.如果`username+bundle+version`不同,例如version两次分别为1.0.0和1.0.1,那么这两次deploy就会生成两个独立的Pages,您可在`个人中心-我的Pages`中看到这两个Pages.
## Pages的编辑
在page发布前,您可对page的属性信息进行编辑,例如上传一些截图,项目的来源(github/gitee/...)等.
## 设置代理
当前支持两种类型的代理目标:
  * 运行时-当前在osrc平台启动的runtime
  * 地址-任何一个可提供后端服务的完整url
并且支持path的prefix匹配和path的路径重写,具体语法规则,可参考spring gateway的相应语法.
将来会支持更加丰富的语法规则.
## Pages的发布
deploy上来的Pages默认是私有的,也即仅作者自己可见,他人搜索Pages时将不会检索到.只有当Pages进行了发布,那么所有人皆可见,且能被检索到.

注意:
当Pages处于发布状态时,那么如果此Pages再次deploy时会失败.您可以取消发布再进行deploy.

## Paegs的deploy
安装osrt-cli进行Pages的deploy,详情请参阅[osrc-cli](https://github.com/maplecloudy/maplecloudy-osrt-tools/tree/master/osrc-cli#readme)

## 文件浏览
文件浏览为此Pages编译后的文件目录,可以进行相关的文件浏览.

 ## 关联的wiki
  新建wiki的时候,我们可以选择进行`关联`,之后在关联的实体的详情页就可以查阅到相关的wiki.