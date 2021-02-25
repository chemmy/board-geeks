import React from 'react';
import { Input } from 'antd';
import './styles.scss';

const { Search } = Input;

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  onSearch: () => void;
}

const SearchInput = ({ value, onSearch, onChange }: SearchInputProps) => {
  return (
    <div className="bg-search-input">
      <Search
        placeholder="Search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onSearch={onSearch}
        onPressEnter={onSearch}
      />
    </div>
  );
};

export default SearchInput;
