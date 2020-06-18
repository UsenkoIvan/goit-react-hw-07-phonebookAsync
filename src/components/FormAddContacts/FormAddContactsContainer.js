import { connect } from "react-redux";
import Form from "./FormAddContacts";
import { addFetchContact } from "../../redux/operations";

const mapDispatchToProps = (dispatch) => ({
  onAddContacts: (contact) => dispatch(addFetchContact(contact)),
});

export default connect(null, mapDispatchToProps)(Form);
