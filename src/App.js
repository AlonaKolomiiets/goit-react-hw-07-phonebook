import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { initialContacts } from "./redux/toolkit/operations/contactsOperations";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter/Filter";
import {
  getLoadingSelector,
} from "./redux/toolkit/ selectors/contactsSelectors";

const App = () => {
  // const contacts = useSelector((store) => store.contacts.items);
  // const filter = useSelector((store) => store.contacts.filter);

  //  const loading = useSelector((store) => store.contacts.loading);
  const loading = useSelector(getLoadingSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initialContacts());
  }, []);

  // const filteredContacts = useSelector((store) => getFilteredContacts(store));

  // const filterContacts = () => {
  //   if (!filter.length) {
  //     return contacts;
  //   } else {
  //     return contacts.filter((elem) =>
  //       elem.name.toLowerCase().includes(filter.toLowerCase())
  //     );
  //   }
  // };

  return (
    <div>
      {loading && <h2>Loading...</h2>}
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

export default App;
