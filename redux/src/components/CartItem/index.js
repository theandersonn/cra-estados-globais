import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import "./styles.css";

const Cart = ({title, image, price, amount}) => {
  return (
    <article className="cart-item">
      <img className="cart-item-img" src={image} alt={title} />

      <div className="cart-item-info">
        <h3 className="cart-item-name">{title}</h3>
        <span className="cart-item-price">R$ {price}</span>
        <button className="cart-item-remove">remove</button>
      </div>

      <div className="wrapper-quantity">
        <MdKeyboardArrowUp className="cart-item-increase" />
        <span className="cart-item-quantity">{amount}</span>
        <MdKeyboardArrowDown className="cart-item-decrease" />
      </div>
    </article>
  );
}

export default Cart;