import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps.js';
import styles from './Contact.module.css';

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.item}>
      <span>
        {contact.name}: {contact.number}
      </span>
      <button onClick={() => dispatch(deleteContact(contact.id))}>Delete</button>
    </div>
  );
};

export default Contact;
