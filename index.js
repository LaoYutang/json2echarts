const http = require('http')
const url = require('url')
const fs = require('fs')
const puppeteer = require('puppeteer')

http
  .createServer(function (request, response) {
    const { pathname, query } = url.parse(request.url)
    if (pathname === '/getBaseUrl') {
      let getData = ''
      request.on('data', (data) => {
        getData += data
      })
      request.on('end', async () => {
        try {
          // params
          const config = JSON.parse(getData)
          console.info(new Date().toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' }), getData)

          // write config.js
          await fs.writeFileSync('./web/config.js', 'const config = ' + getData)

          // puppeteer to screenshot
          const browser = await puppeteer.launch({
            args: ['--no-sandbox', '--disable-setuid-sandbox'],
          })
          const page = await browser.newPage()
          await page.setViewport({ width: config.width ?? 1000, height: config.height ?? 500 })
          await page.goto('http://localhost')
          await page.screenshot({ path: 'screenshot.png' })
          await browser.close()

          // transform png to BASE64
          const imageData = fs.readFileSync('./screenshot.png')
          let bufferData = Buffer.from(imageData).toString('base64')
          let base64 = 'data:image/png;base64,' + bufferData

          // response
          console.info('make success', base64)
          response.writeHead(200, {
            'Content-Type': 'application/json',
          })
          response.end(JSON.stringify({ success: true, message: null, data: base64 }))
        } catch (err) {
          // response
          console.error(err.message)
          response.writeHead(500, {
            'Content-Type': 'application/json',
          })
          response.end(JSON.stringify({ success: false, message: err.message, data: null }))
        }
      })
    } else {
      response.writeHead(404)
      response.end('404!')
    }
  })
  .listen(20000)

console.info('server on localhost:20000')
