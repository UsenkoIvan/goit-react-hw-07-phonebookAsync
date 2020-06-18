import { connect } from "react-redux";
import ContactList from "./ContactList";
import { delFetchContact } from "../../redux/operations";
import * as contactsSelector from "../../redux/contacts/contactsSelector";

const mapStateToProps = (state) => ({
  contacts: contactsSelector.getContacts(state),
  filter: contactsSelector.onFilterContacts(state),
});

const mapDispatchToProps = (dispatch) => ({
  onDelete: (id) => dispatch(delFetchContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
