import css from './SearchBox.module.css';
import { TbDeviceMobileSearch } from 'react-icons/tb';

const SearchBox = ({ value, onFilter }) => {
  return (
    <div className={css.searchContainer}>
      <p className={css.searchParagraf}>Find contacts by name</p>
      <input
        className={css.searchForm}
        type="text"
        value={value}
        onChange={e => onFilter(e.target.value)}
      />
      <TbDeviceMobileSearch className={css.searchImg} width={18} />
    </div>
  );
};
export default SearchBox;
