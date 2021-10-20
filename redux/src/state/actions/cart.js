import { ADD_ITEM, DECREASE, INCREASE, REMOVE_ITEM } from "../types";

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

export const increase = (productId) => {
  return {
    type: INCREASE,
    payload: productId
  }
}

export const decrease = (productId) => {
  return {
    type: DECREASE,
    payload: productId
  }
}