# 前端开发环境

> node + js

## 安装及操作

``` bash  

# 安装依赖
npm install

# 在 localhost:1217 运行一个自动刷新的web服务用于边写边调
npm start

```
  
## 目录结构
```
+-- bin/  gulp编译打包热加载配置文件
| 
+-- data.json/  测试数据
| 
+-- Dockerfile  docker文件
| 
+-- docker-compose.yml  docker-compose文件
| 
+-- package.json  npm配置文件
| 
+-- .gitignore  git提交忽略配置
| 
+-- app/  原文件（组件，js等），主要开发目录
| 
|   +-- index.html  主页html
|   | 
|   +-- static/  ss/js/images
|   |   | 
|   |   +-- index.js  js文件
|   |   | 
|   |   +-- Miraclemin.js  incu-webview js
|   |   | 
|   |   +-- index.scss  scss开发文件
|   |   | 
|   |   +-- index.css  scss编译后文件
|   |   | 
|   |   +-- *.svg  图片资源
```  
  
## 部署  

* 使用Apache反向代理 + Node.js 部署
```bash 
cd /data/guide
# 从远程仓库获取分支 
git pull origin master
# 安装依赖
cnpm install
```
安装pm2进程守护程序,代码即可在后台启动 (pm2 具有性能监控、自动重启、负载均衡等功能)
```bash  
# 全局安装
npm install -g pm2
# 启动进程
pm2 start ./bin/www --watch
# 查看进程状态
pm2 list  
```

接着在Apache (httpd2.4)
配置httpd.conf文件，在文件后添加
```
LoadModule proxy_module modules/mod_proxy.so
LoadModule proxy_http_module modules/mod_proxy_http.so
LoadModule proxy_ftp_module modules/mod_proxy_ftp.so
LoadModule proxy_connect_module modules/mod_proxy_connect.so


<VirtualHost *:80>
ServerName welcome.nyaasu.top
 
ProxyRequests off
 
<Proxy *>
Order deny,allow
Allow from all
</Proxy>
 
<Location />
ProxyPass http://localhost:1217/
ProxyPassReverse http://localhost:1217/
</Location>
</VirtualHost>
```
然后重启服务，即可实现访问

```
service httpd stop
service httpd start
```

注：使用Ubuntu的apt-get安装的是Apache2，不是httpd2.4. 在CentOS上可通过``` yum install httpd ```安装，而Ubuntu上可以通过在官网上下载源码，或者使用Oneinstack一键安装工具安装。

参考链接：

1.[Apache设置反向代理访问 NodeJs 网站](https://blog.csdn.net/cen_cs/article/details/50663175)

2.[PM2实用入门指南](https://www.cnblogs.com/chyingp/p/pm2-documentation.html)

3.[Ubuntu LTS 16.04 编译安装配置Apache](https://www.centos.bz/2017/10/ubuntu-lts-16-04-%E7%BC%96%E8%AF%91%E5%AE%89%E8%A3%85%E9%85%8D%E7%BD%AEapache/)

4.[OneinStack - 一键PHP/JAVA安装工具](https://oneinstack.com/)


* 使用Docker部署（2017的方法，可能属个人原因，经部署跑不起来）  

```bash
git pull
docker-compose build
docker-compose up -d
```  

### 测试-Chrome模拟设备  
  
>Nexus 5X - 用于模拟16:9的显示屏  
>iPhone 6/7/8 - 用于模拟18:9的全面屏  
>(考虑到在南大家园打开的页面视口偏小故采用以上机型)  

## 使用的框架和模块  
>jQuery - 1.10.2  
>jquery.mobile - 1.4.5  
>Node.js  
>>body-parser: ~1.15.1  
>>cookie-parser: ~1.4.3  
>>debug: ~2.2.0  
>>ejs: ~2.4.1  
>>express: ~4.13.4  
>>morgan": ~1.7.0  
>>serve-favicon: ~2.3.0  
   
未完待续
