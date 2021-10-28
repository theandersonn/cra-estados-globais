import { MdShoppingCart } from "react-icons/md";
import "./styles.css";

const Header = () => {
  return (
    <header className="header">
      <h1>shopping cart</h1>

      <div className="header-icon">
        <MdShoppingCart />
        <div className="header-quantity">
          5
        </div>
      </div>
    </header>
  );
}

export default Header;