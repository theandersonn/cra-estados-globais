import { useContext } from 'react';
import { ProductListContext } from '../../context/ProductListContext';
import ProductItem from "../ProductItem";
import "./styles.css";

const Products = () => {
  const { loading, error, products } = useContext(ProductListContext);
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