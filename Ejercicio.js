/*
1) Realizar una funcion que reciba un numero y escriba una piramide desde 1 hasta ese numero de la siguiente forma:
para valor 6
1
12
123
1234
12356

para valor 3
1
12
123
*/

//para ejecutar en consola, escriba piramide().
function piramide(numero) {
  numero = prompt('Inserte un número');
    for (let i = 1; i <= numero; i++) {
      let fila = '';
        for (let j = 1; j <= i; j++) {
          fila += j;
        }
    console.log(fila);
  }
}

/*
2) Escribir una funcion que reciba 2 array y devuelva un array con todos los elementos que coinciden entre ellos

Ejemplo:
Array1: ['rojo', 'azul', 'amarillo']
Array2: ['blanco', 'negro', 'rojo']
Resultado: ['rojo']

Ejemplo 2:
Array1: [4, 3, true, 'manzana']
Array2: ['pera', 3, f alse, true, 3, true]
Resultado: [3, true]
*/

//Para cambiar los ejemplos, copie y pegue el contenido de cada array comentado en el ejercicio.
let Array1 = ['rojo', 'azul', 'amarillo'];
let Array2 = ['blanco', 'negro', 'rojo'];

//para ejecutar en consola, escriba compararArrays(Array1, Array2)
function compararArrays(Array1, Array2) {
  return Array1.filter(element => Array2.includes(element));
}