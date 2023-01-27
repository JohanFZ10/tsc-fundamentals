(()=>{
  // Como utilizar el tipado object en declaracion de funciones
  // Forma menos comun
  const login = (data:{name:string, password:number})=>{
    console.log(`password: ${data.password}`)
  }

  login({name: 'johan', password: 123});

  // Forma mas practica
  type User = {
    name: string,
    password: number
  }
  const user = (user: User) =>{
    console.log(`name: ${user.name}`)
    console.log(`pasword: ${user.password}`)
  }

  user({name: 'johan', password: 123});

  // Es comun usar Destructuracion cuando trabajamos con objetos
  type Car = {model: number, marca: string, cc: number}

  const imprimirCar = (car: Car) =>{
    // Destructuracion de objetos
    const {model, marca, cc} = car
    console.log(`model: ${model}`)
    console.log(`marca: ${marca}`)
    console.log(`cilindraje: ${cc}`)
  }

  imprimirCar({model: 2008, cc: 1600, marca: "Renault"})

})();
