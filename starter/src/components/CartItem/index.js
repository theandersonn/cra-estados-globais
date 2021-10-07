import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import "./styles.css";

const Cart = () => {
  return (
    <article className="cart-item">
      <img className="cart-item-img" src="https://images.unsplash.com/photo-1585643248637-7d04f9461dd8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1341&q=80" alt="Macbook Air 13 Apple M1" />

      <div className="cart-item-info">
        <h3 className="cart-item-name">Macbook Air 13" Apple M1</h3>
        <span className="cart-item-price">R$ 17.451,88</span>
        <button className="cart-item-remove">remove</button>
      </div>

      <div className="wrapper-quantity">
        <MdKeyboardArrowUp className="cart-item-increase" />
        <span className="cart-item-quantity">2</span>
        <MdKeyboardArrowDown className="cart-item-decrease" />
      </div>
    </article>
  );
}

export default Cart;