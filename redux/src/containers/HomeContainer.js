
   
import { connect } from 'react-redux';
import { getProducts } from '../state/actions/products';
import { addItem, removeItem, increase, decrease } from '../state/actions/cart';
import Home from '../pages/Home';

const mapStateToProps = (state) => ({
  products: state.products.data,
  cart: state.cart
});

const mapDispatchToProps = (dispatch) => ({
  getProducts: () => dispatch(getProducts()),
  addItem: (itemCart) => dispatch(addItem(itemCart)),
  removeItem: (itemId) => dispatch(removeItem(itemId)),
  increase: (itemId) => dispatch(increase(itemId)),
  decrease: (itemId) => dispatch(decrease(itemId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);