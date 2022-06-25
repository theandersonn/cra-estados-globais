import { createContext, useContext, useReducer, useEffect } from 'react';
import axios from 'axios';

const initialState = {
  products: [],
  loading: false,
  error: ''
};

const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'GET_PRODUCTS_BEGIN':
      return { ...state, loading: true }
      case 'GET_PRODUCTS_SUCCESS':
        return { ...state, loading: false, products: action.payload } 
    case 'GET_PRODUCTS_ERROR':
      return { ...state, loading: false, error: action.payload } 
    default:
      return state;      
  }
};

const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getProducts = async (url) => {
    dispatch({ type: 'GET_PRODUCTS_BEGIN' });

    try {
      const response = await axios.get(url);
      dispatch({ type: 'GET_PRODUCTS_SUCCESS', payload: response.data });
    } catch (error) {
      dispatch({ type: 'GET_PRODUCTS_ERROR', payload: error.message });
    }
  };

  useEffect(() => {
    getProducts('https://mocki.io/v1/971e25e2-fff0-4121-8409-d9175018f79b');
  }, []);  

  return (
    <ProductsContext.Provider value={{ ...state }}>
      {children}
    </ProductsContext.Provider>
  );
};

const useProducts = () => useContext(ProductsContext);

export { ProductsProvider, useProducts };