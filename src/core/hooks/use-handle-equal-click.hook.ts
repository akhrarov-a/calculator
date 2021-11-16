import { useDispatch, useSelector } from 'react-redux';
import { Actions } from '@api';
import { State } from '@store';
import {
  setAction,
  setErrorMessage,
  setIsGotResult,
  setMonitorValue,
  setMonitorValueToChange
} from '@calculator/store';
import { useAddToHistory } from './use-add-to-history.hook';

/**
 * Use Handle Equal Click
 */
const useHandleEqualClick = () => {
  const dispatch = useDispatch();

  const { addHistory } = useAddToHistory();

  const { monitorValue, monitorValueToChange, action } = useSelector(
    (state: State) => state.calculator
  );

  const setError = (errorMessage: string) => {
    dispatch(setErrorMessage(errorMessage));
  };

  const handleEqualClick = () => {
    switch (action) {
      case Actions.PLUS: {
        const result = (
          parseFloat(monitorValueToChange) + parseFloat(monitorValue)
        ).toString();

        dispatch(setMonitorValue(result));
        addHistory(action, result);

        break;
      }

      case Actions.MINUS: {
        const result = (
          parseFloat(monitorValueToChange) - parseFloat(monitorValue)
        ).toString();

        dispatch(setMonitorValue(result));
        addHistory(action, result);

        break;
      }

      case Actions.MULTIPLY: {
        const result = (
          parseFloat(monitorValueToChange) * parseFloat(monitorValue)
        ).toString();

        dispatch(setMonitorValue(result));
        addHistory(action, result);

        break;
      }

      case Actions.DIVIDE: {
        if (parseFloat(monitorValue) === 0) {
          setError("Number isn't divided by zero");
          return;
        }

        const result = (
          parseFloat(monitorValueToChange) / parseFloat(monitorValue)
        ).toString();

        dispatch(setMonitorValue(result));
        addHistory(action, result);

        break;
      }

      case Actions.PERCENTAGE: {
        const result = (
          (parseFloat(monitorValueToChange) * parseFloat(monitorValue)) /
          100
        ).toString();

        dispatch(setMonitorValue(result));
        addHistory(action, result);

        break;
      }

      case Actions.NUMBER_DEGREE: {
        const result = (
          parseFloat(monitorValue.split('^')[0]) **
          parseFloat(monitorValue.split('^')[1])
        ).toString();

        dispatch(setMonitorValue(result));
        addHistory(action, result);

        break;
      }

      case Actions.MOD: {
        const result = (
          parseFloat(monitorValueToChange) % parseFloat(monitorValue)
        ).toString();

        dispatch(setMonitorValue(result));
        addHistory(action, result);

        break;
      }
    }

    dispatch(setMonitorValueToChange('0'));
    dispatch(setAction(null));
    dispatch(setIsGotResult(true));
  };

  return { handleEqualClick, setError };
};

export { useHandleEqualClick };
