var _ = require('lodash');

var departamentos = require('../departamentos/data.js');
var tipos_denuncia = require('../tipos_denuncia/data.js');

// var cantDenuncias = 1000;
var cantDenuncias = 100;

var calles = [
  'Av. Rivadavia', '25 de mayo', 'Av. Leandro N. Alem'
];

var tipo_empleador = [
  'Bar', 'Restaurant', 'Supermercado'
];

var razon_social = [
  'Mi País', 'Pesce', 'Bongiorno', 'La hermandad', 'Amanecer', 'Los amigos', 'Bilbao'
];

var trabajadores = [
  'dos', 'tres', 'cuatro', 'cinco', 'varios', 'múltiples'
];

/*
**denuncia**
  * id
  * fecha
  * provincia
  * departamento
  * direccion
  * razon_social
  * lat
  * lon
  * descripcion
  * tipo_denuncia
*/

var toFixedDown = function(value, digits) {
  var re = new RegExp("(\\d+\\.\\d{" + digits + "})(\\d)"),
    m = value.toString().match(re);
  return m ? parseFloat(m[1]) : value.valueOf();
};

var random = function(from, to, decimals) {
  decimals = decimals || 0;
  from = from === undefined ? 0 : from;
  to = to === undefined ? 1 : to;
  var max = to - from +1;
  return toFixedDown(from + parseFloat(Math.floor(Math.random() * max)), decimals);
};

var pickOne = function(array) {
  return array[random(0, array.length-1)];
}

var pick = function(array, count) {
  return _.shuffle(array).slice(0, count);
};

var randomDenuncia = function(id) {
  var departamento = pickOne(departamentos);
  var denuncia = {
    id:             id,
    fecha:          new Date(),
    provincia:      departamento.provincia,
    departamento:   departamento,
    direccion:      pickOne(calles) + ' ' + random(1, 5000).toString(),
    razon_social:   pickOne(tipo_empleador) + ' ' + pickOne(razon_social),
    lat:            random(-37.632333, -30.657574, 6),
    lon:            random(-68.584666, -57.686228, 6),
    tipo:           pickOne(tipos_denuncia)
  };

  denuncia.descripcion = 
    'En el "' + denuncia.razon_social + '"' +
    ' hay ' + pickOne(trabajadores) + 
    ' trabajores sufriendo ' + denuncia.tipo.descripcion.toLowerCase() + '.';

  return denuncia;

};

var generateDenuncias = function(maxDenuncias) {
  var denuncias = [];

  for (var i = 0; i < maxDenuncias; i++) {
    denuncias.push(randomDenuncia(i+1));
  }
  return denuncias;
};

module.exports = generateDenuncias(cantDenuncias);

/*
module.exports = [
  { id: 1,    nombre: 'juan',       apellido: 'mango',      edad: 22 },
  { id: 2,    nombre: 'abel',       apellido: 'sanchez',    edad: 23 },
  { id: 3,    nombre: 'jose',       apellido: 'perez',      edad: 43 },
  { id: 4,    nombre: 'julio',      apellido: 'fanon',      edad: 59 },
  { id: 5,    nombre: 'julian',     apellido: 'castro',     edad: 28 },
  { id: 6,    nombre: 'fidel',      apellido: 'ramirez',    edad: 13 },
  { id: 7,    nombre: 'carlos',     apellido: 'casullo',    edad: 29 },
  { id: 8,    nombre: 'rodolfo',    apellido: 'gonzalez',   edad: 62 },
  { id: 9,    nombre: 'jorge',      apellido: 'alsina',     edad: 83 },
  { id: 10,   nombre: 'pablo',      apellido: 'rivadavia',  edad: 53 },
  { id: 11,   nombre: 'matias',     apellido: 'orondo',     edad: 93 },
  { id: 12,   nombre: 'ernesto',    apellido: 'riglos',     edad: 77 }
];
*/
