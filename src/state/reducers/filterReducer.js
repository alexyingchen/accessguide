const initialState = {
  category: [],
  subcategory: [],
  disability: [],
  wcagNumber: [],
};

const TOGGLE_FILTER = 'TOGGLE_FILTER';

export const toggleFilter = (filterType, typeId) => ({
  type: TOGGLE_FILTER, filterType, typeId
});

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FILTER:
      const hasFilter = state[action.filterType].includes(action.typeId);
      return { 
        ...state, 
        [action.filterType]: state[action.filterType].filter(item => {

        }
      };
    default:
      return state;
  }
};