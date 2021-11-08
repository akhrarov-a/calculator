import { ButtonTheme } from './button-theme';
import { ButtonTypes } from './button-types';

/**
 * Base Calculator Button
 */
type BaseCalculatorButton = {
  element: string;
  code: ButtonTypes;
  theme: ButtonTheme;
};

export { BaseCalculatorButton };
