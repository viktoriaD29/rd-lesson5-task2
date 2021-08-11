import { createSelector } from 'reselect'

export const optionsListSelector = (state) => {
  return state.options.optionsList;
};

export const selectedSelector = (state) => {
  return state.options.selected;
};

// export const selectedOptionsSelector = (state) => {
//   const allOptionsList = optionsListSelector(state);
//   const selectedIds = selectedSelector(state);

//   return allOptionsList.filter((option) => selectedIds.includes(option.id));
// };

export const selectedOptionsSelector = createSelector(
  [optionsListSelector, selectedSelector],
  (allOptionsList, selectedIds) => {
    return allOptionsList.filter((option) => selectedIds.includes(option.id));
  }
);

// export const availableOptionsSelector = (state) => {
//   const allOptionsList = optionsListSelector(state);
//   const selectedIds = selectedSelector(state);

//   return allOptionsList.filter((option) => !selectedIds.includes(option.id));
// };

export const availableOptionsSelector = createSelector(
  [optionsListSelector, selectedSelector],
  (allOptionsList, selectedIds) => {
    return allOptionsList.filter((option) => !selectedIds.includes(option.id));
  }
);
