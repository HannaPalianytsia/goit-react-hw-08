import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { IoLogOutOutline } from "react-icons/io5";
import styles from "./UserMenu.module.css";

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleLogout = () => {
    dispatch(logout())
      .unwrap()
      .then(() => {
        iziToast.success({
          position: "topRight",
          message: "Successfully logged out!",
        });
      })
      .catch(() => {
        iziToast.error({
          position: "topRight",
          message: "Logout error.",
        });
      });
  };

  return (
    <div className={styles.userMenu}>
      <p>Welcome, {user.name}</p>
      <button type="button" onClick={handleLogout} className={styles.logoutBtn}>
        <IoLogOutOutline />
      </button>
    </div>
  );
};

export default UserMenu;
