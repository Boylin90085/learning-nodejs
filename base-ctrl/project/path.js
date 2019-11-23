var path = require('path')

// 抓資料夾路徑
console.log(path.dirname('/xx/yy/zz.js'))
// 抓檔名
console.log(path.basename('/project/xx/yy/zz.js'))
// 抓副檔名
console.log(path.extname('/project/xx/yy/zz.js'))
// 合併路徑
console.log(path.join(__dirname, '/yy'))
// 分析路徑
console.log(path.parse('/project/xx/yy/zz.js'))


