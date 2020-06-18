import { combineReducers, createReducer } from "@reduxjs/toolkit";
import {
  getContactsSuccess,
  addContactActionSuccess,
  filterContactAction,
  deleteContactActionSuccess,
} from "./actions";

const initialState = {
  contacts: [],
  filter: "",
};

const contactsReducer = createReducer(initialState.contacts, {
  [getContactsSuccess]: ({ payload }) => payload,
  [addContactActionSuccess]: (state, { payload }) => {
    const isNameExist = state.find(({ name }) => name === payload.name);
    if (isNameExist) {
      alert(`This  contact: ${payload.name} is exist`);
      console.log(state);
      return state;
    }
    return [...state, payload];
  },
  [deleteContactActionSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const contactsFilter = createReducer(initialState.filter, {
  [filterContactAction]: (state, { payload }) => {
    return (state = payload);
  },
});

export const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: contactsFilter,
});
