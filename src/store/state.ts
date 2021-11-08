import { CalculatorState } from '@calculator/store';
import { CurrencyState } from '@currency/store';

/**
 * App State
 */
type State = {
  calculator: CalculatorState;
  currency: CurrencyState;
};

export type { State };
