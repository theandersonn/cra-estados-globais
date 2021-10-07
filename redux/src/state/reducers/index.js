import { combineReducers } from 'redux';
import simpleOne from './simpleOne';
import simpleTwo from './simpleTwo';

const reducers = combineReducers({
  simpleOne,
  simpleTwo,
});

export default reducers;