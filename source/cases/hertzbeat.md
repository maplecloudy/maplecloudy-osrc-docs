---
title: hertzbeat 项目部署
description: 这里将引导您部署hertzbeat，让我们开始吧!
---
## HertzBeat 赫兹跳动在开源运行时OSRC部署流程      

### HertzBeat介绍   

> 易用友好的监控告警系统。

![tan-cloud](https://cdn.jsdelivr.net/gh/dromara/hertzbeat@gh-pages/img/badge/web-monitor.svg)
![tan-cloud](https://cdn.jsdelivr.net/gh/dromara/hertzbeat@gh-pages/img/badge/ping-connect.svg)
![tan-cloud](https://cdn.jsdelivr.net/gh/dromara/hertzbeat@gh-pages/img/badge/port-available.svg)
![tan-cloud](https://cdn.jsdelivr.net/gh/dromara/hertzbeat@gh-pages/img/badge/database-monitor.svg)
![tan-cloud](https://cdn.jsdelivr.net/gh/dromara/hertzbeat@gh-pages/img/badge/os-monitor.svg)
![tan-cloud](https://cdn.jsdelivr.net/gh/dromara/hertzbeat@gh-pages/img/badge/custom-monitor.svg)
![tan-cloud](https://cdn.jsdelivr.net/gh/dromara/hertzbeat@gh-pages/img/badge/threshold.svg)
![tan-cloud](https://cdn.jsdelivr.net/gh/dromara/hertzbeat@gh-pages/img/badge/alert.svg)

**官网: [hertzbeat.com](https://hertzbeat.com) | [tancloud.cn](https://tancloud.cn)**

> [HertzBeat赫兹跳动](https://github.com/dromara/hertzbeat) 是由[Dromara](https://dromara.org)孵化，[TanCloud](https://tancloud.cn)开源的一个支持网站，API，PING，端口，数据库，操作系统等监控类型，拥有易用友好的可视化操作界面的开源监控告警项目。  
> 提供了对应的 **[SAAS版本监控云](https://console.tancloud.cn)**，中小团队和个人无需再为了监控自己的网站资源，而去部署一套繁琐的监控系统，**[登录即可免费开始](https://console.tancloud.cn)**。     
> HertzBeat 支持[自定义监控](https://hertzbeat.com/docs/advanced/extend-point) ,只用通过配置YML文件我们就可以自定义需要的监控类型和指标，来满足常见的个性化需求。   
> HertzBeat 模块化，`manager, collector, scheduler, warehouse, alerter` 各个模块解耦合，方便理解与定制开发。       
> HertzBeat 支持更自由化的告警配置(计算表达式)，支持告警通知，告警模版，邮件钉钉微信飞书等及时通知送达          
> 欢迎登录 HertzBeat 的 [云环境TanCloud](https://console.tancloud.cn) 试用发现更多。          
> 正在快速迭代中，欢迎参与加入一起共建项目开源生态。

> `HertzBeat`的多类型支持，易扩展，低耦合，希望能帮助开发者和中小团队快速搭建自有监控系统。

----   

### 在开源运行时社区的部署过程

1. 注册开源运行时社区账户 osrc.com

进入网站 osrc.com 登录注册，购买需要的云服务器或Serverless  

2. 本地安装osrc开发者工具  
```
# clone maplecloudy-osrc-tools to local
git clone https://github.com/maplecloudy/maplecloudy-osrt-tools.git
# 下载后通过maven在本地安装
mvn clean install
# 进入osrc-cli目录安装cli
npm install
npm link
# 支持 osrc 看cli是否安装成功
osrc 
```

4. 部署依赖服务-MYSQL和TDengine    

> HertzBeat最少依赖于 关系型数据库[MYSQL5+](https://www.mysql.com/) 和 时序性数据库[TDengine2+](https://www.taosdata.com/getting-started)    
> 我们需要将依赖服务部署到公有云上，即数据存储自己保存，计算运行在开源运行时社区，保证数据安全性。     

###### 部署MYSQL   
- docker安装MYSQl    
   `docker run -d --name mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=123456 mysql:5.7`   
- 创建名称为hertzbeat的数据库    
- 执行位于项目仓库/script/sql/目录下的数据库脚本 [schema.sql](https://gitee.com/dromara/hertzbeat/raw/master/script/sql/schema.sql)    

详细步骤参考 [依赖服务MYSQL安装初始化](https://hertzbeat.com/docs/start/mysql-init)

###### 部署TDengine     
- docker安装TDengine         
   `docker run -d -p 6030-6049:6030-6049 -p 6030-6049:6030-6049/udp --name tdengine tdengine/tdengine:2.4.0.12`   
- 创建名称为hertzbeat的数据库   

详细步骤参考 [依赖服务TDengine安装初始化](https://hertzbeat.com/docs/start/tdengine-init)

2. 拉取hertzbeat项目代码，git切换到`osrc`分支     

[github仓库](https://github.com/dromara/hertzbeat) [gitee仓库](https://github.com/dromara/hertzbeat)
```
git clone https://github.com/dromara/hertzbeat.git   
git checkout osrc  
```
3. 配置MYSQL-TDengine服务连接   

修改位于 `hertzbeat/manager/resources/application.yml` 的配置文件        
需要替换里面的MYSQL服务和TDengine服务参数，IP端口账户密码    
具体替换参数如下:   
   ``` 
   spring.datasource.url
   spring.datasource.username
   spring.datasource.password
   
   warehouse.store.td-engine.url
   warehouse.store.td-engine.username
   warehouse.store.td-engine.password
   
   ```

4. 注册OSRC账户，上传部署hertzbeat后端服务      

进入网站 https://osrc.com , 注册用户      
在本地hertzbeat项目下执行 `mvn clean intall` 部署上传到osrc       
注意交互控制台会提示输入账户密码登录。   

5. 启动hertzbeat后端服务     

进入网站 https://os.osrc.com, 找到project -heartbeat-app
![hertz.png](https://oss.osrc.com/wiki/img/1658318580886_hertz.png)

6. 构建前端项目   

在本地hertzbeat项目下 `web-app` 目录下执行 `yarn build`     

7. 上传部署hertzbeat前端服务  

在本地hertzbeat项目下 `web-app` 目录下执行 `osrc deploy`  

8. 配置前端代理     

进入网站 https://osrc.com, 个人中心 -> 我的pages -> 代理配置      
配置前端调用接口流量走刚刚部署的后台服务      
![hertz1.png](https://oss.osrc.com/wiki/img/1658318910036_hertz1.png)    

9. 部署完成，发布应用    
部署OK，点击page页面连接即可使用服务！     


