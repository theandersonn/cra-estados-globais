
   
import { connect } from 'react-redux';
import { getProducts } from '../state/actions/products';
import { addCart } from '../state/actions/cart';
import Home from '../pages/Home';

const mapStateToProps = (state) => ({
  products: state.products.data,
  cart: state.cart
});

const mapDispatchToProps = (dispatch) => ({
  getProducts: () => dispatch(getProducts()),
  addCart: (itemCart) => dispatch(addCart(itemCart))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);