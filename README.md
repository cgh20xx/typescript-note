# webpack5 TypeScript template

## 安裝 webpack 5
```
npm i webpack -D
```

## 新增 webpack.config.js

文件：https://webpack.js.org/

可為 output.filename 進階設置 palceholder 
- [name]：對應 entry name
- [chunkhash]：對應當前 entry 所產生的 hash

Webpack 的 hash 有三種：
1. hash(已棄用)：每次建構都會生成新的 hash。和整個專案有關，只要有文件更改就會改變 hash。
2. chunkhash：和 webpack 打包生成的 chunk 相關。每一個 entry 都會有不同的 hash。
3. contenthash：和單文件內容有關。指定文件的內容發生改變，就會改變 hash。

```js
const path = require('path');

module.exports = {
  // entry: './src/index.js', // 預設 entry name 為 main
  entry: {
    app: './src/index.ts', // 設置 entry name 為 app
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    // filename: 'bundle.js', // 基本設置
    filename: '[name].[chunkhash].bundle.js', // 進階設置
    clean: true, // 在生成文件之前清空 output 目錄。
  },
};
```

output.clean 補充：webpack 5.20.0 之後不再需要 CleanWebpackPlugin

output.clean 文件：https://webpack.docschina.org/configuration/output/#outputclean

## package.json 新增 script 指令
webpack 會提示開發模式和生產模式需加上對應 --mode
```json
{
  "scripts": {
    "dev": "webpack serve --mode=development",
    "build": "webpack --mode=production"
  }
}

```

## 安裝及設定 devServer 
此為執行 webpack serve 依賴的套件

文件：https://webpack.js.org/configuration/dev-server/

```
npm i webpack-dev-server -D
```

webpack.config.js
```js
const path = require('path');

module.exports = {
  //...
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 9000,
  },
};
```
1. 設定開發伺服器的靜態資源目錄為 public 及 port 等相關資訊。
2. 在 public 手動新增 index.html 並加入 script src
3. 此路徑需和 webpack.config.js 裡的 output.filename 相同。
    ```html
    <script src="./bundle.js"></script>
    ```
## 安裝及設定 css-loader 和 style-loader
讓 webpack 可以讀取 css 檔案並插入到 html 裡

文件：https://webpack.js.org/loaders/css-loader/#root

```
npm i css-loader style-loader -D
```

index.js
```js
import './css/index.css';
```

webpack.config.js
```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"], // 有順序性的
      },
    ],
  },
};
```

## 安裝及設定 html-webpack-plugin
此套件可讓 webpack 打包時，依照指定的 html 模版產生 html 檔，並且自動加入 hash 過的 js css 路徑。
https://webpack.js.org/plugins/html-webpack-plugin/#root

```
npm i html-webpack-plugin -D
```

```js
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  ...
  plugins: [new HtmlWebpackPlugin()],
};
```

HtmlWebpackPlugin 文件：https://github.com/jantimon/html-webpack-plugin#options

可以設定 title、template 等參數
```js
module.exports = {
  ...
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Hello App',
      template: './src/template.html'
    })
  ]
}
```

template.html 動態插入 title
```html
<title><%= htmlWebpackPlugin.options.title %></title>
```

## 安裝及設定 mini-css-extract-plugin
此套件可將 css 提取出來為獨立的 .css 檔案

文件：https://webpack.js.org/plugins/mini-css-extract-plugin/#root

安裝 mini-css-extract-plugin
```
npm i mini-css-extract-plugin -D
```

webpack.config.js
```js
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  plugins: [new MiniCssExtractPlugin()],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
};
```
- plugins 新增 new MiniCssExtractPlugin()
- 將原本的 style-loader 替換為 MiniCssExtractPlugin.loader

設定 Plugin Options
```js
new MiniCssExtractPlugin({
  filename: '[name].[contenthash].css',
}),
```


## 安裝及設定 TypeScript
透過 ts-loader 讓 webpack 支援載入 .ts 並轉換為 .js

文件：https://webpack.js.org/guides/typescript/

安裝 typescript 及 ts-loader。若原本有安裝 babel 相關套件可以移除了。
```
npm install --save-dev typescript ts-loader
```

新增 tsconfig.json 並貼上以下代碼
```json
{
  "compilerOptions": {
    "outDir": "./dist/",
    "sourceMap": true,
    "noImplicitAny": true,
    "module": "es6",
    "target": "es5",
    "jsx": "react",
    "allowJs": true,
    "moduleResolution": "node"
  }
}
```

在 webpack.config.js 新增以下有關 typscript 設定
```js
const path = require('path');

module.exports = {
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  }
};
```


## 產生 source-map 方便 debug
在 webpack.config.js 新增以下設定。注意：生產模式不需要這個設定
```js
{
  devtool: 'source-map',
}
```

## 設定 asset-modules 讓 js 能載入圖片資源
取代 webpack4 的 raw-loader url-loader file-loader，在 webpack5 統一用 asset-modules 來處理。

文件：https://webpack.js.org/guides/asset-modules/

首先在 index.js import 一張圖片
```js
import ball from './images/ball_0.png';
// 若圖片小於 8kB 會被轉為 base64 格式
const imgBall = document.createElement('img');
imgBall.src = ball;
document.body.appendChild(imgBall);
```

在 webpack.config.js 新增一個 rules
```js
module.exports = {
  //...
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/i,
        type: 'asset', // 還有其它三種 type
      },
    ],
  },
};
```

## 設定 resolve.alias

設定 import 或 require 的別名，讓導入模組變的更簡單，常使用 @ 來替代 ./src

文件：https://webpack.docschina.org/configuration/resolve/#resolvealias

webpack.config.js 為 ./src 設定一個別名 @
```js
const path = require('path');

module.exports = {
  //...
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
};
```

index.js 修改先前導入的資源路徑
```diff
-import './css/index.css';
-import ball from './images/ball_0.png';
-import coin from './images/coin.png';
+import '@/css/index.css';
+import ball from '@/images/ball_0.png';
+import coin from '@/images/coin.png';
```

index.css 修改先前導入的資源路徑
```diff
.ball_1 {
  width: 100px;
  height: 100px;
- background-image: url('../images/ball_1.png');
+ background-image: url('@/images/ball_1.png');
}
```

## 安裝及設定圖片壓縮套件 image-minimizer-webpack-plugin 

建議圖片壓縮套件只用在 production 環境(注意：此套件中文文件有很多錯誤不要看，看英文版就好)

文件：https://webpack.js.org/plugins/image-minimizer-webpack-plugin/


image-minimizer-webpack-plugin 需搭配 imagemin 這個圖片壓縮套件下載使用
```
npm install image-minimizer-webpack-plugin imagemin --save-dev
```

imagemin 套件又有支援各種圖片格式，假設我要壓縮 gif、jpeg、png 則需再下載相關套件。(以下套件為 lossy 有損壓縮，若要 lossless 無損壓縮請參考官網另外下載)

```
npm install imagemin-gifsicle imagemin-mozjpeg imagemin-pngquant --save-dev
```

webpack.config.js
```js
module.exports = {
  ...
  module: {
    rules: [
      ...
      {
        test: /\.(jpe?g|png|gif)$/i,
        type: 'asset', // 還有其它三種 type
      },
    ],
  },
  optimization: {
    minimizer: [
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.imageminMinify,
          options: {
            plugins: [
              ['gifsicle'],
              ['mozjpeg', { quality: 90 }],
              // https://www.npmjs.com/package/imagemin-mozjpeg
              ['pngquant', { speed: 4 }],
              // https://www.npmjs.com/package/imagemin-pngquant
            ],
          },
        },
        // Disable `loader` 禁用 loader 之後，預設 8KB 以上的檔案才會進來被 ImageMinimizerPlugin 處理
        loader: false,
      }),
    ],
  },
};
```
