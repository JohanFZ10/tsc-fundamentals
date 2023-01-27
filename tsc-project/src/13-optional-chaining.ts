(() => {
  // optional chaining operator (?)
  /*
    permite evaluar condiciones o acceder a propiedades o metodos de datos, objetos o funciones
    si el acceso devuelve un undefined, el operador devolvera un null o undefined. Son muy utiles
    para evaluar condiciones con pocas lineas de codigo
  */
  let isEnabled: boolean = false;
  // Forma tradicional de usar condicionales
  if (isEnabled) {
    console.log(`isEnabled is true`);
  } else {
    console.log(`isEnabled is false`);
  }
  // Usando el operador ternario o optional chaining
  isEnabled
    ? console.log(`isEnabled is true`)
    : console.log(`isEnabled is false`);

  // Otro ejemplo, usando operadores logidos
  let isGood = false;
  let isError = true;

  // Forma tradicional
  if (isGood && isError) {
    console.log('Todo esta bien');
  } else {
    console.log('Algo anda mal');
  }
  // Optional chaining
  isGood && isError
    ? console.log('Todo esta bien')
    : console.log('Algo anda mal');
})();
