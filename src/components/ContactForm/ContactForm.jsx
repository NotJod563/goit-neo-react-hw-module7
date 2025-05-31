import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contactsOps.js';
import { selectContacts } from '../../redux/contactsSlice.js';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value.trim();
    const number = form.elements.number.value.trim();

    const duplicate = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (duplicate) {
      alert(`${name} is already in contacts!`);
      return;
    }

    dispatch(addContact({ name, number }));
    form.reset();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" required />
      <input type="tel" name="number" placeholder="Phone number" required />
      <button type="submit">Add contact</button>
    </form>
  );
};

export default ContactForm;
