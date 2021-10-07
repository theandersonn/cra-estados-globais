import { SIMPLE_ACTION_ONE_A, SIMPLE_ACTION_ONE_B } from '../types';

export const simpleActionOneA = () => {
  return {
    type: SIMPLE_ACTION_ONE_A,
    payload: 'result_of_simple_action_one_a'
  };
};

export const simpleActionOneB = () => {
  return {
    type: SIMPLE_ACTION_ONE_B,
    payload: 'result_of_simple_action_one_b'
  };
};