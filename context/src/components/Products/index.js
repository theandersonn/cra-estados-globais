import { useContext } from 'react';
import { Context } from '../../context/ProductsContext';
import ProductItem from "../ProductItem";
import "./styles.css";

const Products = () => {
  const { loading, error, products } = useContext(Context);
  console.log(loading, error, products);
  return (
    <section className="wrapper-cards">
      <ProductItem />                    
      <ProductItem />                    
      <ProductItem />
      <ProductItem />                    
      <ProductItem />                    
      <ProductItem />                    
    </section>
  );
}

export default Products;