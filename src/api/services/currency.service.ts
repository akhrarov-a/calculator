import axios from 'axios';

/**
 * Currency Service
 */
class CurrencyService {
  /**
   * Api
   */
  public api = axios.create({
    baseURL: `https://freecurrencyapi.net/api/v2`
  });

  /**
   * Get currency data
   */
  public getCurrencyData = () =>
    this.api({
      method: 'GET',
      url: '/latest?apikey=a597fa00-40ba-11ec-b765-892633fabe74'
    });
}

export { CurrencyService };
