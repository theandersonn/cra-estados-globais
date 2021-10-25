import { cart } from '../cart';
import { Types } from '../../ducks/cart';

describe('cart reducer', () => {
  it('should cart be a function', () => {
    expect(typeof cart).toBe('function');
  });

  it('should add a new product', () => {
    const product = {
      image:
        'https://images-americanas.b2w.io/produtos/01/00/img/2018999/7/2018999764_3SZ.jpg',
      price: 250.89,
      title: 'Funko Pop The Office Dwight Schrute',
      _id: '2',
    };
    const initialState = {};
    const action = {
      type: Types.ADD_ITEM,
      payload: product,
    };
    const after = { 2: { ...product, amount: 1 } };

    expect(cart(initialState, action)).toEqual(after);
  });
});
