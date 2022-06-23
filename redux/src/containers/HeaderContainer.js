import { connect } from 'react-redux';
import { pathOr } from 'ramda';
import Header from '../components/Header';

const mapStateToProps = (state) => ({
  products: pathOr([], ['products', 'data'], state),
  cart: pathOr({}, ['cart'], state),
});

export default connect(mapStateToProps)(Header);