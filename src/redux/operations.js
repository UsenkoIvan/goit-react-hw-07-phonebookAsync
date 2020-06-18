import axios from "axios";
import {
  getContactsStart,
  getContactsSuccess,
  getContactsError,
  addContactActionStart,
  addContactActionSuccess,
  addContactActionError,
  deleteContactActionStart,
  deleteContactActionSuccess,
  deleteContactActionError,
} from "./contacts/actions";

export const fetchAPI = () => async (dispatch) => {
  try {
    dispatch(getContactsStart());
    const fetchDB = await axios.get(" http://localhost:8086/contacts");
    dispatch(getContactsSuccess(fetchDB.data));
  } catch (err) {
    dispatch(getContactsError(err));
  }
};

export const addFetchContact = (contact) => async (dispatch) => {
  try {
    dispatch(addContactActionStart());
    const addContact = await axios.post(
      "http://localhost:8086/contacts",
      contact
    );
    dispatch(addContactActionSuccess(addContact.data));
  } catch (err) {
    dispatch(addContactActionError(err));
  }
};

export const delFetchContact = (id) => async (dispatch) => {
  try {
    dispatch(deleteContactActionStart());
    axios.delete(`http://localhost:8086/contacts/${id}`);
    dispatch(deleteContactActionSuccess(id));
  } catch (err) {
    dispatch(deleteContactActionError(err));
  }
};
