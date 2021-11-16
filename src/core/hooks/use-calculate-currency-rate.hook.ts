import { useDispatch } from 'react-redux';
import { Currency, CurrencySides } from '@api';
import { setFields } from '@currency/store';

/**
 * Use Calculate Currency Rate
 */
const useCalculateCurrencyRate = () => {
  const dispatch = useDispatch();

  const calculateResults = ({
    key,
    left,
    right,
    value
  }: {
    key: CurrencySides;
    left: Currency | null;
    right: Currency | null;
    value: string | number;
  }) => {
    switch (key) {
      case CurrencySides.LEFT: {
        const rate = right?.rate as number;

        const rightValue = (+value * rate) / (left?.rate as number);

        dispatch(setFields({ left: +value, right: rightValue }));

        break;
      }

      case CurrencySides.RIGHT: {
        const rate = left?.rate as number;

        const leftValue = (+value * rate) / (right?.rate as number);

        dispatch(setFields({ left: leftValue, right: +value }));

        break;
      }
    }
  };

  return { calculateResults };
};

export { useCalculateCurrencyRate };
