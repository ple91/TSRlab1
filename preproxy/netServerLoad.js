// Server code. 
var net = require('net');

var fs = require('fs');
function getLoad() {
    data = fs.readFileSync("/proc/loadavg");
    var tokens = data.toString().split(' ');
    var min1 = parseFloat(tokens[0]) + 0.01;
    var min5 = parseFloat(tokens[1]) + 0.01;
    var min15 = parseFloat(tokens[2]) + 0.01;
    return min1 * 10 + min5 * 2 + min15;
};

var server = net.createServer(
    function (c) { //'connection' listener
        console.log('server connected');
        c.on('end', function () {
            console.log('server disconnected');
        });


        c.on('data', function (data) {
// Write the received data on stdout.
//console.log('RemoteIP: '+data.toString());
            remoteIP = data.toString(); //save IP for some reason
            load = getLoad(); //get load
            c.write(load.toString()); //send load
            c.end();// Inherited from Writable Stream It says that no more data will be written to the Stream.

        });

    });


server.listen(8000,
    function () { //'listening' listener
        console.log('server bound');
    });



