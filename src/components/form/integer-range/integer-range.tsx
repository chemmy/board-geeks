import React from 'react';
import { DefaultNumberType } from 'types/input';
import NumericInput from 'components/form/numeric-input/numeric-input';
import './styles.scss';

interface IntegerRangeProps {
  label?: string;
  from: DefaultNumberType;
  to: DefaultNumberType;
  setFrom: (value: DefaultNumberType) => void;
  setTo: (value: DefaultNumberType) => void;
  separator?: string;
}

const IntegerRange = ({ label, from, to, setFrom, setTo, separator = '-' }: IntegerRangeProps) => {
  return (
    <div className="bg-integer-range">
      <div className="field-label">{label}</div>

      <div className="range-group">
        <NumericInput value={from} hideSpinner onChange={setFrom} />
        <span className="range-separator">{separator}</span>
        <NumericInput value={to} hideSpinner onChange={setTo} />
      </div>
    </div>
  );
};

export default IntegerRange;
