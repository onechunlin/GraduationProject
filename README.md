# 本科毕业设计

## 项目简介
优化可视化库Vega，将数据流的一部分计算分给后端，因为后端的计算能力大于前端，所以希望在处理大量数据时能够较快的实现数据可视化。在后端请求出错时，会使用前端计算数据流。

## 项目使用

本项目后端采用Node.js开发，所以需要运行本项目需要先进入server文件夹，使用Node环境运行`server.js`开启后端，然后根据需要在`myvega.js`中的`function parse$5()`中更改相应的后端地址即可正常的使用（默认为:`http://localhost:3000`）

## 目录简介

`doc文件夹：`存放毕业论文的存档以及文档分析，毕业论文等将不再同步至github。

`server文件夹：`后端服务器文件夹，其中node_modules文件夹已忽略，所以运行需要自行安装express和body-parser模块

`myvega.js: ` 修改后的vega.js

`vega.js: ` 5.9.1版本的vega.js

`test.html:`测试所用网页