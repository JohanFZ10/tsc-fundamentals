/*
  PROGRAMACION MODULAR
  Permite crear modulos o archivos independientes que implementan funcionalidades especificas, que pueden reutilizarse en cualquer parte de mi Proyecto o App, haciendo un reuso de codigo. Por convencion, un modulo debe representar una responsabilidad o parte importante de un proyecto, por ejemplo, en cualquier proyecto debe haber un modulo de servicios que permita procesar datos en cierto punto. Tambien es comun crear un modulo especifico para modelar los datos a utilizar en mi App. En este modulo, se suelen definir los tipados generalizados, variables globales, constantes, alias, literal types etc. Tambien debe existir un modulo encargado de la ejecucion principal de las funcionalidades y variables descritas en los modulos de servicio y modelo. Los modulos se deben exportar para que se puedan usar o importar desde cualquier parte de mi App.

*/

// Importacion de Modulos externos
import { Products, AddProduct, calcStock} from "./product.service";

// Agregar productos
AddProduct({id: "1", name: "Pro1", state: false, stock: 5})
AddProduct({id: "2", name: "Pro2", state: true, stock: 8})

console.log(Products)

// Calcular Stock
console.log(calcStock(Products))


