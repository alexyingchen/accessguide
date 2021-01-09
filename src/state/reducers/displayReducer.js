import { SET_DARKMODE, SET_TYPEFACE } from '../actions/displayActions';

const initialState = {
  isDefaultTypeface: true,
  isDarkMode: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_DARKMODE:
      return { ...state, isDarkMode: action.isDarkMode };
    case SET_TYPEFACE:
      return { ...state, isDefaultTypeface: action.isDefaultTypeface };
    default:
      return state;
  }
};
