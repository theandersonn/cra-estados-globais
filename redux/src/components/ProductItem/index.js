import "./styles.css";

const ProductItem = ({productItem, addItem}) => {
  const {image, title, price} = productItem;
  return (
    <article className="card">
      <img src={image} alt={title} /> 

      <div className="card-body">
        <h2>{title}</h2>
        <p>R$ {price}</p>
        <button onClick={() => addItem(productItem)}>Comprar</button> 
      </div> 
    </article>                      
  );
}

export default ProductItem;