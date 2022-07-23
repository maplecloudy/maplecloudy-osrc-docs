---
title: OSRC应用
description: 这里将引导您部署一个OSRC后端应用，让我们开始吧!
---

> OSRC 提供了CI相关的工具，目前支持JAVA后端应用的发布，CI工具以开源方式提供，[OSRC 开发者工具](https://github.com/maplecloudy/maplecloudy-osrc-tools) ，欢迎感兴趣参与贡献，OSRC正在努力提供各种编程语言的支持！

# JAVA应用

下面介绍下如何发布JAVA部署到OSRC。

## 打包和发布工具

OSRC的打包工具是与开发工具集成提供的，不需要额外配置，这是OSRC工具本身的特性，也是**OSRC CI**设计的原则。

目前提供JAVA发布工具是Maven的一个插件（Plugin），插件借签了SpringBoot的打包和使用方式，从SpringBoot maven plugin修改而来，我们在打包过程增加了一些Mojo，从项目配置中组织信息，形成OSRC应用的描述（Manifest）文件，以便OSRC 云原生系统能够执行应用。  
OSRC主张从**源码**直接组装成**制品级别的应用**，OSRC的应用主页也提供必要的编辑功能，让应用更具制品特性，便于分享。

## 使用插件  

在项目的pom.xml中加入插件坐标：

```xml

 <plugin>
  <groupId>com.maplecloudy.osrc</groupId>
  <artifactId>maplecloudy-osrc-maven-plugin</artifactId>
  <version>1.0.2</version>
  <executions>
      <execution>
          <goals>
              <goal>repackage</goal>
              <!-- enable upload app -->
              <goal>install-osrc-app</goal>
          </goals>
      </execution>
  </executions>
</plugin>

```

## 定义程序入口

OSRC插件通过具备Main函数的Class的`Annotation`来识别程序入口，以及该程序入口的类型：`Service` 或 `Task`.

> 一个应用可以具备一个`Service`类型的入口和多个`Task`类型的入口。

**OSRC Maven Plugin**插件识别三种`Annotation`：

- `@SpringBootApplication` 会被识别为`Service`类型的程序入口，即使用`SpringBoot`开发时我们天然支持无需入口配置。
- `@Service` 会被识别为`Service`类型的程序入口
- `@Task` 会被识别为`Task`类型的程序入口

> 后面两个`Annotation`为了避免侵入性，需要使用的时候，用户可以在自己的项目中添加，注意Package名字要与下面代码一直，代码如下：

- Service Annotation

```java
package com.maplecloudy.osrc.app.annotation;

public @interface Service {
  
}
```

- Task Annotation

```java
package com.maplecloudy.osrc.app.annotation;

public @interface Task {
  
}
```

## 编译和上传应用到OSRC

在安装好插件以及确认程序入口正确之后，就可以上传应用了，在项目目录下执行:

```bash
# 编译和发布
mvn clean install

# 如果希望编译的时候忽略发布到OSRC, 命令如下
mvn clean install -Dinstall.osrc.skip=true

```

> 在第一次发布时候，Maven发布过程会要求您登陆到OSRC，这时候你需要先注册一个[OSRC](https://www.osrc.com/)账号，然后根据命令提示输入账号和密码登陆。
> 如果你使用过Pages发布的'osrc login'进行登陆，那么两个登陆是授权是通用的。
> 每次登陆OSRC授权会持续2个小时，如果你想在一个设备上结束授权，可以手动删除'~/.osrc'文件，OSRC正在重新评估授权的方式，以便用户更好的管理授权，保证用户数据安全，希望感兴趣的用户多提宝贵意见，与OSRC团队一起建设一个良好的社区环境。

> Maven发布过程中需要您配置此应用(`App`)发布关联到哪个项目(`Project`)中，您可以输入新的项目名称或者已存在的项目。   

## 在OSRC社区管理您的应用  

如果上面的操作顺利，仔细看mvn命令的输出，已经可以看到您项目的链接地址，恭喜您已经上传了一个应用到OSRC社区。

当应用上传到OSRC后，还不能通过OSRC社区检索到，这时候您可以登录OSRC工作台在指定项目下找到该应用，如图:

![my_app](/assets/img/my-app.png)

> 应用要在所属项目页面Publish发布后才能在社区展示。 

![share_project](/assets/img/share-project.png)

## 应用部署启动   

上面的操作是将应用制品包上传到OSRC，现在我们启动此应用，使其真正运行起来，提供我们的开源产品服务能力。  

1. 进入OSRC控制台，找到我们刚刚上传的项目应用。  

![my_app](/assets/img/my-app.png)  

2. 点击进入此应用，设置启动应用所需资源，环境等信息。

![set_param](/assets/img/set-param.png)  

3. 启动应用实例。  

![run_app](/assets/img/run-app.png)

4. 进入运行时查看实例信息，如实例运行时状态，运行日志等。  

![instance1](/assets/img/instance1.png)  

![instance2](/assets/img/instance2.png)  

----


如上操作顺利，您成功上传了一个后端应用服务到OSRC，一般我们的开源产品都有前端页面展示，让我们部署前端页面链接后端服务，展示出真正的可视化产品形态！[Let's Run It！](/osrc-pages.html)
