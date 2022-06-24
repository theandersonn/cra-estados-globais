import { createContext, useEffect, useReducer } from 'react';
import axios from 'axios';
import { productsReducer } from '../reducers/products';
import {
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR
} from '../actions';

const initialState = {
  products: [],
  loading: false,
  error: ''
};

const Context = createContext();

const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productsReducer, initialState);

  const fetchProducts = async (url) => {
    dispatch({ type: GET_PRODUCTS_BEGIN });

    try {
      const response = await axios.get(url);
      dispatch({ type: GET_PRODUCTS_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: GET_PRODUCTS_ERROR, payload: error.message });
    }
  };

  useEffect(() => {
    fetchProducts('https://mocki.io/v1/971e25e2-fff0-4121-8409-d9175018f79b');
  }, []);
  
  return (
    <Context.Provider value={{ ...state }}>
      { children }
    </Context.Provider>
  ) 
};

export { Context, ProductsProvider };