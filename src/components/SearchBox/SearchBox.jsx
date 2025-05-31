import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice.js';
import styles from './SearchBox.module.css';

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleChange = e => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <input
      className={styles.input}
      type="text"
      value={filter}
      onChange={handleChange}
      placeholder="Search contacts"
    />
  );
};

export default SearchBox;
