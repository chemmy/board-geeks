import React from 'react';
import { InputNumber } from 'antd';
import './styles.scss';

interface IntegerRangeProps {
  label?: string;
  separator?: string;
}

const IntegerRange = ({ label, separator = '-' }: IntegerRangeProps) => {
  return (
    <div className="bg-integer-range">
      <div className="field-label">{label}</div>

      <div className="range-group">
        <InputNumber min={0} />
        <span className="range-separator">{separator}</span>
        <InputNumber min={0} />
      </div>
    </div>
  );
};

export default IntegerRange;
