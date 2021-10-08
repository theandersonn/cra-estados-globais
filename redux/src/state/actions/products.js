import axios from 'axios';
import { GET_PRODUCTS } from '../types';

export const getProducts = () => {
  return function (dispatch) {
    axios
      .get('https://mocki.io/v1/dfc800ff-e9a4-4b1b-8be3-70ee39901835')
      .then((response) => {
        dispatch({ type: GET_PRODUCTS, payload: response.data });
      })
      .catch((error) => console.log('error: ', error.message));
  }
}