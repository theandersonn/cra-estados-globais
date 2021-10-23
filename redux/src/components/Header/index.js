import { MdShoppingCart } from "react-icons/md";
import "./styles.css";

const Header = ({ cart = [] }) => {
  return (
    <header className="header">
      <h1>shopping cart</h1>

      <div className="header-icon">
        <MdShoppingCart />
        <div className="header-quantity">
          {Object.keys(cart).reduce(function (acc, produtoId) {
            return acc + cart[produtoId].amount;
          }, 0)}
        </div>
      </div>
    </header>
  );
};

export default Header;
