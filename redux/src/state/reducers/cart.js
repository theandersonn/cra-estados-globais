import { ADD_CART } from '../types';

const cart = (state = {}, action) => {
  console.log('action', action);
  switch (action.type) {
    case ADD_CART:
      return {
        data: action.payload
      }   
    
    default:
      return state
  }
}

export default cart;
