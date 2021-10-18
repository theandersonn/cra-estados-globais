
   
import { connect } from 'react-redux';
import { getProducts } from '../state/actions/products';
import { addItem, removeItem } from '../state/actions/cart';
import Home from '../pages/Home';

const mapStateToProps = (state) => ({
  products: state.products.data,
  cart: state.cart
});

const mapDispatchToProps = (dispatch) => ({
  getProducts: () => dispatch(getProducts()),
  addItem: (itemCart) => dispatch(addItem(itemCart)),
  removeItem: (itemId) => dispatch(removeItem(itemId)) 
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);