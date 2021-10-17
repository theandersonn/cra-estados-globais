import "./styles.css";

const ProductItem = ({productItem, addCart}) => {
  const {image, title, price} = productItem;
  return (
    <article className="card">
      <img src={image} alt={title} /> 

      <div className="card-body">
        <h2>{title}</h2>
        <p>R$ {price}</p>
        <button onClick={() => addCart(productItem)}>Comprar</button> 
      </div> 
    </article>                      
  );
}

export default ProductItem;