import { useState, FC } from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

import styles from './Search.module.scss';

interface SearchProps {
  selected?: {};
  updateSelected?: (val) => void;
}

export const Search: FC<SearchProps> = props => {
  const [searchedValue, setSearchedValue] = useState('');

  const onChange = value => {
    console.log(value); // for debugging
    setSearchedValue(value);
    props.updateSelected(value)
  };

  return (
    <OutlinedInput
      className={styles.input}
      placeholder="Search by country/name/username"
      value={searchedValue}
      type="search"
      startAdornment={
        <InputAdornment position="start">
          <SearchIcon />
        </InputAdornment>
      }
      onChange={e => onChange(e.target.value)}
    />
  );
};
