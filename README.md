# 2018南昌大学新生迎新指南

## demo演示地址  
[点击链接](https://2018s.nyaasu.top)  


## 开发环境  
> 前后端：原生js + Node.js  
> 部署：Docker

## 部署

```bash
$ git clone ssh://git@git.ncuos.com:8082/Nyaasu/welcome-guide-2019.git

$ cnpm install

# git pull

$ docker-compose build

$ docker-compose up -d

# 随后，用nginx反向代理本地1218端口即可
```

### （测试备用）如果不使用 Docker 而使用 pm2 部署

```bash
$ cnpm install -g pm2

$ sudo pm2 start ./bin/www --name "2019welcome" --watch
# 此时需要反向代理的端口为：7777

# 查看进程状态
pm2 list  
```

## 本地开发

``` bash
# 安装依赖
$ cnpm install

# 在 localhost:7777 运行一个自动刷新的web服务用于边写边调
$ npm start

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
|
------------------------
```  
  
参考链接：

1.[Apache设置反向代理访问 NodeJs 网站](https://blog.csdn.net/cen_cs/article/details/50663175)

2.[PM2实用入门指南](https://www.cnblogs.com/chyingp/p/pm2-documentation.html)

3.[Ubuntu LTS 16.04 编译安装配置Apache](https://www.centos.bz/2017/10/ubuntu-lts-16-04-%E7%BC%96%E8%AF%91%E5%AE%89%E8%A3%85%E9%85%8D%E7%BD%AEapache/)

4.[OneinStack - 一键PHP/JAVA安装工具](https://oneinstack.com/)


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
