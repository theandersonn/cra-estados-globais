import { SIMPLE_ACTION_TWO_A, SIMPLE_ACTION_TWO_B } from '../types'

const initialStore = {
  result: 'not clicked',
}

const simpleTwo = (state = initialStore, action) => {
  switch (action.type) {
    case SIMPLE_ACTION_TWO_A:
      return {
        result: action.payload
      }

    case SIMPLE_ACTION_TWO_B:
      return {
        result: action.payload
      }      
    
    default:
      return state
  }
}

export default simpleTwo;