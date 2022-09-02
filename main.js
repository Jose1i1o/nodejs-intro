// Podemos usar el método createRequire para forzar un archivo en con ECMAScript modules
// a que interprete un json sin necesidad de hacer una petición a una api
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

// Import === ECMASCRIPT modules --> Extensión se puede forzar a mjs
// Require === CommonJS modules --> Extensión se puede forzar a cjs
// El forzar dependerá del 'type' que le pongamos en el package.json
// Por defecto usará de forma implícita CommonJS

// const { multiply,divide } = require('./operations');
import { divide, multiply } from './operations.cjs';
console.log(multiply(2, 5));
console.log(divide(10, 2))

// import users from './users.json'; // No nos funciona
const users = require('./users.json');
console.log(users);

// las variables globales necesitan definirse con global
global.myAge = 34;
console.log(global.myAge)

// El process.env nos da acceso a variables de entorno
// ¿Qué son? Son procesos dinámicos que pueden alterar el funcionamiento de la
// aplicación. Por ejemplo, el puerto de nuestra aplicación en función de la 
// máquina y del contexto o una API_KEY

console.log(process)
console.log(process.env)

// El console.log(window) nos devolverá nada. Esta es la principal diferencia entre
// back y front. El front inyectará a través del objeto window (nativo del buscador)
// toda la información de nuestro código. Es decir, interpretará nuestro código
// en base a las propiedades y métodos que el objeto window tiene definidas
// Por ejemplo: window.console.log('hello')
console.log(window)


// En cambio el back lo hará a través del objeto global
// Hay algunas propiedades compartidas como:
// console.log(), console.err, console.time y los timers (setTimeout)
// setTimeout(() => console.log(‘this is a timeout’), 2500);
console.log(global)
global.console.log(global)


// El process.exit() nos ayudará, sobre todo en desarrollo, a detener la
// aplicación en el punto que le indiquemos

console.log('Hola');
process.exit();
console.log('soy Jose'); // no se ejecuta
