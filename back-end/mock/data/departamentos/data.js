var _ = require('lodash');

var departamentos = require('./departamentos.js');

var provincias = require('../provincias/provincias.js');

departamentos = _.map(departamentos, function(departamento, index) {
  var provincia = _.find(provincias, { id: departamento.id_provincia});
  return {
  	id: index + 1,
  	descripcion: departamento.descripcion,
  	provincia: provincia
  };
});
 
module.exports = departamentos;