# 前端开发环境

> node + js

## 安装及操作

``` bash
# 安装依赖
npm install

# 在 localhost:1217 运行一个自动刷新的web服务用于边写边调
npm start

```

##目录结构
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
##部署

```bash
git pull
docker-compose build
docker-compose up -d
```

###测试-Chrome模拟设备
  
>Nexus 5X - 用于模拟16:9的显示屏  
>iPhone 6/7/8 - 用于模拟18:9的全面屏
>(考虑到在南大家园打开的页面视口偏小故采用以上机型)

##使用的框架和模块
>jQuery - 1.10.2
>jquery.mobile - 1.4.5
>jQuery UI
>Node.js
>>body-parser: ~1.15.1
>>cookie-parser: ~1.4.3
>>debug: ~2.2.0
>>ejs: ~2.4.1
>>express: ~4.13.4
>>morgan": ~1.7.0
>>serve-favicon: ~2.3.0
  
未完待续
