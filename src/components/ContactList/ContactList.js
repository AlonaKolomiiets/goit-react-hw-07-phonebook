import React from "react";
import ContactListItem from "./ContactListItem";
import PropTypes from "prop-types";

const ContactList = ({ filteredContacts }) => {
  return (
    <ul>
      {filteredContacts.map((contact) => (
        <ContactListItem
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.number}
        />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  filteredContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ContactList;
