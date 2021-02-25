import React from 'react';
import { Checkbox } from 'antd';
import { CheckboxValueType } from 'antd/lib/checkbox/Group';
import { OptionType } from 'types/options';
import './styles.scss';

interface CheckboxGroupProps {
  value: CheckboxValueType[];
  options: OptionType[];
  onChange: (checkedValues: CheckboxValueType[]) => void;
}

const CheckboxGroup = ({ value, options, onChange }: CheckboxGroupProps) => {
  return (
    <div className="bg-checkbox-group">
      <Checkbox.Group value={value} options={options} onChange={onChange} />
    </div>
  );
};

export default CheckboxGroup;
