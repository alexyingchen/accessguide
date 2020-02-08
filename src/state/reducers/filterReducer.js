const initialState = {
  category: [],
  disability: [],
  wcagLevel: [],
};

const TOGGLE_FILTER = 'TOGGLE_FILTER';
export const toggleFilter = (filterType, typeId) => ({
  type: TOGGLE_FILTER, filterType, typeId
});

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FILTER:
      const filters = state[action.filterType];
      const hasFilter = filters.includes(action.typeId);
      if (hasFilter) {
        return { 
          ...state, 
          [action.filterType]: filters.filter(id => id !== action.typeId),
        };
      }
      return { 
        ...state, 
        [action.filterType]: [...filters, action.typeId]
      };
    default:
      return state;
  }
};