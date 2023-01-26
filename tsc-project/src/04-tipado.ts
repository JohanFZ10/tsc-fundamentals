(()=>{
  // 1- Tipado Inferido por TypeScript
  var numero1 = 0;       // Tsc infiere que numero es del tipo number
  // numero1 = 'a' esto marcaria error por el tipo de dato
  let myName1 = 'johan'; // Tsc infiere que myName es un tipo String
  // myName1 = 123; esto marcaria error por el tipo de dato

  // 2- Tipado Explicito
  var numero2: number = 2;
  var myName2: string = 'Johan';
  var flag: boolean = false;
  let number3: number;  // Variable tipo number sin inicializar
  let myName:string;    // Vaiable tipo string sin inicializar
})();
