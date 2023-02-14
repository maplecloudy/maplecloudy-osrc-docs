---
title: '肇新智慧物业(Zhaoxin-pms) 项目部署'
metaTitle: '这里将引导您部署Zhaoxin-pms，让我们开始吧!'
metaDescription: '这里将引导您部署Zhaoxin-pms，让我们开始吧!'
sidebar_position: 6
sidebar_label: '肇新智慧物业 项目部署'
---
# 1.背景

虽然肇新智慧物业的作者是一位资深的程序员，技术方面的背景并未影响他在市场和行业发展的思考和远见。最近10年以来，互联网得到长足发展并广泛地改变传统行业，实际上进行了整个社会的数字化改造。但是仍然有很多企业应用没法得到满足，这些企业也没有足够的资金来专门建设IT系统，这样的市场需求广泛存在。肇新智慧物业的作者认为，这样的市场需求应该以标准化的应用系统来满足，肇新智慧物业系统正是针对物业行业完成的系统，大多数物业公司预算有限，但是肇新智慧物业系统提供标准化的物业管理功能，足以解决用户的主要诉求,帮助用户提高效益。

OSRC（开源运行时社区[osrc.com](https://osrc.com/)） 是基于云原生技术，让开源爱好者以运行时形态分享开源作品的社区服务。OSRC(开源运行时社区)致力于推动开源项目向更成熟方向发展，开源项目可以在OSRC社区中在线运行起来，运行起来的项目可以提供更鲜活的体验，从而为投身于开源的小伙伴提供助力。

## 肇新智慧物业介绍

![logo](https://osrtm.oss-cn-beijing.aliyuncs.com/wiki/img/1649833329546_logo-red.png)

《肇新智慧物业》是一个免费开源的基于java的物业管理系统。未来将涵盖停车、安保、客服、工单、收费、财务、办公自动化等模块，构建一个软硬件一体的智慧物业解决方案。

## 产品蓝图

![产品蓝图](https://osrtm.oss-cn-beijing.aliyuncs.com/wiki/img/1649833354922_0-11.png)

**官网: [zhaoxinms.com](http://zhaoxinms.com/)**

# 2. 在开源运行时社区的部署过程

下面描述一下系统在 OSRC 的部署过程。

## step 1：获取代码

首先从 Gitee 获取代码 :  [gitee.com](https://gitee.com/fanhuibin1/zhaoxinpms) :

        git clone https://gitee.com/fanhuibin1/zhaoxinpms

## step 2:分析代码

项目是模块化的， 各个模块都有单独路径，主程序在 zhaoxinwy-admin 下，前端在web-app下。因此要先在项目主目录下编译，然后在 zhaoxinwy-admin 下编译。

## step 3: 后台部署

### 1. 配置 Database 资源

项目使用mysql数据库（数据库资源在 sql 目录下），pms 和 jmreport 两个 database

#### 1.1. 配置 pms 数据库

1. 创建Database pms
2. 按要求执行DDL(pms0.9.1.sql、workflow_view.sql)，创建、配置数据库对象。

![配置 pms 截图](https://osrtm.oss-cn-beijing.aliyuncs.com/wiki/img/1649830037230_0-1.PNG)

#### 1.2. 配置 jmreport 数据库

1. 创建Database jmreport
2. 按要求执行DDL(jmreport.sql)，创建、配置数据库对象。

![配置 jmreport 截图](https://osrtm.oss-cn-beijing.aliyuncs.com/wiki/img/1649830179425_0-2.PNG)

#### 1.3. 修改项目 mysql Database 配置

配置文件：  ..\\zhaoxinwy-admin\\src\\main\\resources\\application-druid.yml

        master:
                # url: jdbc:mysql://*******:3306/pms?useUnicode=true&characterEncoding=utf8&zeroDateTimeBehavior=convertToNull&useSSL=true&serverTimezone=GMT%2B8&nullCatalogMeansCurrent=true
                # username: ********
                # password: ********   

调整后的文件 [application-druid.yml](https://gitee.com/havithe/zhaoxinpms/blob/osrc/zhaoxinwy-admin/src/main/resources/application-druid.yml)

#### 1.3. 修改项目 redis 配置

配置文件：  ..\\zhaoxinwy-admin\\src\\main\\resources\\application.yml

          redis:
                # 地址
                host: ********
                # 端口，默认为6379
                port: 6379
                # 数据库索引
                database: 0
                # 密码
                password: 

调整后的文件 [application-druid.yml](https://gitee.com/havithe/zhaoxinpms/blob/osrc/zhaoxinwy-admin/src/main/resources/application.yml)

### 2. 配置后台服务

配置文件：  ..\\zhaoxinwy-admin\\src\\main\\resources\\application.yml

#### 2.1. 端口调整

        server:
                # 服务器的HTTP端口，默认为8080
                # port: 8080
                # 原 8080 端口 修改为随机端口
                port: ${random.int[10000,15000]} 

#### 2.1. 日志配置

        logging:
                level:
                com.zhaoxinms: info
                com.baomidou: info
                org.springframework: info

调整后的文件 [application-druid.yml](https://gitee.com/havithe/zhaoxinpms/blob/osrc/zhaoxinwy-admin/src/main/resources/application.yml)

### 3. 项目编译

#### 3.1. 主目录编译

项目根目录下执行：
mvn clean intall
![主目录编译成功 截图1](https://osrtm.oss-cn-beijing.aliyuncs.com/wiki/img/1649830380264_1.PNG)

#### 3.2. 本地试运行

..\\zhaoxinwy-admin\\target\>java -jar zhaoxinwy-admin-osrc-app.jar
试运行失败，因为数据库需要设置大小写不敏感，配置文件中的代码大小写和java不一致，调整数据库后，成功启动：

![admin 目录试运行 成功 截图1](https://osrtm.oss-cn-beijing.aliyuncs.com/wiki/img/1649830541764_5.PNG)

#### 3.3.部署到osrc

zhaoxinwy-admin 目录下pom.xml文件引入编译部署插件。

        <plugin>
                <groupId>com.maplecloudy.osrc</groupId>
                <artifactId>maplecloudy-osrc-maven-plugin</artifactId>
                <version>1.0.3</version>
                <executions>
                    <execution>
                        <goals>
                            <goal>repackage</goal>
                            <goal>install-osrc-app</goal>
                        </goals>
                    </execution>
                </executions>
        </plugin>

运行mvn clean install 部署到 osrc：[肇新智慧物业](https://www.maplecloudy.com/osrc/projects/project_805475842244272128)

### 4. 启动后台服务

4\.1. 启动服务
![zhaoxin1.png](https://oss.osrc.com/wiki/img/1658236067639_zhaoxin1.png)

4\.2.	查看日志

刷新日志，发现运行正常,并登记运行端口号
![zhaoxin2.png](https://oss.osrc.com/wiki/img/1658236249274_zhaoxin2.png)

## step 4: 前端部署

### 1. 调整配置

#### 1.1. 检查 packagejson

1\.1.1. 调整Name

        "name": "zhapxin-pms-ruoyi",

1\.1.2. packagejson要求
node版本要求：

        "engines": {
        "node": ">=8.9",
        "npm": ">= 3.0.0"
        },

### 2. 构建前端项目

#### 2.1. 依赖安装

        npm install --registry=https://registry.npm.taobao.org

![ npm install 截图 ](https://osrtm.oss-cn-beijing.aliyuncs.com/wiki/img/1649830948803_7.PNG)

#### 2.2. bulid

运行 npm run dev

编译遇到问题：

![问题 截图 ](https://osrtm.oss-cn-beijing.aliyuncs.com/wiki/img/1649830993033_8.PNG)

问题处理：

1. 删除目录下 node_modules目录和package-lock.json
2. 运行 npm i

![ npm i 截图 ](https://osrtm.oss-cn-beijing.aliyuncs.com/wiki/img/1649831104050_9.PNG)

3. zhaoxinpms\\pms-web\>npm run build:prod
   编译通过：
   ![ build:prod 截图 ](https://osrtm.oss-cn-beijing.aliyuncs.com/wiki/img/1649831115927_10.PNG)

### 3. 前端osrc部署

执行deploy命令osrc deploy

        osrc deploy

![ deploy 截图 ](https://osrtm.oss-cn-beijing.aliyuncs.com/wiki/img/1649831150003_11.PNG)

### 4. 配置代理

在OSRC 用户自己的page下找刚发布的项目

根据  ..\\pms-web.env.production 中配置的的 VUE_APP_BASE_API ,更新代理配置：

        # 肇新智慧物业/生产环境
        VUE_APP_BASE_API = '/prod-api'

![zhaoxin3.png](https://oss.osrc.com/wiki/img/1658237848808_zhaoxin3.png)
```
predicates:
  - Path=/prod-api/**
filters:
  - RewritePath=/prod-api/(?<segment>.*),/$\{segment}
```

### 5. 进入系统

打开链接，进入系统：系统链接
[系统链接](https://page-havithe-0bd77392564633f4dbc3b40968f30086.osrc.com/)

![系统截图1](https://osrtm.oss-cn-beijing.aliyuncs.com/wiki/img/1649831528394_0-7.PNG)

![系统截图2](https://osrtm.oss-cn-beijing.aliyuncs.com/wiki/img/1649831598399_0-8.PNG)

![系统截图3](https://osrtm.oss-cn-beijing.aliyuncs.com/wiki/img/1649831613119_0-9.PNG)

> 部署调整后的代码：[\[gitee.com\]](https://gitee.com/havithe/zhaoxinpms/tree/osrc/) OSRC 分支

# 3. 部署总结&建议

1. 有源码错误，需要调整 zhaoxinpms/zhaoxinwy-pms/src/main/java/com/zhaoxinms/base/util/Constants.java

2. 数据库大小写敏感问题，作者的部署文档提到要求设置mysql 大小写敏感参数，刚开始部署没写看到这个细节，走了弯路；但是从项目兼容或容错性角度来看，这个问题是代码中数据库对象名字和实际部署数据库对象名称不一致导致的，应该在代码和数据库定义层面控制保持一致统一，这样可以减少部署环节调整要素。

3. 前端编译过程中遇到问题，因为原始安装说明不够详细，经过摸索后，重新调整，并查看代码后编译通过，建议安装说明把版本和开发、生产环境的操作写的更详细，降低项目的传播成本。
