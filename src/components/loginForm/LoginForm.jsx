import { useId } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import styles from "./LoginForm.module.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { IoLogInOutline } from "react-icons/io5";

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(
      login({
        email: values.email,
        password: values.password,
      })
    )
      .unwrap()
      .then(() => {
        iziToast.success({
          position: "topRight",
          message: "Successfully logged in!",
        });
      })
      .catch(() => {
        iziToast.error({
          position: "topRight",
          message: "The email or password is incorrect.",
        });
      });

    actions.resetForm();
  };

  const emailFieldId = useId();
  const passwordFieldId = useId();

  const ContactSchema = Yup.object().shape({
    email: Yup.string()
      .min(7, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    password: Yup.string()
      .min(7, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });

  return (
    <div>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={ContactSchema}
      >
        <Form className={styles.form}>
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
            Log in
            <IoLogInOutline size={12} />
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;

/*

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      login({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    )
      .unwrap()
      .then(() => {
        console.log("login success");
      })
      .catch(() => {
        console.log("login error");
      });

    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <label>
        Email
        <input type="email" name="email" />
      </label>
      <label>
        Password
        <input type="password" name="password" />
      </label>
      <button type="submit">Log In</button>
    </form>
  );
  */
