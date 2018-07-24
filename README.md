# 前端开发环境

> node + js

## 安装及操作

``` bash
# 安装依赖
npm install

# 在 localhost:7003 运行一个自动刷新的web服务用于边写边调
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

##测试

no

未完待续
