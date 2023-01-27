(()=>{
  /*
  De esta clase se puede resumir que:
  El tipo de dato any “desactiva” el tipado de TS, volviendo de cierta forma a JS. No es recomendado
  usar any. Sin embargo, puede ser útil cuando estamos migrando código JS a TS. Podemos convertir de
  any a cualquier otro tipo de dato con el as operator. Este se usa de la siguiente forma.
   */

  let myDynamicVar: any;

  myDynamicVar = 100; // number
  myDynamicVar = null;
  myDynamicVar = {}; // Object
  myDynamicVar = ""; // string

  // CAST: Proceso que permite convertir un tipo de dato en otro
  //CAST tipo 1:
  myDynamicVar = "HOLA";
  const otherString = (myDynamicVar as string).toLowerCase();

  //CAST tipo 2:
  myDynamicVar = 1212;
  const otherNumber = (<number>myDynamicVar).toFixed();

})();
