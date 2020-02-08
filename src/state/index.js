import { combineReducers } from 'redux';
import display from './reducers/displayReducer.js';
import filters from './reducers/filterReducer.js';

export default combineReducers({ 
  display,
  filters,
});