import { connect } from 'react-redux';
import { pathOr } from 'ramda';
import { removeItem, increase, decrease } from '../ducks/cart';
import Cart from '../components/Cart';

const mapStateToProps = (state) => ({
  cart: pathOr({}, ['cart'], state)
});

const mapDispatchToProps = (dispatch) => ({
  removeItem: (itemId) => dispatch(removeItem(itemId)),
  increase: (itemId) => dispatch(increase(itemId)),
  decrease: (itemId) => dispatch(decrease(itemId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart);