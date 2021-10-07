import { SIMPLE_ACTION_TWO_A, SIMPLE_ACTION_TWO_B } from '../types';

export const simpleActionTwoA = () => {
  return {
    type: SIMPLE_ACTION_TWO_A,
    payload: 'result_of_simple_action_two_a'
  };
};

export const simpleActionTwoB = () => {
  return {
    type: SIMPLE_ACTION_TWO_B,
    payload: 'result_of_simple_action_two_b'
  };
};