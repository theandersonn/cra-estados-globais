import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import "./styles.css";

const Cart = () => {
  return (
    <article className="cart-item">
      <img className="cart-item-img" src="https://images-americanas.b2w.io/produtos/01/00/img/2264884/2/2264884233_2SZ.jpg" alt="Funko Pop TV The Office Jim Halpert" />

      <div className="cart-item-info">
        <h3 className="cart-item-name">Funko Pop TV The Office Jim Halpert</h3>
        <span className="cart-item-price">R$ 250,89</span>
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