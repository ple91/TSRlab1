  // Client code.
    var net = require('net');
    if (process.argv.length >= 4) //check IP parameters
    {
        var new_remote_IP = process.argv[2]; //get new remote ip
        var new_remote_Port = process.argv[3]; //get new remote port
        var proxy_IP = process.argv[4]; // get proxy IP
    // console.log('remote IP: ' + process.argv[2] + ' and remote port: ' + process.argv[3]);

        var client = net.connect(8001, proxy_IP, //port is fixed, ip as a parameter
            function () { //'connect' listener
            console.log('client connected');
    // Send client IP to server
var msg = JSON.stringify ({"remote_ip":new_remote_IP, 
    "remote_port":new_remote_Port});
    console.log("message sent" + msg);
    client.write(msg);
});
        client.on('data', function (msg) {
          var msg = JSON.stringify ({"remote_ip":new_remote_IP, 
    "remote_port":new_remote_Port});
    // Write the received data on stdout.
    // Inherited from Writable Stream...
    // It says that no more data will be
    // written to the Stream.
    client.end();
});
        client.on('end', function () {
            console.log('client disconnected');
            process.exit(); //"Ensure process finalization (e.g.,using process.exit() )
        });
 }else {
        console.log('Need 3 parameters');
        process.exit();  //"Ensure process finalization (e.g.,using process.exit() )
    }