import "./styles.css";

const ProductItem = () => {
  return (
    <article className="card">
      <img src="https://images-americanas.b2w.io/produtos/01/00/img/2264884/2/2264884233_2SZ.jpg" alt="Funko Pop TV The Office Jim Halpert" /> 

      <div className="card-body">
        <h2>Funko Pop TV The Office Jim Halpert</h2>
        <p>R$ 250,89</p>
        <button>Comprar</button> 
      </div> 
    </article>                      
  );
}

export default ProductItem;