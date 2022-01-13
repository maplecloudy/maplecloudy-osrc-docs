---
title: 发布一个OSRC应用
description: 这个文档将引导您发布一个OSRC应用，让我们开始吧!
---

> OSRC 提供了CI相关的工具，目前支持JAVA应用的发布，CI工具以开源方式提供，[OSRC 开发者工具](https://github.com/maplecloudy/maplecloudy-osrt-tools),感兴趣的同学可以不同形式参与，OSRC正在努力提供各种编程语言的支持！

# JAVA应用

下面介绍下如何发布JAVA应用到OSRC。

## 打包和发布工具

OSRC的打包工具是与开发工具集成提供的，不需要额外配置，这是OSRC工具本身的特性，也是**OSRC CI**设计的原则。

目前提供JAVA发布工具是Maven的一个插件（Plugin），插件借签了SpringBoot的打包和使用方式，从SpringBoot maven plugin修改而来，我们在打包过程增加了一些Mojo，从项目配置中组织信息，形成OSRC应用的描述（Manifest）文件，以便OSRC 云原生系统能够执行应用。并且OSRC主张从**源码**直接组装成**制品级别的应用**，OSRC的应用主页也提供必要的编辑功能，让应用更具制品特性，便于分享。

插件下载地址[OSRC Maven Plugin](/assets/maplecloudy-osrt-maven-plugin-1.0.0-RELEASE.jar)。

- 安装插件

```bash

# 下载后通过maven在本地安装
mvn install:install-file -DgroupId=com.maplecloudy.osrt -DartifactId=maplecloudy-osrt-maven-plugin -Dversion=1.0.0-RELEASE -Dpackaging=jar -Dfile=maplecloudy-osrt-maven-plugin-1.0.0-RELEASE.jar

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

OSRC插件通过带有Main函数的Class带有的Annotation来识别程序入口，以及该程序入口的类型：Service 或 Task.

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

