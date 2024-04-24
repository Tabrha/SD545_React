import React, { useEffect, useState } from 'react';
import ProductList from '../src/components/product-list';
import AddProduct from '../src/components/add-product'
import Product from './types/product';
import productService from './apis/services/product.service';
import axios from 'axios';


function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function getProducts() {
      const response = await productService.getProducts();
      setProducts(response.data);
    }
    getProducts();
  }, []);

  const addNewProd = (prod: Product) => {
    setProducts([...products, prod]);
  }

  const deleteProduct=async (product_id:number)=>{
    await axios.delete(`http://localhost:8000/products/${product_id}`)
    setProducts(products.filter(item => item.id !== product_id))
   }

  return (
    <div className="container">
      <ProductList products={products} deleteProduct={deleteProduct}/>
      <AddProduct onAddNewProd={addNewProd}/>
    </div>
  );
}

export default App;