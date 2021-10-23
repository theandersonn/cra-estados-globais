import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import "./styles.css";

const Cart = ({
  id,
  title,
  image,
  price,
  amount,
  removeItem,
  increase,
  decrease,
}) => (
  <article className="cart-item">
    <img className="cart-item-img" src={image} alt={title} />

    <div className="cart-item-info">
      <h3 className="cart-item-name">{title}</h3>
      <span className="cart-item-price">R$ {price}</span>
      <button className="cart-item-remove" onClick={() => removeItem(id)}>
        remove
      </button>
    </div>

    <div className="wrapper-quantity">
      <MdKeyboardArrowUp
        className="cart-item-increase"
        onClick={() => increase(id)}
      />
      <span className="cart-item-quantity">{amount}</span>
      <MdKeyboardArrowDown
        className="cart-item-decrease"
        onClick={() => decrease(id)}
      />
    </div>
  </article>
);

export default Cart;
