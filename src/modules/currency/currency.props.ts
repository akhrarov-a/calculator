import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '@store';
import { Currency } from '@api';
import { getCurrencyData, setSelected, setValues } from './store';

/**
 * Use Currency
 */
const useCurrency = () => {
  const dispatch = useDispatch();

  const { currencies, firstSelected, secondSelected, values } = useSelector(
    (state: State) => state.currency
  );

  const onValuesChange = (
    key: 'first' | 'second',
    value: string | number,
    changedCurrency?: Currency
  ) => {
    if (isNaN(+value)) return;

    switch (key) {
      case 'first': {
        const rate = (changedCurrency?.rate || secondSelected?.rate) as number;

        const second = (+value * rate) / (firstSelected?.rate as number);

        dispatch(setValues({ first: +value, second }));

        break;
      }
      case 'second': {
        const rate = (changedCurrency?.rate || firstSelected?.rate) as number;

        const first = (+value * rate) / (secondSelected?.rate as number);

        dispatch(setValues({ first, second: +value }));

        break;
      }
    }
  };

  const onSelect = (key: 'first' | 'second', value: string) => {
    const currency = currencies.find(({ name }) => name === value);

    if (!currency) return;

    dispatch(setSelected[key](currency));
    onValuesChange(
      key === 'first' ? 'second' : 'first',
      key === 'first' ? values.second : values.first,
      currency
    );
  };

  useEffect(() => {
    dispatch(getCurrencyData());
  }, []);

  return {
    currencies,
    firstSelected,
    secondSelected,
    values,
    onSelect,
    onValuesChange
  };
};

export { useCurrency };
