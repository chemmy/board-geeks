import React from 'react';
import { InputNumber } from 'antd';
import { DefaultNumberType, InputNumberType } from 'types/input';
import './styles.scss';
import { validateMinMax } from 'utilities/math-validations';

interface NumericInputProps {
  value: DefaultNumberType;
  label?: string;
  min?: number;
  max?: number;
  hideSpinner?: boolean;
  onChange: (input: DefaultNumberType) => void;
}

const NumericInput = ({ value, label, min = 0, max, hideSpinner, onChange }: NumericInputProps) => {
  const updateParentValue = (input: InputNumberType) => {
    const validatedInput = validateMinMax(input, min, max);
    onChange(validatedInput);
  };

  return (
    <div className="bg-numeric-input">
      {label ? <div className="field-label">{label}</div> : null}

      <InputNumber
        className={hideSpinner ? 'no-spinner' : ''}
        value={value}
        min={min}
        max={max}
        parser={(val) => (validateMinMax(val, min, max) ?? '').toString()}
        onChange={updateParentValue}
      />
    </div>
  );
};

export default NumericInput;
