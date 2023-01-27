// Modulo que representa el modelo por defecto de los datos
type Product = {
  name: string;
  id: string;
  stock: number;
  state: boolean;
};

type Sizes = 'S' | 'M' | 'L' | 'XL'

export {Product, Sizes}
