import ProductItem from "../ProductItem";
import "./styles.css";

const Products = ({products = [], addCart}) => (
  <section className="wrapper-cards">
    {products.map(productItem => {
      return (
        <ProductItem key={productItem._id} productItem={productItem} addCart={addCart} />
      )
    })}
  </section>
);

export default Products;