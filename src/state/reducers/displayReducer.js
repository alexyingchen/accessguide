const initialState = {
  isDefaultTypeface: true,
  isDarkMode: null,
};

const SET_DARKMODE = 'SET_DARKMODE';
export const setDarkMode = isDarkMode => ({
  type: SET_DARKMODE, isDarkMode
});

const SET_TYPEFACE = 'SET_TYPEFACE';
export const setTypefaceDefault = isDefaultTypeface => ({
  type: SET_TYPEFACE, isDefaultTypeface
});

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
