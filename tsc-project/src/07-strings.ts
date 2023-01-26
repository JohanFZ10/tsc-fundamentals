(()=>{
  const productName: string = `IPHONE 10`    // Asignar valor usando comillas sencillas
  const productID: string = "1x0ff75xw"      // Asignar valor usando comillas dobles
  const productDescription: string = "I'm a CELULAR IPHONE very interesting and expensive product"
  const text: string = 'I\'m Iphone 10'     // Usar \ antes de un caracter especial
  /*
  Asignar valor usando Back tick's ``(se usa para interpolar strings)
  Los back tick's tambien se conocen como Template String, permiten construir cadenas de texto
  sin usar tecnicas de concatenacion y nos facilitan mucho la vida, permitiendo escribir cadenas
  en multiples lineas
  */
  let product: string = `
    The Information of my product is:

    productName: ${productName},
    productID: ${productID},
    productDescription: ${productDescription}

  `

  console.log(`productNames: ${productName}`)
  console.log(`productID: ${productID}`)
  console.log(`productDescription: ${productDescription}`)
  console.log(`product: ${product}`)

})();
