import { useProducts } from '../../hooks/useProducts';
import ProductItem from "../ProductItem";
import "./styles.css";

const Products = () => {
  const { loading, error, products } = useProducts();

  if (loading) return <p>carregando...</p>
  if (loading) return <p>{error}</p>

  return (
    <section className="wrapper-cards">
      {products.map(productItem => {
        return (
          <ProductItem  key={productItem._id} productItem={productItem} />
        )
      })}                   
    </section>
  );
};

export default Products;