import { useDispatch } from "react-redux";
import styles from "./Contact.module.css";
import { FaPhoneAlt, FaUser } from "react-icons/fa";
import { deleteContact } from "../../redux/contacts/operations";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  const onDeleteContact = () =>
    dispatch(deleteContact(id))
      .unwrap()
      .then(() => {
        iziToast.success({
          position: "topRight",
          message: "Сontact deleted successfully!",
        });
      })
      .catch(() => {
        iziToast.error({
          position: "topRight",
          message: "Something is wrong, the contact has not been deleted.",
        });
      });

  return (
    <div className={styles.card}>
      <div className={styles.user}>
        <div className={styles.userInfo}>
          <FaUser size={20} />
          <p>{name}</p>
        </div>
        <div className={styles.userInfo}>
          <FaPhoneAlt />
          <p>{number}</p>
        </div>
      </div>
      <button className={styles.cardBtn} onClick={onDeleteContact}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
