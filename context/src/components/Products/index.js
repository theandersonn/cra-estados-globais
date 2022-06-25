import { useContext } from 'react';
import { ProductListContext } from '../../context/ProductListContext';
import ProductItem from "../ProductItem";
import "./styles.css";

const Products = () => {
  const { loading, error, products } = useContext(ProductListContext);

  if (error) {
    return (
      <p>{error}</p>
    );  
  } else {
    return (
      <>
      {loading ? (
        <p>carregando</p>
      ) : (
        <section className="wrapper-cards">
          {products.map(productItem => {
            return (
              <ProductItem  key={productItem._id} productItem={productItem} />
            )
          })}                   
        </section>
      )};
      </>
    );
  }
}

export default Products;