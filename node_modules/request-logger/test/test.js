var request = require('request');
var assert = require('assert');
var logger = require('./server');


describe('the logger emits', function () {
  it('`request(req)` when the request arives', function (done) {
    logger.once('request', function (req) {
      assert(req.path === '/silent');
      assert(req.method === 'GET');
      done();
    });
    request('http://localhost:3128/silent');
  });
  it('`response(req, status, time)` when the server finishes responding', function (done) {
    logger.once('response', function (req, status, time) {
      assert(req.path === '/loud');
      assert(req.method === 'GET');
      assert(status === 200);
      assert(time >= 200);
      done();
    });
    request('http://localhost:3128/loud');
  });
  it('`response(req, status, time)` when the server finishes responding with an error', function (done) {
    logger.once('response', function (req, status, time) {
      assert(req.path === '/404');
      assert(req.method === 'GET');
      assert(status === 404);
      done();
    });
    request('http://localhost:3128/404');
  });
  it('`timeout(req)` when the server doesn\'t respond within the timeout', function (done) {
    logger.once('timeout', function (req, timeout) {
      assert(req.path === '/silent');
      assert(req.method === 'GET');
      assert(timeout === 1000);
      done();
    });
    request('http://localhost:3128/silent');
  });
})