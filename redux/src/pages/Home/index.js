import { useEffect } from 'react';
import Header from '../../components/Header';
import Cart from '../../components/Cart';
import Products from "../../components/Products";
import "./styles.css";

const Home = ({getProducts, products, addItem, cart, removeItem, increase, decrease}) => {
  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <>
      <Header />
      <div className="container">
        <div className="wrapper-home">
          <Products products={products} addItem={addItem} />
          <Cart cart={cart} removeItem={removeItem} increase={increase} decrease={decrease} />
        </div>
      </div>
    </>
  );
}

export default Home;