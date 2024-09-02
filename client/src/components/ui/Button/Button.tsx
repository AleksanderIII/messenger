import { MouseEvent } from 'react';

import styles from './Button.module.css';

interface IButtonProps {
  className: string;
  onClickHandler: (event: MouseEvent<HTMLButtonElement>) => void;
  children: string;
}

const Button = ({ onClickHandler, className, children }: IButtonProps) => {
  return (
    <button
      className={`${className} ${styles.button}`}
      onClick={onClickHandler}
    >
      {children}
    </button>
  );
};

export default Button;
