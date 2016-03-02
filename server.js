var union    = require('union'),
    ecstatic = require('ecstatic');

var port = process.env.PORT || 8080;

var server = union.createServer({
  before: [
    require('morgan')('combined'),
    ecstatic(__dirname + '/public')
  ]
});

server.listen(port, function (err) {
  if (err) { throw err; }
  console.log('2014.empirejs.org running on %s', port);
});
