import React from 'react';
import { Checkbox } from 'antd';
import { OptionType } from 'types/common';
import './styles.scss';

interface CheckboxGroupProps {
  options: OptionType[];
}

const CheckboxGroup = ({ options }: CheckboxGroupProps) => {
  return (
    <div className="bg-checkbox-group">
      <Checkbox.Group options={options} />
    </div>
  );
};

export default CheckboxGroup;
