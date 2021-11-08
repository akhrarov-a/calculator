import { useDispatch, useSelector } from 'react-redux';
import { State } from '@store';
import { useEffect } from 'react';
import { getCurrencyData, setSelected, setValues } from './store';

/**
 * Use Currency
 */
const useCurrency = () => {
  const dispatch = useDispatch();

  const { currencies, firstSelected, secondSelected, values } = useSelector(
    (state: State) => state.currency
  );

  const onValuesChange = (key: 'first' | 'second', value: string | number) => {
    switch (key) {
      case 'first': {
        const second =
          (+value * (secondSelected?.rate as number)) /
          (firstSelected?.rate as number);

        dispatch(setValues({ first: +value, second }));

        break;
      }
      case 'second': {
        const first =
          (+value * (firstSelected?.rate as number)) /
          (secondSelected?.rate as number);

        dispatch(setValues({ first, second: +value }));

        break;
      }
    }
  };

  const onSelect = (key: 'first' | 'second', index: number) => {
    const currency = currencies.find((_, i) => i === index);

    if (!currency) return;

    dispatch(setSelected[key](currency));
    onValuesChange(
      key === 'first' ? 'second' : 'first',
      key === 'first' ? values.second : values.first
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
