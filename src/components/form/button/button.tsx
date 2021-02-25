import React from 'react';
import { Button as AntdButton } from 'antd';
import './styles.scss';

interface ButtonProps {
  text: string;
  primary?: boolean;
  secondary?: boolean;
  reversed?: boolean;
  onClick: () => void;
}

const Button = ({ text, primary, secondary, reversed, onClick }: ButtonProps) => {
  const getButtonClass = () => {
    const buttonClassList = ['bg-button'];
    primary && buttonClassList.push('primary');
    secondary && !primary && buttonClassList.push('secondary');
    reversed && buttonClassList.push('reversed');
    return buttonClassList.join(' ');
  };

  return (
    <div className={getButtonClass()}>
      <AntdButton onClick={onClick}>{text}</AntdButton>
    </div>
  );
};

export default Button;
