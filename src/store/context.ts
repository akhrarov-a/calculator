import { CurrencyService } from '@api';

/**
 * Get Context
 */

const getContext = () => ({
  currency: new CurrencyService()
});

/**
 * Store Context
 */
type StoreContext = ReturnType<typeof getContext>;

export { getContext };
export type { StoreContext };
