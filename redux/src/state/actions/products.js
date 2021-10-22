import axios from 'axios';
import { GET_PRODUCTS } from '../types';

export const getProducts = () => {
  return function (dispatch) {
    axios
      .get('https://mocki.io/v1/b23a4fbe-0d38-475a-8a5a-8fe7e0115e06')
      .then((response) => {
        dispatch({ type: GET_PRODUCTS, payload: response.data });
      })
      .catch((error) => console.log('error: ', error.message));
  }
}