import { connect } from 'react-redux';
import { removeItem, increase, decrease } from '../ducks/cart';
import Cart from '../components/Cart';

const mapStateToProps = (state) => ({
  cart: state.cart
});

const mapDispatchToProps = (dispatch) => ({
  removeItem: (itemId) => dispatch(removeItem(itemId)),
  increase: (itemId) => dispatch(increase(itemId)),
  decrease: (itemId) => dispatch(decrease(itemId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart);