import { TOGGLE_FILTER } from '../actions/filterActions';

const initialState = {
  category: [],
  disability: [],
  wcagLevel: [],
};

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