const initialState = {
  isDarkMode: null,
};

const SET_DARKMODE = 'SET_DARKMODE';
export const setDarkMode = isDarkMode => ({
  type: SET_DARKMODE, isDarkMode
});
export default (state = initialState, action) => {
  switch (action.type) {
    case SET_DARKMODE:
      return { ...state, isDarkMode: action.isDarkMode };
    default:
      return state;
  }
};