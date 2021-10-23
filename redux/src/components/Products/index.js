import { useEffect } from 'react';
import ProductItem from "../ProductItem";
import "./styles.css";

const Products = ({products = [], addItem, getProducts}) => {
  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <section className="wrapper-cards">
    {products.map(productItem => {
      return (
        <ProductItem key={productItem._id} productItem={productItem} addItem={addItem} />
      )
    })}
  </section>
  )
};

export default Products;