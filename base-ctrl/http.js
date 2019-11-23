var http = require('http') // 載入 Node.js 內建的 http 模組

// 使用者請求 req head 資訊
// 伺服器回應 res head 資訊
http.createServer(function (req, res) {
  console.log(req.url) // req是使用者請求的資訊 url是什麼路徑進來的
  // Http 狀態 200, 回傳的內容型態是 text/plain 純文字
  res.writeHead(200, { 'Content-type': 'text/plain' })
  // 回傳內容
  res.write('<h1>Hello World</h1>')
  // 結束回應
  res.end()
}).listen(8080) //監聽 8080 port

console.log('伺服器啟動')