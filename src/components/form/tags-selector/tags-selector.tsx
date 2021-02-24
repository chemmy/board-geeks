import React from 'react';
import { Select } from 'antd';
import { OptionType } from 'types/common';
import './styles.scss';

const { Option } = Select;

interface TagsSelectorProps {
  label?: string;
  options: OptionType[];
}

const TagsSelector = ({ label, options }: TagsSelectorProps) => {
  const getOptionsList = () => {
    return (
      <>
        {options.map((option) => (
          <Option key={option.value} value={option.value}>
            {option.label}
          </Option>
        ))}
      </>
    );
  };

  return (
    <div className="bg-tags-selector">
      <div className="field-label">{label}</div>

      <Select mode="tags">{getOptionsList()}</Select>
    </div>
  );
};

export default TagsSelector;
