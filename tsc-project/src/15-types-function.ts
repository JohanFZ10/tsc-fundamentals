(() => {
  // Como definir tipos de funciones en TS
  // Con TS, podemos especificar que tipo de dato queremos que retorne una funcion
  // Regular Function
  function AddV1(x: number, y: number): number {
    return x + y;
  }

  const suma1 = AddV1(1, 2);
  // Arrow Functions
  const AddV2 = (x: number, y: number): number => {
    return x + y;
  }
  const suma2 = AddV2(1, 2);

  const imprimirSuma = (): void =>{
    console.log(suma1);
  }

  imprimirSuma()

  // Pueden existir funciones tipo: void, number, string, boolean, array, object
})();
