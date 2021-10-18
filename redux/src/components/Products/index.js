import ProductItem from "../ProductItem";
import "./styles.css";

const Products = ({products = [], addItem}) => (
  <section className="wrapper-cards">
    {products.map(productItem => {
      return (
        <ProductItem key={productItem._id} productItem={productItem} addItem={addItem} />
      )
    })}
  </section>
);

export default Products;