import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

const ContactList = ({ userData, contactDelete }) => {
  return (
    <ul className={css.contactsList}>
      {userData.map(contact => (
        <li className={css.contactItem} key={contact.id}>
          <Contact data={contact} contactDelete={contactDelete} />
        </li>
      ))}
    </ul>
  );
};
export default ContactList;
