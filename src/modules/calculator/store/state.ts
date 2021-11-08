import { ButtonTypes } from '@api';

/**
 * Calculator State
 */
class CalculatorState {
  /**
   * Monitor value
   */
  public monitorValue = 0;

  /**
   * Monitor value to change
   */
  public monitorValueToChange = 0;

  /**
   * Action
   */
  public action: ButtonTypes | null = null;

  /**
   * Is got result
   */
  public isGotResult = false;

  /**
   * Error Message
   */
  public errorMessage = '';
}

export { CalculatorState };
