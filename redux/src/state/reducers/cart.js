import { ADD_ITEM, DECREASE, INCREASE, REMOVE_ITEM } from '../types';

const cart = (state = {}, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        // copiar todos os itens do estado para dentro desse objejto
        ...state,
        // se o item já estiver no carrinho incrementa a quantidade, caso contrário add o item
        [action.payload._id]: {
          ...action.payload,
          amount: state[action.payload._id] ? state[action.payload._id].amount + 1 : 1
        }
      }

    case REMOVE_ITEM:
      return Object.keys(state).reduce(function(acc, productId) {
          return {
            ...acc,
            ...(
              productId === action.payload
                ? {}
                : {[productId]: state[productId]}
              )
          }
        }, {});
    
    case INCREASE:
      return {
        ...state,
        [action.payload]: {
          ...state[action.payload],
          amount: state[action.payload].amount + 1
        }
      };
    
    case DECREASE:
      return (state[action.payload].amount > 1)
      ? {
        ...state,
        [action.payload]: {
          ...state[action.payload],
          amount: state[action.payload].amount - 1
        }
      }
      : Object.keys(state).reduce(function(acc, productId) {
        return {
          ...acc,
          ...(
            productId === action.payload
              ? {}
              : {[productId]: state[productId]}
            )
        }
      }, {});      
    
    default:
      return state
  }
}

export default cart;
