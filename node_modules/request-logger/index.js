var EE = require('events').EventEmitter;

module.exports = createRequestLogger;
function createRequestLogger(timeoutTime) {
  function middleware(req, res, next) {
    var done = false;
    var start = new Date();

    middleware.emit('request', req);

    if (timeoutTime) {
      var timeout = setTimeout(function () {
        done = true;
        middleware.emit('timeout', req, timeoutTime);
      }, timeoutTime);
    }

    var oldEnd = res.end;
    res.end = function (chunk, encoding) {
      clearTimeout(timeout);
      res.end = oldEnd;
      res.end.apply(res, arguments);
      var end = new Date();
      if (!done) middleware.emit('response', req, res.statusCode, end - start);
    };
    next();
  }
  Object.keys(EE.prototype)
    .forEach(function (key) {
      middleware[key] = EE.prototype[key];
    });
  EE.call(middleware);
  return middleware;
}