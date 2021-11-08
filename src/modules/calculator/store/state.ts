/**
 * Calculator State
 */
import { ButtonTypes } from '../../../api';

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
}

export { CalculatorState };
