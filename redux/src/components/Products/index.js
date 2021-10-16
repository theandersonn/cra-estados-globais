import ProductItem from "../ProductItem";
import "./styles.css";

const Products = ({products = []}) => (
  <section className="wrapper-cards">
    {products.map(item => {
      const {_id, image, title, price} = item;
      return (
        <ProductItem key={_id} image={image} title={title} price={price} />
      )
    })}
  </section>
);

export default Products;