var union    = require('union'),
    ecstatic = require('ecstatic');

var is2014 = /2014\./;

var server = union.createServer({
  before: [
    function (req, res) {
      var host = req.headers.host;
      if (process.env.NODE_ENV === 'production' && !is2014.test(host)) {
        //
        // Actually 301 please.
        //
        return res.end('301 yo.');
      }

      res.emit('next');
    },
    ecstatic(__dirname + '/public'),
    function (req, res) {
      res.end('404 yo.');
    }
  ]
});

server.listen(8080);
