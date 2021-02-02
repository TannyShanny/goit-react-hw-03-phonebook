import React from "react";
import styles from "./ContactList.module.css";

const ContactList = ({ contacts, onRemoveContact }) => {
  return (
    <ul className={styles.contact_list}>
      {contacts.map((contact) => (
        <li className={styles.list_item} key={contact.id}>
          {`${contact.name} : ${contact.number}`}
          {
            <button
              className={styles.list_button}
              type="button"
              name="delete"
              onClick={() => onRemoveContact(contact.id)}
            >
              Delete
            </button>
          }
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
