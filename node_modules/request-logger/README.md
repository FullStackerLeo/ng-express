# request-logger

Emit events when requests are handled or time out (useful for logging purposes)

## Installation

    $ npm install request-logger

## Usage

```javascript
var app = require('express')();

var logger = require('request-logger')(20000);
app.use(logger);
logger.on('request', function (req) {
  console.log('Request incoming for: "' + req.path + '"');
});
logger.on('timeout', function (req, timeout) {
  console.log('Request for "' + req.path + '"" timed out after '
              + timeout + ' ms');
  // If you're building a proxy server you might want to log
  // this as `504 = gateway timeout`
});
logger.on('resposne', function (req, statusCode, time) {
  console.log('Request for "' + req.path + '"" resulted in '
              + statusCode + ' after ' + time +' ms');
});

app.listen(3000);
```

## License

  MIT