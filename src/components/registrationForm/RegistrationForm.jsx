import { useId } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import styles from "./RegistrationForm.module.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(
      register({
        name: values.name,
        email: values.email,
        password: values.password,
      })
    )
      .unwrap()
      .then(() => {
        iziToast.success({
          position: "topRight",
          message: "Successfully registrated!",
        });
      })
      .catch(() => {
        iziToast.error({
          position: "topRight",
          message: "Registration error.",
        });
      });
    actions.resetForm();
  };

  const nameFieldId = useId();
  const emailFieldId = useId();
  const passwordFieldId = useId();

  const ContactSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string()
      .min(7, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    password: Yup.string()
      .min(8, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });

  return (
    <div>
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
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
            <label className={styles.inputLabel} htmlFor={emailFieldId}>
              Email
            </label>
            <Field type="email" name="email" />
            <ErrorMessage name="email" as="span" />
          </div>
          <div className={styles.inputBlock}>
            <label className={styles.inputLabel} htmlFor={passwordFieldId}>
              Password
            </label>
            <Field type="password" name="password" />
            <ErrorMessage name="password" as="span" />
          </div>
          <button className={styles.submitBtn} type="submit">
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;
