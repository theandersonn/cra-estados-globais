import Header from '../../components/Header';
import Cart from '../../components/Cart';
import Products from "../../components/Products";
import "./styles.css";

const Home = () => {
  return (
    <>
      <Header />
      <div className="container">
        <div className="wrapper-home">
          <Products />
          <Cart />
        </div>
      </div>
    </>
  );
}

export default Home;