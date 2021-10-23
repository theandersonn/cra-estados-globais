import Header from '../../containers/HeaderContainer';
import Cart from '../../containers/CartContainer';
import Products from '../../containers/ProductsContainer';
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