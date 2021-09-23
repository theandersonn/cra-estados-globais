import { MdShoppingCart, MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import './app.css';

const App = () => {
  return (
    <>
      <header className="header">
        <h1>shopping cart</h1>

        <div className="header-icon">
          <MdShoppingCart />
          <div className="header-quantity">
            5
          </div>
        </div>
      </header>

      <div className="container">
        <div className="wrapper-home">
          <section className="wrapper-cards">
            <article className="card">
              <img src="https://images.unsplash.com/photo-1585643248637-7d04f9461dd8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1341&q=80" /> 

              <div className="card-body">
                <h2>Macbook Air 13" Apple M1</h2>
                <p>R$ 8.725,94</p>
                <a href="#">Comprar</a>  
              </div> 
            </article>

            <article className="card">
              <img src="https://images.unsplash.com/photo-1585643248637-7d04f9461dd8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1341&q=80" /> 

              <div className="card-body">
                <h2>Macbook Air 13" Apple M1</h2>
                <p>R$ 8.725,94</p>
                <a href="#">Comprar</a>  
              </div> 
            </article>

            <article className="card">
              <img src="https://images.unsplash.com/photo-1585643248637-7d04f9461dd8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1341&q=80" /> 

              <div className="card-body">
                <h2>Macbook Air 13" Apple M1</h2>
                <p>R$ 8.725,94</p>
                <a href="#">Comprar</a>  
              </div> 
            </article>  

            <article className="card">
              <img src="https://images.unsplash.com/photo-1585643248637-7d04f9461dd8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1341&q=80" /> 

              <div className="card-body">
                <h2>Macbook Air 13" Apple M1</h2>
                <p>R$ 8.725,94</p>
                <a href="#">Comprar</a>  
              </div> 
            </article>  

            <article className="card">
              <img src="https://images.unsplash.com/photo-1585643248637-7d04f9461dd8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1341&q=80" /> 

              <div className="card-body">
                <h2>Macbook Air 13" Apple M1</h2>
                <p>R$ 8.725,94</p>
                <a href="#">Comprar</a>  
              </div> 
            </article>  

            <article className="card">
              <img src="https://images.unsplash.com/photo-1585643248637-7d04f9461dd8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1341&q=80" /> 

              <div className="card-body">
                <h2>Macbook Air 13" Apple M1</h2>
                <p>R$ 8.725,94</p>
                <a href="#">Comprar</a>  
              </div> 
            </article>                        
          </section>
        
          <sidebar className="cart">
            <header className="cart-header">
              <h2>Seu carrinho</h2>
            </header>

            <div className="cart-empty">
              {/* <p>está vazio...</p> */}
            </div>

            <div className="cart-items">
              <article className="cart-item">
                <img className="cart-item-img" src="https://images.unsplash.com/photo-1585643248637-7d04f9461dd8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1341&q=80" />

                <div className="cart-item-info">
                  <h3 className="cart-item-name">Macbook Air 13" Apple M1</h3>
                  <span className="cart-item-price">R$ 17.451,88</span>
                  <button class="cart-item-remove">remove</button>
                </div>

                <div className="wrapper-quantity">
                  <MdKeyboardArrowUp className="cart-item-increase" />
                  <span className="cart-item-quantity">2</span>
                  <MdKeyboardArrowDown className="cart-item-decrease" />
                </div>
              </article>

              <article className="cart-item">
                <img className="cart-item-img" src="https://images.unsplash.com/photo-1585643248637-7d04f9461dd8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1341&q=80" />

                <div className="cart-item-info">
                  <h3 className="cart-item-name">Macbook Air 13" Apple M1</h3>
                  <span className="cart-item-price">R$ 17.451,88</span>
                  <button class="cart-item-remove">remove</button>
                </div>

                <div className="wrapper-quantity">
                  <MdKeyboardArrowUp className="cart-item-increase" />
                  <span className="cart-item-quantity">2</span>
                  <MdKeyboardArrowDown className="cart-item-decrease" />
                </div>
              </article>

              <article className="cart-item">
                <img className="cart-item-img" src="https://images.unsplash.com/photo-1585643248637-7d04f9461dd8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1341&q=80" />

                <div className="cart-item-info">
                  <h3 className="cart-item-name">Macbook Air 13" Apple M1</h3>
                  <span className="cart-item-price">R$ 8.725,94</span>
                  <button class="cart-item-remove">remove</button>
                </div>

                <div className="wrapper-quantity">
                  <MdKeyboardArrowUp className="cart-item-increase" />
                  <span className="cart-item-quantity">1</span>
                  <MdKeyboardArrowDown className="cart-item-decrease" />
                </div>
              </article>
            </div>

            <footer className="cart-total">
              <h2>Total: R$ 43.629,70</h2>
            </footer>
          </sidebar>
        </div>
      </div>
    </>
  );
}

export default App;