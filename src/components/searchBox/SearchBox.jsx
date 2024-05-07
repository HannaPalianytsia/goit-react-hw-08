import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";
import { selectFilter } from "../../redux/filters/selectors";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const onFilterContacts = (event) =>
    dispatch(changeFilter(event.target.value));

  return (
    <div>
      <p>Find contacts by name</p>
      <input
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
