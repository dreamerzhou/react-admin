# react-admin
react电商后台管理系统
# react-admin
raect电商后台管理系统 增删改查 登录注册

# webpack.config.js

第一步，配置babel

`@babel/core`   `@babel/preset-react` `@babel/preset-env`

`babel-loader`

`html-webpack-plugin`

第二步，jsx语法处理 配置

`react`  `react-dom`

第三步，css 配置

`style-loader`  `css-loader`  `node-sass` `sass-loader` 

`extract-text-webpack-plugin@next`

第四步，图片处理 配置

`file-loader` `url-loader`

第五步，字体处理 配置

`font-awesome`

第六步，自带插件 配置

webpack自带 
`webpack.optimize.CommonsChunkPulgin({})` 已过时

` config.optimization.splitChunks({})`  替代

第七步，路由 配置

`react-router-dom`

第八步，组件引用 配置
`resolve`  `alias`

第九步，Boostrap 配置

CDN引入 `bootstrap`  `font-awesome`

`https://webthemez.com/demo/insight-free-bootstrap-html5-admin-template/ui-elements.html`

第十步，

# 依赖

## babel 6.0以下版本

`babel-core`  `babel-preset-react`   `babel-preset-env`

webpack中设置为 `preset: ['env', 'react']`

## babel 7.0以上版本

`@babel/core`  `@babel/preset-react`  `@babel/preset-env`

webpack中设置为 `preset: [ '@babel/env', '@babel/react']`

`https://www.cnblogs.com/jiebba/p/9618930.html`

## extract-text-webpack-plugin

webpack 3. 与 extract-text-webpack-plugin 3.

webpack 4. 与 extract-text-webpack-plugin@next 4.0beta版



`https://github.com/T-Macgrady/mmall-m`

`https://www.imooc.com/article/24738`