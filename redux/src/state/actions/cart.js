import { ADD_ITEM, REMOVE_ITEM } from "../types";

export const addItem = (product) => {
  return {
    type: ADD_ITEM,
    payload: product
  }
}

export const removeItem = (productId) => {
  return {
    type: REMOVE_ITEM,
    payload: productId
  }
}