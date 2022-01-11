## 概述
我们目前支持基于java语言开发的应用,jar包或war包的形式.对于别的语言的支持,还在开发中.
## app的生成规则
换言之,怎么判断本次部署的app和上次部署的app为同一个或不同的app呢?
我们通过`username+bundle+version`的方式进行判断.
### username
username即为您在osrc平台上注册时的username
### bundle
bundle英文翻译为`捆绑、系列`的意思.  
拿maven来举例说明,对于maven而言,groupId和artifactId被称之为`坐标`,其是为了保证项目唯一性而提出的.
对于maven项目,我们这里的bundle就会采用groupId+artifactId的方式来定义,将来bundle会支持用户的自定义.
### version
对于java程序来说,version即为pom文件中指定的version

综上,假如应用进行了两次deploy操作,您的`username+bundle+version`一样,那么这两次的deploy我们会认为是同一个app,且前一次app的属性信息会被后一次覆盖,如`description`等.如果`username+bundle+version`不同,例如version两次分别为1.0.0和1.0.1,那么这两次deploy就会生成两个独立的app,您可在`个人中心-我的应用`中看到这两个app.
## app的编辑
在app发布前,您可对app的属性信息进行编辑,例如上传一些截图,项目的来源(github/gitee/...)等.
## app的发布
deploy上来的app默认是私有的,也即仅作者自己可见,他人搜索应用时将不会检索到.只有当app进行了发布,那么所有人皆可见,且能被检索到.

注意:
当app处于发布状态时,那么如果此app再次deploy时会失败.您可以取消发布再进行deploy.

## app的deploy
注释掉其他的maven-plugin并引用osrt的plugin依赖
  ```
  <plugin>
          <groupId>com.maplecloudy.osrt</groupId>
          <artifactId>maplecloudy-osrt-maven-plugin</artifactId>
          <version>1.0.0-RELEASE</version>
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
  关于osrt plugin的详细使用,请参阅[maplecloudy-osrt-maven-plugin](https://github.com/maplecloudy/maplecloudy-osrt-tools/tree/master/maplecloudy-osrt-maven-plugin#readme)

  ## 程序入口
  这里程序入口的意思,即为程序中指定了main方法的class入口.
  对于一个app,我们将程序中的入口分为两种类型:service和task.
  对于jar包,使用了`@SpringBootApplication`或者`@Service`注解的class将被识别为service类型的入口,使用了`@Task`注解的class将被识别为task类型的入口.
  对于war包,默认程序中只能有一个main,所以采用默认的配置或者`@Service`皆可.

  如果使用`@Service`和`@Task`注解,需要在您的项目中手动进行创建,全类名
  ```
  service: @com.maplecloudy.osrt.app.annotation.Service 
  task: @com.maplecloudy.osrt.app.annotation.Task
  ```
  目前,一个app中,最多只能有一个service的类型的入口,但可以有多个task类型的入口.
  ## 关联的wiki
  新建wiki的时候,我们可以选择进行`关联`,之后在关联的实体的详情页就可以查阅到相关的wiki.