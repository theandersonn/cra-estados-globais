import { connect } from 'react-redux';
import { getProducts } from '../state/actions/products';
import { addItem } from '../state/actions/cart';
import Products from '../components/Products';

const mapStateToProps = (state) => ({
  products: state.products.data
});

const mapDispatchToProps = (dispatch) => ({
  getProducts: () => dispatch(getProducts()),
  addItem: (itemCart) => dispatch(addItem(itemCart)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Products);