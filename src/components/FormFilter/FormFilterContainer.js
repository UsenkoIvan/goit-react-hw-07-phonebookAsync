import { connect } from "react-redux";
import FormFilter from "./FormFilter";
import { filterContactAction } from "../../redux/contacts/actions";
import * as contactsSelector from "../../redux/contacts/contactsSelector";

const mapStateToProps = (state) => ({
  filter: contactsSelector.onFilterContacts(state),
});

const mapDispatchToProps = (dispatch) => ({
  onFilterContacts: (name) => dispatch(filterContactAction(name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormFilter);
