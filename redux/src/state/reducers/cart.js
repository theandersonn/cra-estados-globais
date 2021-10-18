import { ADD_CART, REMOVE_ITEM } from '../types';

const cart = (state = {}, action) => {
  switch (action.type) {
    case ADD_CART:
      return {
        // copiar todos os itens do estado para dentro desse objejto
        ...state,
        // se o item já estiver no carrinho incrementa a quantidade, caso contrário add o item
        [action.payload._id]: {
          ...action.payload,
          amount: state[action.payload._id] ? state[action.payload._id].amount + 1 : 1
        }
      }
    
    default:
      return state
  }
}

export default cart;
