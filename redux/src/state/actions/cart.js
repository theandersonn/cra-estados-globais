import { ADD_ITEM } from "../types";

export const addCart = (product) => {
  return {
    type: ADD_ITEM,
    payload: product
  }
}