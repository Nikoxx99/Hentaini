export function sendNotificationFn (data) {
  var headers = {
    'Content-Type': 'application/json; charset=utf-8',
    'Authorization': 'Basic YTUxOGFkZTMtN2JlZC00Y2IzLWIyNzQtMDRjMDk2ZWM1YzAy'
  }
  
  var options = {
    host: 'onesignal.com',
    port: 443,
    path: '/api/v1/notifications',
    method: 'POST',
    headers: headers
  }
  
  // eslint-disable-next-line no-undef
  var https = require('https')
  var req = https.request(options, function(res) {  
    res.on('data', function(data) {
      console.log('Response:')
      console.log(JSON.parse(data))
    })
  })
  
  req.on('error', function(e) {
    console.log('ERROR:')
    console.log(e)
  })
  
  req.write(JSON.stringify(data))
  req.end()
}