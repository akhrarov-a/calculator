import { calculatorReducer } from '@calculator/store';
import { currencyReducer } from '@currency/store';

/**
 * Root Reducer
 */
const rootReducer = {
  calculator: calculatorReducer,
  currency: currencyReducer
};

export { rootReducer };
