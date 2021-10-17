import { useEffect } from 'react';
import Header from '../../components/Header';
import Cart from '../../components/Cart';
import Products from "../../components/Products";
import "./styles.css";

const Home = ({getProducts, products, addCart, cart}) => {
  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <>
      <Header />
      <div className="container">
        <div className="wrapper-home">
          <Products products={products} addCart={addCart} />
          <Cart cart={cart} />
        </div>
      </div>
    </>
  );
}

export default Home;