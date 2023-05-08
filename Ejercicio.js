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

/*
3)
3.1) Dado el siguiente objeto
let carrito = {
    montoTotal: 10,
    productos: ["Leche"]
}

Crear las clases necesarias para generar carritos respetando la estructura del objeto dado.

3.2) Agregar un metodo a la clase que agregue un producto al carrito y actualice el montoTotal
agregarProducto(nombre, precio, unidades) {
    // Completar aca...
}


Ej:
agregarProducto("Azucar", 5, 2);

//Resultado esperado
carrito = {
    montoTotal: 20,
    productos: ["Leche", "Azucar"]
}
*/

//Para ver resultado en consola, presione la flecha que aparece a la izquierda de >ShopCart
class ShopCart {
  constructor() {
    this.montoTotal = 0;
    this.productos = [];
  }

  agregarProducto(nombre, precio, unidades) {
    this.montoTotal += precio * unidades;
    this.productos.push(nombre);
  }
}

let carrito = new ShopCart();
carrito.agregarProducto("Leche", 10, 1);
carrito.agregarProducto("Azucar", 5, 2);

console.log(carrito);


/*.
3.3)Agregar al ejercicio anterior una validación para no permitir duplicados e imprimir un mensaje si el item ya existe “ya existe xxx con yyy unidades”
*/

let items = [
  { nombre: "item1", unidad: 10 },
  { nombre: "item2", unidad: 20 },
  { nombre: "item3", unidad: 30 },
];

function agregarItem(nombre, unidad) {
  if (items.some((item) => item.nombre === nombre)) {
    alert(`Ya existe ${nombre} con ${unidad} unidades`);
    return;
  }
  items.push({ nombre, unidad });
}

agregarItem("item1", 10); // Ya existe item1 con 10 unidades
agregarItem("item4", 40); // Agrega {nombre: "item4", unidad: 40} al array items