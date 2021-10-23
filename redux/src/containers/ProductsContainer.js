import { connect } from 'react-redux';
import { getProducts } from '../ducks/products';
import { addItem } from '../ducks/cart';
import Products from '../components/Products';

const mapStateToProps = (state) => ({
  products: state.products.data
});

const mapDispatchToProps = (dispatch) => ({
  getProducts: () => dispatch(getProducts()),
  addItem: (itemCart) => dispatch(addItem(itemCart)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Products);