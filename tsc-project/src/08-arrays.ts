(()=>{
  // Como declarar Arrays
  let ages = [15,24,32,5,7]           // Forma implicita o inferida por TS
  let prices: number[] = [100,120,50,30,10,2] //Forma explicita

  console.log(`ages: ${ages}`)
  console.log(`ages: ${ages}`)

  const names: string[] = ['johan', 'carlos', 'camilo','felipe']
  const flags: boolean[] = [true,false, false, false, true]

  console.log(`names: ${names}`)
  console.log(`flags: ${flags}`)

  let firstName: string[] = ['johan', 'carlos', 'felipe']
  let lastName: string[] = ['fernandez', 'arias', 'chaparro']

  console.log(`my firstName is: ${firstName[0]} and my lastName is: ${lastName[0]}`);
  console.log(`my firstName is: ${firstName[2]} and my lastName is: ${lastName[2]}`);

  // Como declarar arreglos mixtos de forma inferida
  let person = ['johan', 'fernandez', 24, true]
  // person = ['carlos', 'chaparro', '24', 'false'] // Esto es posible por ser un array mixto
  // person = [24,1998,5,6]  // Esto es posible por ser un array mixto
  person = [false, true, true, true,false] // Esto es posible por ser un array mixto

  // Como declarar un array mixto de manera explicita
  let otherPerson: (string | number | boolean)[] = ['jeisson', 'jimenez', 35, false]

  // Algunas funciones con arrays
  let myNumbers: number[] = [1, 2, 3, 4, 5]
  console.log(myNumbers);

  // Voy a agregar otros numeros
  myNumbers.push(6)
  myNumbers.push(7)
  myNumbers.push(8)
  console.log(myNumbers);

  let otherNumbers = myNumbers.map(number => number*2)
  console.log(otherNumbers)

  let newObject: (number | string | object)[] = [1,'string',{name:'johan', age: 24}];
})();
