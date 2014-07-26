crudSample
==========

Ejemplo de aplicación CRUD con node.js, mysql y angular

Primeros pasos

1. Instalar node y npm

2. Instalar grunt client:

http://gruntjs.com/getting-started


```
npm install -g grunt-cli
```

```
git clone https://github.com/MTEySS/crudSample.git
cd crudSample/back-end/mock/
npm install
grunt
```

Abrir un explorador en http://localhost:3000/api/denuncias

Están creados los siguientes endpoints:

http://localhost:3000/api/denuncias
http://localhost:3000/api/provincias
http://localhost:3000/api/departamentos
http://localhost:3000/api/tipos_denuncia

Con los web services pueden probar cosas como:

// paginar y ordenar
http://localhost:3000/api/denuncias?len=3&page=2&order=razon_social&sort=desc

// ordenar en campos anidads
http://localhost:3000/api/denuncias?order=tipo.descripcion

// filtro rapido
http://localhost:3000/api/denuncias?q=mayo&fields=descripcion,direccion

// filtro por cada campo
http://localhost:3000/api/denuncias?id=3..10&direccion=Rivadavia

Por último, en http://localhost:3000/ hay un abm hecho con angular y ngResource

Para correr las pruebas unitarias

```
cd crudSample/back-end/mock/
grunt test
```
