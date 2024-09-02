import { ChangeEvent } from 'react';

import styles from './Input.module.css';

interface IInputProps {
  className: string;
  placeholder: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

const Input = ({ placeholder, value, onChange, className }: IInputProps) => {
  return (
    <textarea
      className={`${styles.input} ${className}`}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
