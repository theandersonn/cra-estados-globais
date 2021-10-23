import axios from 'axios';
import { GET_PRODUCTS } from '../types';

export const getProducts = () => {
  return function (dispatch) {
    axios
      .get('https://mocki.io/v1/971e25e2-fff0-4121-8409-d9175018f79b')
      .then((response) => {
        dispatch({ type: GET_PRODUCTS, payload: response.data });
      })
      .catch((error) => console.log('error: ', error.message));
  }
}