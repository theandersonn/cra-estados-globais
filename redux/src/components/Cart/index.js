import CartItem from "../CartItem";
import "./styles.css";

const Cart = ({cart, removeItem}) => (
  <aside className="cart">
    <header className="cart-header">
      <h2>Seu carrinho</h2>
    </header>

    <div className="cart-empty">
      {/* <p>está vazio...</p> */}
    </div>

    <div className="cart-items">
      {Object.keys(cart).map((id) => <CartItem key={id} id={id} title={cart[id].title} image={cart[id].image} price={cart[id].price} amount={cart[id].amount} removeItem={removeItem} />)}
    </div>

    <footer className="cart-total">
      <h2>Total: R$ 43.629,70</h2>
    </footer>
  </aside>
);

export default Cart;