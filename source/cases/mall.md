---
title: Mall 项目部署
description: 这里将引导您部署mall，让我们开始吧!
---
## mall项目在osrc上的便捷部署
### 后台项目mall-admin部署

#### 1. clone代码

```
  git clone https://github.com/macrozheng/mall.git
```

#### 2. 更新mysql,redis等配置信息 

![](https://osrtm.oss-cn-beijing.aliyuncs.com/wiki/img/1641292942447_image-20220104152646042.png)

#### 3.引入编译插件 

* pom文件中引入maplecloudy-osrt-maven-plugin进行编译

  ```
  <plugin>
          <groupId>com.maplecloudy.osrt</groupId>
          <artifactId>maplecloudy-osrt-maven-plugin</artifactId>
          <version>1.1.0-SNAPSHOT</version>
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
#### 4.执行mvn clean install
* target文件目录下会生成以"osrc-app"结尾的jar包  
		![](https://osrtm.oss-cn-beijing.aliyuncs.com/wiki/img/1641292974008_image-20220104154123403.png)
 * 同时,app会上传至您在osrc的个人的账户下  
![mall1.png](https://oss.osrc.com/wiki/img/1658233573018_mall1.png)
 * 在程序入口处点击运行,会生成此app对应的运行时 
![mall2.png](https://oss.osrc.com/wiki/img/1658233725156_mall2.png)
* 配置swagger接口文档地址
![mall3.png](https://oss.osrc.com/wiki/img/1658233866014_mall3.png)

* 点击endpoint,可以直接查看接口文档

![mall4.png](https://oss.osrc.com/wiki/img/1658233978351_mall4.png)
![mall7.png](https://oss.osrc.com/wiki/img/1658234514153_mall7.png)

---
### 前端项目mall-admin-web部署
#### 1.clone代码
```
git clone https://github.com/macrozheng/mall-admin-web.git
```

#### 2. 修改 config/prod.env.js,可以自定义path,如"api"
![](https://osrtm.oss-cn-beijing.aliyuncs.com/wiki/img/1641293265838_image-20220104160419513.png)

#### 3.构建前端项目

* yarn
* yarn build

运行成功后,会生成dist目录

#### 4. 安装osrc-cli 插件 

 * 执行登录命令(可选-如果不登录,默认读取本地.osrc文件中的配置信息)

      ```
      osrc login
      ```
    ![](https://osrtm.oss-cn-beijing.aliyuncs.com/wiki/img/1641293280864_image-20220104160901408.png)

#### 5.deploy
 * 执行上传命令osrc deploy,dist目录会自动上传至当前登录账户下,同时生成page domain  

 deploy info: 

 ![](https://osrtm.oss-cn-beijing.aliyuncs.com/wiki/img/1641293294461_image-20220104161108446.png)

在osrc平台上生成的pages信息:

![mall5.png](https://oss.osrc.com/wiki/img/1658234220149_mall5.png)
      
 * 通过浏览器访问page页面的domain,将看到登录页面

      ![](https://osrtm.oss-cn-beijing.aliyuncs.com/wiki/img/1641293332342_image-20220104161500346.png)

  #### 6.配置代理
   * 根据config/prod.env.js中配置的的BASE_API,更新代理配置
      * 这里的代理目标,目前支持两种类型:
        * 运行时-在osrc平台启动的runtime
        * 地址-任何一个mall后端服务的完整url地址,这里我们配置为刚刚启动后台应用时,所生成的runtime domain,
![mall6.png](https://oss.osrc.com/wiki/img/1658234364348_mall6.png)

  * 大功告成,可以愉快的访问了

  ![](https://osrtm.oss-cn-beijing.aliyuncs.com/wiki/img/1641293379469_image-20220104162354621.png)



输入demo的账号和密码:  
  * admin  
  * macro123

## mall项目在osrc平台的发布总结:
后续对应用的更新,无论是后端还是前端的应用,只需要分别执行**步骤4**和**步骤5**即可,开发运维效率大幅提升.

另外,通过上面的演示大家应该也能体会到,osrc天然的支持前后端**多版本的部署**,不同版本的前后端之间,可以很方便的进行动态代理配置,并能实时看到后台服务的log信息.
