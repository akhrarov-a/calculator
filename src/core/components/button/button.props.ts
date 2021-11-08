import React from 'react';
import { ButtonTheme } from '@api';

/**
 * Button Props
 */
type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  theme: ButtonTheme;
};

export { ButtonProps };
