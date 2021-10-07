import { SIMPLE_ACTION_ONE_A, SIMPLE_ACTION_ONE_B } from '../types'

const initialStore = {
  result: 'not clicked',
}

const simpleOne = (state = initialStore, action) => {
  switch (action.type) {
    case SIMPLE_ACTION_ONE_A:
      return {
        result: action.payload
      }

    case SIMPLE_ACTION_ONE_B:
      return {
        result: action.payload
      }      
    
    default:
      return state
  }
}

export default simpleOne;