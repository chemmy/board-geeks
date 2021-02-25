import React from 'react';
import { Select } from 'antd';
import { OptionType, OptionValueType } from 'types/options';
import './styles.scss';

const { Option } = Select;

interface DropdownProps {
  label?: string;
  value: string | number | undefined;
  options: OptionType[];
  defaultValue?: OptionValueType;
  onChange: (selected: OptionValueType) => void;
}

const Dropdown = ({ label, value, options, defaultValue, onChange }: DropdownProps) => {
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

      <Select value={value} defaultValue={defaultValue} onChange={onChange}>
        {getOptionsList()}
      </Select>
    </div>
  );
};

export default Dropdown;
