import { useDispatch, useSelector } from 'react-redux';
import { Actions, ButtonTypes } from '@api';
import { State } from '@store';
import {
  setAction,
  setErrorMessage,
  setIsGotResult,
  setMonitorValue,
  setMonitorValueToChange
} from '@calculator/store';

/**
 * Use Handle Button Click
 */
const useHandleButtonClick = () => {
  const dispatch = useDispatch();

  const { monitorValue, monitorValueToChange, action, isGotResult } =
    useSelector((state: State) => state.calculator);

  const setError = (errorMessage: string) => {
    dispatch(setErrorMessage(errorMessage));
  };

  const handleEqualClick = () => {
    switch (action) {
      case Actions.PLUS: {
        dispatch(setMonitorValue(monitorValueToChange + monitorValue));
        break;
      }

      case Actions.MINUS: {
        dispatch(setMonitorValue(monitorValueToChange - monitorValue));
        break;
      }

      case Actions.MULTIPLY: {
        dispatch(setMonitorValue(monitorValueToChange * monitorValue));
        break;
      }

      case Actions.DIVIDE: {
        if (monitorValue === 0) {
          setError("Number isn't divided by zero");
          return;
        }

        dispatch(setMonitorValue(monitorValueToChange / monitorValue));
        break;
      }

      case Actions.PERCENTAGE: {
        dispatch(setMonitorValue((monitorValueToChange * monitorValue) / 100));
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
        dispatch(setMonitorValueToChange(monitorValueToChange + monitorValue));
        dispatch(setAction(code));
        dispatch(setMonitorValue(0));
        break;
      }

      case code === Actions.MINUS: {
        if (!!monitorValueToChange) {
          dispatch(
            setMonitorValueToChange(monitorValueToChange - monitorValue)
          );
        } else {
          dispatch(setMonitorValueToChange(monitorValue));
        }

        dispatch(setMonitorValue(0));
        dispatch(setAction(code));
        break;
      }

      case code === Actions.MULTIPLY: {
        if (!!monitorValueToChange) {
          dispatch(
            setMonitorValueToChange(monitorValueToChange * monitorValue)
          );
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

          dispatch(
            setMonitorValueToChange(monitorValueToChange / monitorValue)
          );
        } else {
          dispatch(setMonitorValueToChange(monitorValue));
        }

        dispatch(setAction(code));
        dispatch(setMonitorValue(0));
        break;
      }

      case code === Actions.PERCENTAGE: {
        if (!!monitorValueToChange) {
          dispatch(
            setMonitorValueToChange((monitorValueToChange * monitorValue) / 100)
          );
        } else {
          dispatch(setMonitorValueToChange(monitorValue));
        }

        dispatch(setAction(code));
        dispatch(setMonitorValue(0));
        break;
      }

      case code === Actions.CLEAR: {
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
