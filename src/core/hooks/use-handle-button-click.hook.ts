import { useDispatch, useSelector } from 'react-redux';
import { Actions, ButtonTypes } from '@api';
import { State } from '@store';
import {
  addToHistory,
  clearHistory,
  setAction,
  setErrorMessage,
  setIsGotResult,
  setMonitorValue,
  setMonitorValueToChange
} from '@calculator/store';
import { useGetActionSign } from './use-get-action-sign.hook';

/**
 * Use Handle Button Click
 */
const useHandleButtonClick = () => {
  const dispatch = useDispatch();

  const { monitorValue, monitorValueToChange, action, isGotResult } =
    useSelector((state: State) => state.calculator);

  const { getActionSign } = useGetActionSign();

  const addHistory = (code: ButtonTypes, result: number) => {
    dispatch(
      addToHistory({
        action: getActionSign(code as Actions) as string,
        firstValue: monitorValueToChange,
        secondValue: monitorValue,
        result
      })
    );
  };

  const setError = (errorMessage: string) => {
    dispatch(setErrorMessage(errorMessage));
  };

  const handleEqualClick = () => {
    switch (action) {
      case Actions.PLUS: {
        const result = monitorValueToChange + monitorValue;

        dispatch(setMonitorValue(result));
        addHistory(action, result);

        break;
      }

      case Actions.MINUS: {
        const result = monitorValueToChange - monitorValue;

        dispatch(setMonitorValue(result));
        addHistory(action, result);

        break;
      }

      case Actions.MULTIPLY: {
        const result = monitorValueToChange * monitorValue;

        dispatch(setMonitorValue(result));
        addHistory(action, result);

        break;
      }

      case Actions.DIVIDE: {
        if (monitorValue === 0) {
          setError("Number isn't divided by zero");
          return;
        }

        const result = monitorValueToChange / monitorValue;

        dispatch(setMonitorValue(result));
        addHistory(action, result);

        break;
      }

      case Actions.PERCENTAGE: {
        const result = (monitorValueToChange * monitorValue) / 100;

        dispatch(setMonitorValue(result));
        addHistory(action, result);

        break;
      }
    }

    dispatch(setMonitorValueToChange(0));
    dispatch(setAction(null));
    dispatch(setIsGotResult(true));
  };

  const handleClick = (code: ButtonTypes) => {
    setError('');

    switch (true) {
      case !isNaN(+code): {
        let value = `${monitorValue}${code}`;

        if (isGotResult) {
          value = value.replace(`${monitorValue}`, '');
          dispatch(setIsGotResult(false));
        }

        dispatch(setMonitorValue(+value));
        break;
      }

      case code === Actions.EQUAL: {
        handleEqualClick();
        break;
      }

      case code === Actions.PLUS: {
        const result = monitorValueToChange + monitorValue;

        dispatch(setMonitorValueToChange(result));
        dispatch(setAction(code));
        dispatch(setMonitorValue(0));
        if (!!monitorValueToChange) {
          addHistory(code, result);
        }

        break;
      }

      case code === Actions.MINUS: {
        if (!!monitorValueToChange) {
          const result = monitorValueToChange - monitorValue;

          dispatch(setMonitorValueToChange(result));
          addHistory(code, result);
        } else {
          dispatch(setMonitorValueToChange(monitorValue));
        }

        dispatch(setMonitorValue(0));
        dispatch(setAction(code));

        break;
      }

      case code === Actions.MULTIPLY: {
        if (!!monitorValueToChange) {
          const result = monitorValueToChange * monitorValue;

          dispatch(setMonitorValueToChange(result));
          addHistory(code, result);
        } else {
          dispatch(setMonitorValueToChange(monitorValue));
        }

        dispatch(setAction(code));
        dispatch(setMonitorValue(0));

        break;
      }

      case code === Actions.DIVIDE: {
        if (!!monitorValueToChange) {
          if (monitorValue === 0) {
            setError("Number isn't divided by zero");
            return;
          }

          const result = monitorValueToChange / monitorValue;

          dispatch(setMonitorValueToChange(result));
          addHistory(code, result);
        } else {
          dispatch(setMonitorValueToChange(monitorValue));
        }

        dispatch(setAction(code));
        dispatch(setMonitorValue(0));

        break;
      }

      case code === Actions.PERCENTAGE: {
        if (!!monitorValueToChange) {
          const result = (monitorValueToChange * monitorValue) / 100;

          dispatch(setMonitorValueToChange(result));
          addHistory(code, result);
        } else {
          dispatch(setMonitorValueToChange(monitorValue));
        }

        dispatch(setAction(code));
        dispatch(setMonitorValue(0));

        break;
      }

      case code === Actions.CHANGE_SIGN: {
        dispatch(setMonitorValue(-monitorValue));
        break;
      }

      case code === Actions.CLEAR_MONITOR: {
        dispatch(setMonitorValue(0));
        break;
      }

      case code === Actions.CLEAR: {
        dispatch(clearHistory());
        dispatch(setMonitorValue(0));
        dispatch(setMonitorValueToChange(0));
        dispatch(setAction(null));
        break;
      }
    }
  };

  return { handleClick };
};

export { useHandleButtonClick };
