// Client code.
var net = require('net');
if (process.argv.length >= 4) //check IP parameters
{
    var proxy_IP = process.argv[2]; //get proxyip
    var client_IP = process.argv[3]; //get clientip
// console.log('proxy IP: ' + process.argv[2] + ' and client IP: ' + process.argv[3]);
    
    var client = net.connect(8000, proxy_IP, //port is fixed, ip as a parameter
        function () { //'connect' listener
            console.log('client connected');
// Send client IP to server
            client.write(client_IP);
        });
    client.on('data', function (data) {
// Write the received data on stdout.
        console.log(data.toString());
// Inherited from Writable Stream...
// It says that no more data will be
// written to the Stream.
        client.end();
    });
    client.on('end', function () {
        console.log('client disconnected');
        process.exit(); //"Ensure process finalization (e.g.,using process.exit() )
    });
} else {
    console.log('Need 2 parameters: proxy IP and Local IP!');
    process.exit();  //"Ensure process finalization (e.g.,using process.exit() )
}


