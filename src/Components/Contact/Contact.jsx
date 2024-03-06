import { ImPhone } from 'react-icons/im';
import { ImUser } from 'react-icons/im';
import css from './Contact.module.css';
import { MdOutlineDeleteForever } from 'react-icons/md';

const Contact = ({ data: { id, name, number }, contactDelete }) => {
  return (
    <div className={css.cardsBox}>
      <div className={css.contactBox}>
        <ImUser />
        <p className={css.contactName}>{name}</p>
      </div>

      <div className={css.contactBox}>
        <ImPhone />
        <p className={css.contactName}>{number}</p>
      </div>

      <button
        className={css.btnDelete}
        onClick={() => contactDelete(id)}
        type="button"
      >
        <MdOutlineDeleteForever className={css.btnDeleteImg} />
        Delete
      </button>
    </div>
  );
};
export default Contact;
