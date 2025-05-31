import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contactsSlice.js';
import Contact from '../Contact/Contact.jsx';
import styles from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <ul className={styles.list}>
      {contacts.map(contact => (
        <li key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
