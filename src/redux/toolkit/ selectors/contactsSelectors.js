import { createSelector } from "reselect";

export const getLoadingSelector = (state) => state.contacts.loading;
export const getContactsSelector = (state) => state.contacts.items;
export const getFilterSelector = (state) => state.contacts.filter;

export const getFilteredContacts = createSelector(
  [getContactsSelector, getFilterSelector],
  (items, filter) => {
    if (!filter.length) {
      return items;
    } else {
      return items.filter((elem) =>
        elem.name.toLowerCase().includes(filter.toLowerCase())
      );
    }
  }
);
