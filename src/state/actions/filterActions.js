export const TOGGLE_FILTER = 'TOGGLE_FILTER';
export const toggleFilter = (filterType, typeId) => ({
  type: TOGGLE_FILTER, filterType, typeId
});
