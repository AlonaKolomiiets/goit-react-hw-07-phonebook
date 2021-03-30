import { createReducer } from "@reduxjs/toolkit";

import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  changeFilter,
  initialContactsRequest,
  initialContactsSuccess,
  initialContactsError,
} from "../actions/contactsActions";

const initialState = {
  items: [],
  filter: "",
};

const contactsReducers = createReducer(initialState, {
  [addContactSuccess]: (state, { payload }) => ({
    ...state,
    items: [...state.items, payload],
  }),

  [deleteContactSuccess]: (state, { payload }) => ({
    ...state,
    items: state.items.filter((item) => item.id !== payload),
  }),

  [changeFilter]: (state, { payload }) => ({
    ...state,
    filter: payload,
  }),

  [initialContactsSuccess]: (state, { payload }) => ({
    ...state,
    items: payload,
  }),
});

const loading = createReducer(false, {
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
  [initialContactsRequest]: () => true,
  [initialContactsSuccess]: () => false,
  [initialContactsError]: () => false,
});

export default contactsReducers;
