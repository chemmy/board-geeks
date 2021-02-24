import React from 'react';
import { Input } from 'antd';
import './styles.scss';

const { Search } = Input;

const SearchInput = () => {
  return (
    <div className="bg-search-input">
      <Search placeholder="Search" />
    </div>
  );
};

export default SearchInput;
