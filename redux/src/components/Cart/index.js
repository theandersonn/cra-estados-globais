import CartItem from "../CartItem";
import "./styles.css";

const cartTotal = (cart) => {
  return Object.keys(cart).reduce(function (acc, produtoId) {
    return acc + cart[produtoId].price * cart[produtoId].amount;
  }, 0);
};

const Cart = ({ cart, removeItem, increase, decrease }) => (
  <aside className="cart">
    <header className="cart-header">
      <h2>Seu carrinho</h2>
    </header>

    {cartTotal(cart) === 0 ? (
      <div className="cart-empty">
        <p>está vazio...</p>
      </div>
    ) : (
      <>
        <div className="cart-items">
          {Object.keys(cart).map((id) => (
            <CartItem
              key={id}
              id={id}
              title={cart[id].title}
              image={cart[id].image}
              price={cart[id].price}
              amount={cart[id].amount}
              removeItem={removeItem}
              decrease={decrease}
              increase={increase}
            />
          ))}
        </div>

        <footer className="cart-total">
          <h2>Total: R$ {cartTotal(cart).toFixed(2)}</h2>
        </footer>
      </>
    )}
  </aside>
);

export default Cart;
