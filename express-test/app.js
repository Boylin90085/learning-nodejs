const express = require('express')
const app = express()

const port = 3000
app.listen(port)

app.get('/', function (req, res) {
  res.send(`<!DOCTYPE html>
              <html lang="en">
              <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta http-equiv="X-UA-Compatible" content="ie=edge">
                <title>Document</title>
              </head>
              <body>
                <h1>
                  Hello World
                </h1>
              </body>
              </html>`)
})

app.use(function (req, res, next) {
  console.log('有人進來了!')
  next()
})

app.get('/user/:name', function (req, res) {
  kk()
  res.send(`<!DOCTYPE html>
              <html lang="en">
              <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta http-equiv="X-UA-Compatible" content="ie=edge">
                <title>Document</title>
              </head>
              <body>
                <h1>
                  ${req.params.name}在尋找${req.query.q}最多${req.query.limit}筆
                </h1>
              </body>
              </html>`)
})

app.get('/user/edit-photo', function (req, res) {
  res.send(`<!DOCTYPE html>
              <html lang="en">
              <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta http-equiv="X-UA-Compatible" content="ie=edge">
                <title>Document</title>
              </head>
              <body>
                <h1>
                  編輯大頭貼
                </h1>
              </body>
              </html>`)
})

app.use(function (req, res, next) {
  res.status(404).send('抱歉，找不到您的頁面')
})

app.use(function (err, req, res, next) {
  console.error(err)
  res.status(500).send('OOPS 程式發生了些問題，請稍後再試')
})
