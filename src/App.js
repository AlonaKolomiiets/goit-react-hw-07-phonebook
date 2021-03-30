import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { initialContacts } from "./redux/toolkit/operations/contactsOperations";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter/Filter";

const App = () => {
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.contacts.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initialContacts());
  }, []);

  const filterContacts = () => {
    if (!filter.length) {
      return contacts;
    } else {
      return contacts.filter((elem) =>
        elem.name.toLowerCase().includes(filter.toLowerCase())
      );
    }
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList filteredContacts={filterContacts()} />
    </div>
  );
};

export default App;
