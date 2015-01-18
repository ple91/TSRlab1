var http = require('http');
var miServidor = http.createServer(
function (req, res) {
res.writeHead(200, { 'Content-Type': 'text/html' });
res.end('<marquee>Node y HTTP</marquee>');
var d = new Date();
var horas = d.getHours();
var minutos = d.getMinutes();
if (minutos<10) minutos = "0" + minutos;
var segundos = d.getSeconds();
if (segundos<10) segundos = "0" + segundos;
var ahora = horas + ":" + minutos + ":" + segundos;
console.log('EDIT Alguien ha accedido a las ' + ahora);
});
miServidor.listen(8000);
