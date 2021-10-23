import axios from 'axios';

// types
// -----
export const Types = {
  GET_PRODUCTS: 'GET_PRODUCTS',
};

// actions creators
// ----------------
export const getProducts = () => {
  return function (dispatch) {
    axios
      .get('https://mocki.io/v1/971e25e2-fff0-4121-8409-d9175018f79b')
      .then((response) => {
        dispatch({ type: Types.GET_PRODUCTS, payload: response.data });
      })
      .catch((error) => console.log('error: ', error.message));
  }
}

// reducers
// --------
export const products = (state = {}, action) => {
  switch (action.type) {
    case Types.GET_PRODUCTS:
      return {
        data: action.payload
      }   
    
    default:
      return state
  }
}