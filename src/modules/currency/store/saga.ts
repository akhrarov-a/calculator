import { Payload, Saga } from 'redux-chill';
import { call, put } from 'redux-saga/effects';
import { getCurrencyData } from './actions';
import { StoreContext } from '@store';

/**
 * Currency Saga
 */
class CurrencySaga {
  /**
   * Get currency data
   */
  @Saga(getCurrencyData)
  public *getCurrencyData(
    _: Payload<typeof getCurrencyData>,
    { currency }: StoreContext
  ) {
    try {
      const response = yield call(currency.getCurrencyData);

      const currencies = Object.entries(response.data.data);

      yield put(
        getCurrencyData.success(
          currencies.map(([currency, rate]) => ({
            name: currency,
            rate: rate as number
          }))
        )
      );
    } catch (err: any) {
      yield put(getCurrencyData.fail(err.message));
    }
  }
}

export { CurrencySaga };
