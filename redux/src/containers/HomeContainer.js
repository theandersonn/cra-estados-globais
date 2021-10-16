
   
import { connect } from 'react-redux';
import { getProducts } from '../state/actions/products';
import Home from '../pages/Home';

const mapStateToProps = (state) => ({
  products: state.products.data
});

const mapDispatchToProps = (dispatch) => ({
  getProducts: () => dispatch(getProducts()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);