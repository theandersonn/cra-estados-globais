import { cart } from '../cart';
import { Types } from '../../ducks/cart';

const product = {
  image:
    'https://images-americanas.b2w.io/produtos/01/00/img/2018999/7/2018999764_3SZ.jpg',
  price: 250.89,
  title: 'Funko Pop The Office Dwight Schrute',
  _id: '2',
};

describe('cart reducer', () => {
  it('should cart be a function', () => {
    expect(typeof cart).toBe('function');
  });

  it('should add a new product', () => {
    const initialState = {};
    const action = {
      type: Types.ADD_ITEM,
      payload: product,
    };
    const after = { 2: { ...product, amount: 1 } };

    expect(cart(initialState, action)).toEqual(after);
  });

  it('should remove the product entered by id', () => {
    const initialState = { 2: { ...product, amount: 1 } };
    const action = {
      type: Types.REMOVE_ITEM,
      payload: '2',
    };
    const after = {};

    expect(cart(initialState, action)).toEqual(after);
  });

  it('should increase amount product', () => {
    const initialState = { 2: { ...product, amount: 1 } };
    const action = {
      type: Types.INCREASE,
      payload: '2',
    };
    const after = { 2: { ...product, amount: 2 } };

    expect(cart(initialState, action)).toEqual(after);
  });

  it('should decrease amount product', () => {
    const initialState = { 2: { ...product, amount: 2 } };
    const action = {
      type: Types.DECREASE,
      payload: '2',
    };
    const after = { 2: { ...product, amount: 1 } };

    expect(cart(initialState, action)).toEqual(after);
  });
  
  it('should remove the product if the amount is equal to 1', () => {
    const initialState = { 2: { ...product, amount: 1 } };
    const action = {
      type: Types.DECREASE,
      payload: '2',
    };
    const after = {};

    expect(cart(initialState, action)).toEqual(after);
  })
});
