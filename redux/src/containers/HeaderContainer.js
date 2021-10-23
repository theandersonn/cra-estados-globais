import { connect } from 'react-redux';
import Header from '../components/Header';

const mapStateToProps = (state) => ({
  products: state.products.data,
  cart: state.cart
});

export default connect(mapStateToProps)(Header);