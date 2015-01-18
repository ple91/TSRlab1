
var net = require('net');

var server = net.createServer(

function(c) { //'connection' listener
console.log('server connected');

c.on('end', function() {

console.log('server disconnected'); });

c.write('Hello\r\n');
c.pipe(c);

});

server.listen(8000,

function() { //'listening' listener

console.log('server bound');

});
