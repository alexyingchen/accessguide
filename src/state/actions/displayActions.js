export const SET_DARKMODE = 'SET_DARKMODE';
export const setDarkMode = isDarkMode => ({
  type: SET_DARKMODE, isDarkMode
});

export const SET_TYPEFACE = 'SET_TYPEFACE';
export const setTypefaceDefault = isDefaultTypeface => ({
  type: SET_TYPEFACE, isDefaultTypeface
});
