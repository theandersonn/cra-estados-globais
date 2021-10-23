// types
// -----
export const Types = {
  ADD_ITEM: 'ADD_ITEM',
  REMOVE_ITEM: 'REMOVE_ITEM',
  INCREASE: 'INCREASE',
  DECREASE: 'DECREASE'
};

// actions creators
// ----------------
export const addItem = (product) => {
  return {
    type: Types.ADD_ITEM,
    payload: product
  }
}

export const removeItem = (productId) => {
  return {
    type: Types.REMOVE_ITEM,
    payload: productId
  }
}

export const increase = (productId) => {
  return {
    type: Types.INCREASE,
    payload: productId
  }
}

export const decrease = (productId) => {
  return {
    type: Types.DECREASE,
    payload: productId
  }
}

// reducers
// --------
export const cart = (state = {}, action) => {
  switch (action.type) {
    case Types.ADD_ITEM:
      return {
        ...state,
        [action.payload._id]: {
          ...action.payload,
          amount: state[action.payload._id] ? state[action.payload._id].amount + 1 : 1
        }
      }

    case Types.REMOVE_ITEM:
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
    
    case Types.INCREASE:
      return {
        ...state,
        [action.payload]: {
          ...state[action.payload],
          amount: state[action.payload].amount + 1
        }
      };
    
    case Types.DECREASE:
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