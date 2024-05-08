import { NavLink } from "react-router-dom";
import styles from "./AuthNav.module.css";

const AuthNav = () => {
  return (
    <div className={styles.navigation}>
      <NavLink to="/register" className={styles.navLink}>
        Register
      </NavLink>
      <NavLink to="/login" className={styles.navLink}>
        Log In
      </NavLink>
    </div>
  );
};

export default AuthNav;
