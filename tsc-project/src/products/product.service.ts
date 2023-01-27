// Modulo de servicios, donde se procesaran los datos
// Importacion de modulos externos
import { Product } from "./product.model";

const Products: Product[] = [];

const AddProduct = (producto: Product) =>{
  Products.push(producto);
}

const calcStock = (Products: Product[]): number  =>{
  let totalStock = 0;
  Products.forEach(producto => {
    totalStock += producto.stock
  })
  return totalStock;
}
export {Products, AddProduct, calcStock}
