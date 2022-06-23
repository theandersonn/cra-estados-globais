import { connect } from 'react-redux';
import { pathOr } from 'ramda';
import { getProducts } from '../ducks/products';
import { addItem } from '../ducks/cart';
import Products from '../components/Products';

const mapStateToProps = (state) => ({
  products: pathOr([], ['products', 'data'], state),
});

const mapDispatchToProps = (dispatch) => ({
  getProducts: () => dispatch(getProducts()),
  addItem: (itemCart) => dispatch(addItem(itemCart)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Products);