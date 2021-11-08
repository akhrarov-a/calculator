import React from 'react';
import { ButtonProps } from './button.props';

/**
 * Renders Button
 */
const Button: React.FC<ButtonProps> = ({ theme, children, ...props }) => (
  <div {...(props as any)}>{children}</div>
);

export { Button };
