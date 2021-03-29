import React from "react";
import { useSelector } from "react-redux";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter/Filter";

const App = () => {
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.contacts.filter);
  // const dispatch = useDispatch();

  // const inputHandler = ({ target }) => {
  //   const { value } = target;

  //   dispatch(changeFilter(value));
  // };

  // useEffect(() => {
  //   try {
  //     const contactsLocalStorage = localStorage.getItem("contacts");

  //     contactsLocalStorage &&
  //       dispatch(initialContacts(JSON.parse(contactsLocalStorage)));
  //   } catch {
  //     console.log("Невалидный JSON");
  //   }
  // }, []);

  const filterContacts = () => {
    if (!filter.length) {
      return contacts;
    } else {
      return contacts.filter((elem) =>
        elem.name.toLowerCase().includes(filter.toLowerCase())
      );
    }
  };
  // const uniqueContact = (name) => {
  //   return contacts.some(
  //     (contact) => contact.name.toLowerCase() === name.toLowerCase()
  //   );
  // };

  // const add = (contactObj) => {
  //   uniqueContact(contactObj.name)
  //     ? alert(`${contactObj.name} is already in contacts`)
  //     : dispatch(addContact(contactObj));
  // };

  // const deleteContacts = (id) => {
  //   dispatch(deleteContact(id));
  // };

  // useEffect(() => {
  //   localStorage.setItem("contacts", JSON.stringify(contacts));
  // }, [contacts]);

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
