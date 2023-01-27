(()=>{
  // Uso de alias y literal types
  /*
    Alias: Es la manera en la que TS nos permite crear tipos de datos personalizados. Dependiendo del
    contexto, es posible que tengamos variables que puedan almacenar datos de mas de 1 tipo que
    posiblemente utilicemos con mucha frecuencia en nuestro codigo. Es muy util crear un alias o tipo
    de dato generalizado que luego pueda reutilizarse en nuestro codigo
    Literal types:Es la manera en la que TS nos permite realizar una asignación o inicializacin de
    variables personalizada, con la que podemos definir los posibles valores que puede tomar
    una variable
 */

    // Alias
    type MyTipoDeDato = string | number | boolean   // Declaracion de Alias usando nomeclatura PascalCase

    let person1: MyTipoDeDato = 'Johan'       // Se crea una variable del tipo MyTipoDeDato
    person1 = 18
    person1 = false

    let person2: MyTipoDeDato = 'Felipe'
    person2 = 16
    person2 = true

    // Literal types
    type Sizes = 'S' | 'M' | 'L' | 'XL'     // Declaracion de un conjunto de datos o valores estaticos

    let shirts: Sizes = 'S'            // Definimos los posibles valores que puede tomar la variable
    let sacks: Sizes = 'L'             // Definimos los posibles valores que puede tomar la variable



})();
