import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux";
import FormAddContacts from "./FormAddContacts/FormAddContactsContainer";
import FormFilter from "./FormFilter/FormFilterContainer";
import ContactList from "./ContactList/ContactListContainer";
import styles from "./app.module.css";
import slideLeft from "../transition/slideLeft.module.css";
import { fetchAPI } from "../redux/operations";
import * as contactsSelector from "../redux/contacts/contactsSelector";

class App extends Component {
  state = {
    isRenderTransition: false,
  };

  componentDidMount() {
    this.props.getFetchAPI();
    this.setState({
      isRenderTransition: true,
    });
  }

  render() {
    const { isRenderTransition } = this.state;
    const { contacts } = this.props;

    return (
      <div className={styles.container}>
        <CSSTransition
          in={isRenderTransition}
          timeout={500}
          classNames={slideLeft}
          unmountOnExit
        >
          <h2 className={styles.title}>Phonebook</h2>
        </CSSTransition>

        <FormAddContacts />

        {contacts.length > 0 && (
          <>
            <FormFilter />
            <ContactList />
          </>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  contacts: contactsSelector.getContacts(state),
  filter: "",
});

const mapDispatchToProps = (dispatch) => ({
  getFetchAPI: () => dispatch(fetchAPI()),
});

// const mapDispatchToProps = {  // те само, що і mapDispatchToProps тільки потрібно буде помінять в CDM на fetchAPI, также можна робить і в других компонентах
//   fetchAPI,
// };

export default connect(mapStateToProps, mapDispatchToProps)(App);
