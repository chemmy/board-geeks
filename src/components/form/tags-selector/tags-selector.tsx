import React from 'react';
import { Select } from 'antd';
import { OptionType, OptionValueType } from 'types/options';
import './styles.scss';

const { Option } = Select;

interface TagsSelectorProps {
  label?: string;
  value: OptionValueType[];
  options: OptionType[];
  onChange: (selected: OptionValueType[]) => void;
}

const TagsSelector = ({ label, value, options, onChange }: TagsSelectorProps) => {
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

      <Select mode="tags" value={value} onChange={onChange}>
        {getOptionsList()}
      </Select>
    </div>
  );
};

export default TagsSelector;
