(()=>{
  // Los union types permiten declarar variables personalizados
  let myData: string | number       // el simbolo or (|) se utiliza para establecer tipos de datos
  myData = 'Puede ser un String'    // string
  console.log(`myData: ${typeof myData}`)
  myData = 1998                     // number
  console.log(`myData: ${typeof myData}`)


  // Los union types permiten crear funciones cuya ejecucion dependa del tipo de parametro recibido
  function Add(x:number|string,y:number|string){
    // Uso del operador de igualdad estricta
    if(typeof x === 'number' && typeof y === 'number'){
      /*
        Despues de superar esta validacion,  TS infiere que x e y son tipo number
        Por lo tanto, habilitara todos los metodos y funcionalidades asociados a este
        tipo de dato
      */
      return Number(x.toFixed(1)) + Number(y.toFixed(1))
    }else if(typeof x === 'string' && typeof y === 'string'){
       /*
        En este punto, TS asume que x e y son datos tipo string, por tanto, habilitara
        todos los metodos y funcionalidades asociados a este tipo de dato
      */
     return x.toUpperCase()+' '+y.toUpperCase()
    }else{
      return 'Error: Los datos son de distinto tipo'
    }
  }

  console.log(Add(1.35,4.52))
  console.log(Add('Hola soy johan','Quiero conocerte'))
  console.log(Add('Hola soy carlos','Quiero saber mas de ti'))
  console.log(Add('Hola soy carlos',2))

})();
