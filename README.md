pintagrilla
===========

Ejemplo de Pintar una grilla haciendo uso de NodeJS
Esta es una modificacion a ejemplo que Pablo Rigazzi (@prigazzi) nos entrego en el curso de mejorando.la

De a poco voy a ir agregando cosas.

Instalacion
-----------
* Para instalar este pequeño servidor es necesario tener instalado nodejs con su respectivo npm
* Estando en la carpeta ejecutar

```
npm install
```
* Con esto se instalaran todos los paquetes necesarios
  * express
  * jade
  * consolidate
  * socket.io

* Ahora solo hace falta hacer correr el servidor
```
node server.js
```


Sugerencia
----------
Si se desea dejar el servidor corriendo a modo de **demonio** o **servicio**, les sugiero que utilicen *forever*
```
npm install forever
forever start server.js
```
