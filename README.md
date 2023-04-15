# URL Shortener 短網址產生器

![image about URL Shortener](https://github.com/jolly01008/URL_Shortener/blob/main/短網址產生器.png)

## 介紹

將過長的網址縮成短短的「短網址產生器」

## 功能

- 輸入網址轉換成短網址
- 點擊按鈕複製網址
- 透過短網址轉址到原本網址
- 可以點擊圖片回首頁

## 開始使用

1. 請先確認有安裝 node.js 與 npm

2. 將專案 clone 到本地

3. 開啟終端機(Terminal)，進入存放此專案的資料夾

```
cd URL_Shortener
```

4. 安裝所需套件

```
npm i express@4.17.1 express-handlebars@5.3.3
```

5. 安裝 mongoose

```
npm i mongoose@5.9.7
```

6. 安裝 nodemon (如已安裝可跳過此步驟)

```
npm install -g nodemon
```

7. 啟動伺服器，執行 app.js 檔案

```
npm run dev
```

8. 當 terminal 出現以下字樣，表示伺服器已啟動

> Express is running on http://localhost:3000
>
> mongoDB connect success!

## 開發工具

- Node.js 14.16.0
- Express 4.17.1
- Express-Handlebars 5.3.3
- Bootstrap

- MongoDB
- mongoose 5.9.7

- dotenv 16.0.3
