import React from 'react';
import { ButtonProps } from './button.props';
import styles from './button.module.scss';
import classNames from 'classnames';

/**
 * Renders Button
 */
const Button: React.FC<ButtonProps> = ({ theme, children, ...props }) => (
  <div
    className={classNames(styles.button, styles[`button-theme-${theme}`])}
    {...(props as any)}
  >
    {children}
  </div>
);

export { Button };
