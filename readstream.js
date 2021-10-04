var util = require('util');
var Stream = require('stream');
var fs = require('fs');
var str = null;
var escritura = fs.createWriteStream('salida.txt');
var ReaderStream = function (dato) {
Stream.Readable.call(this, { objectMode: true });
// Implementación de la función this._read.
this._read = function() {
if (dato!=null) {
var claves = Object.keys(dato);
var nDatos = claves.length
contador = 0;
for (i in dato) {
var estaClave = claves[contador];
var variable = dato[i];
if (contador===nDatos-1) {
this.push(estaClave + ': '+ variable + '\n');
} else {
this.push(estaClave + ': '+ variable + ' - ' );
}
contador++;
}
}
this.push(null);
}
}
util.inherits(ReaderStream,Stream.Readable);
var dato = {
Nombre : 'Ismael',
Ciudad : 'Huelva'
};

str = new ReaderStream(dato);
str.pipe(escritura);
dato = {
Nombre : 'Antonio',
Ciudad : 'Sevilla'
};
str = new ReaderStream(dato);
str.pipe(escritura);
