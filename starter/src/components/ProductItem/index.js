import "./styles.css";

const ProductItem = () => {
  return (
    <article className="card">
      <img src="https://images.unsplash.com/photo-1585643248637-7d04f9461dd8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1341&q=80" alt="Macbook Air 13 Apple M1" /> 

      <div className="card-body">
        <h2>Macbook Air 13" Apple M1</h2>
        <p>R$ 8.725,94</p>
        <button>Comprar</button> 
      </div> 
    </article>                      
  );
}

export default ProductItem;