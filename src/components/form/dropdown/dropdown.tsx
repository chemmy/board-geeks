import React from 'react';
import { Select } from 'antd';
import { OptionType, OptionValueType } from 'types/common';
import './styles.scss';

const { Option } = Select;

interface DropdownProps {
  label?: string;
  options: OptionType[];
  defaultValue?: OptionValueType;
}

const Dropdown = ({ label, options, defaultValue }: DropdownProps) => {
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
    <div className="bg-dropdown">
      <div className="field-label">{label}</div>

      <Select defaultValue={defaultValue}>{getOptionsList()}</Select>
    </div>
  );
};

export default Dropdown;
