import {
  ADD_CONTACT,
  DELETE_CONTACT,
  CHANGE_FILTER,
  INITIAL_CONTACT,
} from "../../constants/index";
import { createAction } from "@reduxjs/toolkit";

export const addContact = createAction(ADD_CONTACT);

export const deleteContact = createAction(DELETE_CONTACT);

export const changeFilter = createAction(CHANGE_FILTER);

export const initialContacts = createAction(INITIAL_CONTACT);
