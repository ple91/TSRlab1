// Client code.
var net = require('net');
if (process.argv.length >= 4) //check IP parameters
{
    var remoteIP = process.argv[2]; //get remoteip
    var localIP = process.argv[3]; //get localip
// console.log('remote IP: ' + process.argv[2] + ' and Local IP: ' + process.argv[3]);

    var client = net.connect(8000, remoteIP, //port is fixed, ip as a parameter
        function () { //'connect' listener
            console.log('client connected');
// Send local IP to server
            client.write(localIP);
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
    console.log('Need 2 parameters: remote IP and Local IP!');
    process.exit();  //"Ensure process finalization (e.g.,using process.exit() )
}


