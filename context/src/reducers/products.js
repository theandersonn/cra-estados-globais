import {
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR
} from '../actions';

export const productsReducer = (state, action) => {
  if (action.type === GET_PRODUCTS_BEGIN) {
    return { ...state, loading: true };
  }

  if (action.type === GET_PRODUCTS_SUCCESS) {
    return { ...state, loading: false, products: action.payload };
  }

  if (action.type === GET_PRODUCTS_ERROR) {
    return { ...state, loading: false, error: action.payload };
  }
};