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
   * First selected
   */
  public firstSelected: Currency | null = null;

  /**
   * Second selected
   */
  public secondSelected: Currency | null = null;

  /**
   * Fields
   */
  public values = {
    first: 0,
    second: 0
  };

  /**
   * Error
   */
  public error = '';
}

export { CurrencyState };
