(()=>{
  let isEnabled = false      // Tipado implicito o inferido por TS
  let isGood: boolean = true // Tipado explicito
  let random = Math.random() // Numero aleatorio entre [0-1]
  console.log(`isEnabled: ${isEnabled}`)
  console.log(`isGood: ${isGood}`)
  console.log(`random: ${random}`)

  // Operador ternario
  let isGreater = false
  isGreater = random >0.5 ? true: random > 0.3 ? true: false
  console.log(`isGreater: ${isGreater}`)
})();
