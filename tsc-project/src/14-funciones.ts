(() => {
  // Declaracion de funciones con TS
  // Regular Function
  function getUserV1(
    name: string,
    lastname: string,
    age: number,
    dateBirth: Date
  ) {
    return {
      name: name,
      lastname: lastname,
      age: age,
      dateBirth: dateBirth,
    };
  }
  // Sintaxis de Arrow Function
  const getUserV2 = (
    name: string,
    lastname: string,
    age: number,
    dateBirth?: Date,
  ) => {
    return {
      name: name,
      lastname: lastname,
      age: age,
      dateBirth: dateBirth,
    };
  }

  console.log(getUserV1('johan', 'fernandez',24, new Date()));
  // Usando el operador Optional ?, es posible decirle a TS que un parametro en particular no es estrictamente necesario para una funcion, asi que podriamos no pasarle dicho parametro
  console.log(getUserV2('johan', 'fernandez', 24));

})();
