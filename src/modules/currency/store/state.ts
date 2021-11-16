import { Currency } from '@api';

/**
 * Currency State
 */
class CurrencyState {
  /**
   * Currencies
   */
  public currencies: Currency[] = [];

  /**
   * Selected
   */
  public selected: { left: Currency | null; right: Currency | null } = {
    left: null,
    right: null
  };

  /**
   * Fields
   */
  public fields = {
    left: 0,
    right: 0
  };

  /**
   * Error
   */
  public error = '';
}

export { CurrencyState };
