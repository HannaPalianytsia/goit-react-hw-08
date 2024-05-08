import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(addContact({ name: values.name, number: values.number }))
      .unwrap()
      .then(() => {
        iziToast.success({
          position: "topRight",
          message: "Сontact added successfully!",
        });
      })
      .catch(() => {
        iziToast.error({
          position: "topRight",
          message: "Something is wrong, the contact has not been added.",
        });
      });
    actions.resetForm();
  };

  const nameFieldId = useId();
  const numberFieldId = useId();

  const ContactSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });

  return (
    <div>
      <Formik
        initialValues={{ name: "", number: "" }}
        onSubmit={handleSubmit}
        validationSchema={ContactSchema}
      >
        <Form className={styles.form}>
          <div className={styles.inputBlock}>
            <label className={styles.inputLabel} htmlFor={nameFieldId}>
              Name
            </label>
            <Field type="text" name="name" />
            <ErrorMessage name="name" as="span" />
          </div>
          <div className={styles.inputBlock}>
            <label className={styles.inputLabel} htmlFor={numberFieldId}>
              Number
            </label>
            <Field type="text" name="number" />
            <ErrorMessage name="number" as="span" />
          </div>
          <button className={styles.submitBtn} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
