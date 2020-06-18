import { createAction } from "@reduxjs/toolkit";
import types from "./types";

export const getContactsStart = createAction(types.getStart);
export const getContactsSuccess = createAction(types.getSuccess);
export const getContactsError = createAction(types.getError);

export const addContactActionStart = createAction(types.ADDStart);
export const addContactActionSuccess = createAction(types.ADDSuccess);
export const addContactActionError = createAction(types.ADDError);

export const deleteContactActionStart = createAction(types.DELETEStart);
export const deleteContactActionSuccess = createAction(types.DELETESuccess);
export const deleteContactActionError = createAction(types.DELETEError);

export const filterContactAction = createAction(types.FILTER);
