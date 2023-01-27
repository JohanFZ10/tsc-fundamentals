(()=>{
  // Datos tipo Null y Undefined
  /*
    Null y Undefined son 2 tipos de dato distintos que tambien suelen utilizarse en nuestra logica
    de programacion. Por lo general, se pueden usar de manera indistinta en multiples casos, entre los
    que se encuentran:
    1) Cuando queremos que una variable se inicialice con el valor null o undefined
    2) Cuando se implementan funciones y ocurren errores por algun motivo, la forma de
    notificar al usuario, programador o en definitivas al sistema es, retornando un dato ya sea
    tipo null o undefined.
    3) Cuando queremos validar parametros recibidos en una funcion. Podemos usar la condicion de que
    la funcion ejecute sus instrucciones si y solamente si, sus parametros son diferentes a null o
    undefined
  */
  let names: string | null = null;    // Se inicializa la variable names con el valor null
  let numbers: number | null = null;  // Se inicializa la variable numbers con el valor null

  function OcurrioError(a:number, b:number){
    return  (a+b > 5) ? null: a+b
  }
  console.log(OcurrioError(1,3))

  function Hi(name:string | null, age: number |null){
    // name ? age ? console.log(`Hola ${name}, veo que tienes ${age} años`) : console.log('error dato age') : console.log('error dato name')
    name && age ? console.log(`Hola ${name}, veo que tienes ${age} años`) : console.log('error parametros de entrada')
  }

  Hi(null, OcurrioError(2,3))
})();
