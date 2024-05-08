import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";
import { selectFilter } from "../../redux/filters/selectors";
import styles from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const onFilterContacts = (event) =>
    dispatch(changeFilter(event.target.value));

  return (
    <div className={styles.search}>
      <p className={styles.searchText}>Find contacts by name</p>
      <input
        className={styles.searchInput}
        type="text"
        name="search"
        placeholder="Search..."
        value={filter}
        onChange={onFilterContacts}
      />
    </div>
  );
};

export default SearchBox;
