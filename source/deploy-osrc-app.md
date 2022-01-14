---
title: OSRC应用
description: 这里将引导您发布一个OSRC应用，让我们开始吧!
---

> OSRC 提供了CI相关的工具，目前支持JAVA应用的发布，CI工具以开源方式提供，[OSRC 开发者工具](https://github.com/maplecloudy/maplecloudy-osrt-tools),感兴趣的同学可以不同形式参与，OSRC正在努力提供各种编程语言的支持！

# JAVA应用

下面介绍下如何发布JAVA应用到OSRC。

## 打包和发布工具

OSRC的打包工具是与开发工具集成提供的，不需要额外配置，这是OSRC工具本身的特性，也是**OSRC CI**设计的原则。

目前提供JAVA发布工具是Maven的一个插件（Plugin），插件借签了SpringBoot的打包和使用方式，从SpringBoot maven plugin修改而来，我们在打包过程增加了一些Mojo，从项目配置中组织信息，形成OSRC应用的描述（Manifest）文件，以便OSRC 云原生系统能够执行应用。并且OSRC主张从**源码**直接组装成**制品级别的应用**，OSRC的应用主页也提供必要的编辑功能，让应用更具制品特性，便于分享。

- 安装插件

```bash
# clone maplecloudy-osrc-tools to local
git clone https://github.com/maplecloudy/maplecloudy-osrt-tools.git
# 下载后通过maven在本地安装
mvn clean install

```

> 直接通过maven仓库使用插件的方式正在制作中，敬请期待！

- 使用插件

在项目的pom.xml中使用插件：

```xml

 <plugin>
  <groupId>com.maplecloudy.osrt</groupId>
  <artifactId>maplecloudy-osrt-maven-plugin</artifactId>
  <version>1.0.0-SNAPSHOT</version>
  <executions>
      <execution>
          <goals>
              <goal>repackage</goal>
              <goal>install-osrt-app</goal>
          </goals>
      </execution>
  </executions>
</plugin>

```

## 定义程序入口

OSRC插件通过具备Main函数的Class的Annotation来识别程序入口，以及该程序入口的类型：Service 或 Task.

> 一个应用可以具备一个Service类型的入口和多个Task类型的入口。

**OSRC Maven Plugin**插件识别三种Annotation：

- @SpringBootApplication 会被识别为Service类型的程序入口，此Annotation熟悉Springboot的开发自然知道，这里不再赘述。
- @Service 会被识别为Service类型的程序入口
- @Task 会被识别为Task类型的程序入口

> 后面两个Annotation为了避免侵入性，需要使用的时候，用户可以在自己的项目中添加，注意Package名字要与下面代码一直，代码如下：

- Service Annotation

```java
package com.maplecloudy.osrt.app.annotation;

public @interface Service {
  
}
```

- Task Annotation

```java
package com.maplecloudy.osrt.app.annotation;

public @interface Task {
  
}
```

## 编译和发布应用到OSRC

在安装好插件以及确认程序入口正确之后，就可以发布应用了，在项目目录下执行:

```bash
# 编译和发布
mvn clean install

# 如果希望编译的时候忽略发布到OSRC
mvn clean install -Dinstall.osrt.skip=true

```

> 在第一次发布时候，Maven编译过程会要求您登陆到OSRC，这时候你需要先注册一个[OSRC](https://www.osrc.com/)账号，然后根据命令提示输入账号和密码登陆。
> 如果你使用过Pages发布的'osrc login'进行登陆，那么两个登陆是授权是通用的。
> 每次登陆OSRC授权会持续2个小时，如果你想在一个设备上结束授权，可以手动删除'~/.osrc'文件，OSRC正在重新评估授权的方式，以便用户更好的管理授权，保证用户数据安全，希望感兴趣的用户多提宝贵意见，与OSRC团队一起建设一个良好的社区环境。

## 在OSRC社区管理您的应用

如果上面的操作顺利，仔细看mvn命令的输出，已经可以看到您发布应用的链接地址，恭喜您已经发布了一个应用到OSRC社区。

当应用发布后，还不能通过OSRC社区检索到，这时候您只能在"我的应用"里找到刚刚发布应用，如图:

![我的应用](/assets/img/my-app.png)

> 应用要在页面发布后才能被其他人搜索到，页面的发布=分享

![我的应用](/assets/img/share-app.png)

> 当您在页面发布后，将不能再重新用'mvn clean install'发布相同版本的应用，可以修改版本号再次发布一个新版本，或者在页面取消发布，然后更新当前版本应用。

----

好了，如上操作顺利，您成功发布了一个应用到OSRC，您是不是特别期待运行起来看看效果，很荣幸OSRC提供了这个能力，[let's run it！](/osrc-runtime.html)