import { useSelector } from "react-redux";
import Contact from "../contact/Contact";
import styles from "./ContactList.module.css";
import { selectFilteredContacts } from "../../redux/contacts/slice";

const ContactList = () => {
  const visibleContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={styles.contactList}>
      {visibleContacts.map(({ name, number, id }) => (
        <li key={id} className={styles.card}>
          <Contact number={number} name={name} id={id} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
