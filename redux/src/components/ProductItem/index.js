import "./styles.css";

const ProductItem = ({image, title, price}) => {
  return (
    <article className="card">
      <img src={image} alt={title} /> 

      <div className="card-body">
        <h2>{title}</h2>
        <p>R$ {price}</p>
        <button>Comprar</button> 
      </div> 
    </article>                      
  );
}

export default ProductItem;