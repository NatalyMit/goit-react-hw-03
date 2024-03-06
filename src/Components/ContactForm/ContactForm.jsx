import { Formik, Form, Field, ErrorMessage } from 'formik';
import { MdOutlineGroupAdd } from 'react-icons/md';

import * as Yup from 'yup';
import css from './ContactForm.module.css';
import { nanoid } from 'nanoid';

const ContactForm = ({ onAdd }) => {
  const nameField = nanoid();
  const numberField = nanoid();

  const contactSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    number: Yup.string()
      .min(3, 'Too short')
      .max(50, 'Too long')
      .required('Required'),
  });

  const handleSubmit = (values, actions) => {
    onAdd({
      id: nanoid(),
      name: values.name,
      number: values.number,
    });
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      onSubmit={handleSubmit}
      validationSchema={contactSchema}
    >
      <Form className={css.formBox}>
        <label className={css.formLabel} htmlFor={nameField}>
          Name
        </label>
        <Field
          className={css.formField}
          name="name"
          type="text"
          id={nameField}
          placeholder="Anna Schmidt"
        />
        <div>
          <ErrorMessage name="name" as="span" />
        </div>

        <label className={css.formLabel} htmlFor={numberField}>
          Number
        </label>
        <Field
          className={css.formField}
          name="number"
          type="number"
          id={numberField}
          placeholder="123-45-67"
        />
        <div>
          <ErrorMessage name="number" as="span" />
        </div>

        <button className={css.btnAdd} type="submit">
          <MdOutlineGroupAdd className={css.btnImg} />
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
