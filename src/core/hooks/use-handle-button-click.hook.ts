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
import { setAngleUnity } from '../../modules/calculator/store';
import { AngleUnity } from '../../api';

/**
 * Use Handle Button Click
 */
const useHandleButtonClick = () => {
  const pi = 3.1415926535897932384626433832795;
  const e = 2.7182818284590452353602874713527;

  const dispatch = useDispatch();

  const {
    monitorValue,
    monitorValueToChange,
    action,
    isGotResult,
    angleUnity
  } = useSelector((state: State) => state.calculator);

  const { getActionSign } = useGetActionSign();

  const addHistory = (code: ButtonTypes, result: string) => {
    dispatch(
      addToHistory({
        action: getActionSign(code as Actions) as string,
        firstValue: monitorValueToChange.replace('.', ','),
        secondValue: monitorValue.replace('.', ','),
        result: result.replace('.', ',')
      })
    );
  };

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
    }

    dispatch(setMonitorValueToChange('0'));
    dispatch(setAction(null));
    dispatch(setIsGotResult(true));
  };

  const handleClick = (code: ButtonTypes) => {
    setError('');

    switch (true) {
      case !isNaN(parseFloat(code as string)): {
        let value;

        if (parseFloat(monitorValue) !== 0) {
          value = `${monitorValue}${code}`;
        } else {
          if (!monitorValue.includes('.')) {
            value = `${code}`;
          } else {
            value = `${monitorValue}${code}`;
          }
        }

        if (isGotResult) {
          value = value.replace(`${monitorValue}`, '');
          dispatch(setIsGotResult(false));
        }

        dispatch(setMonitorValue(value));

        break;
      }

      case code === Actions.EQUAL: {
        handleEqualClick();

        break;
      }

      case code === Actions.PLUS: {
        const result = (
          parseFloat(monitorValueToChange) + parseFloat(monitorValue)
        ).toString();

        dispatch(setMonitorValueToChange(result));
        dispatch(setAction(code));
        dispatch(setMonitorValue('0'));

        if (!!parseFloat(monitorValueToChange)) {
          addHistory(code, result);
        }

        break;
      }

      case code === Actions.MINUS: {
        if (!!parseFloat(monitorValueToChange)) {
          const result = (
            parseFloat(monitorValueToChange) - parseFloat(monitorValue)
          ).toString();

          dispatch(setMonitorValueToChange(result));
          addHistory(code, result);
        } else {
          dispatch(setMonitorValueToChange(monitorValue));
        }

        dispatch(setMonitorValue('0'));
        dispatch(setAction(code));

        break;
      }

      case code === Actions.MULTIPLY: {
        if (!!parseFloat(monitorValueToChange)) {
          const result = (
            parseFloat(monitorValueToChange) * parseFloat(monitorValue)
          ).toString();

          dispatch(setMonitorValueToChange(result));
          addHistory(code, result);
        } else {
          dispatch(setMonitorValueToChange(monitorValue));
        }

        dispatch(setAction(code));
        dispatch(setMonitorValue('0'));

        break;
      }

      case code === Actions.DIVIDE: {
        if (!!parseFloat(monitorValueToChange)) {
          if (parseFloat(monitorValue) === 0) {
            setError("Number isn't divided by zero");
            return;
          }

          const result = (
            parseFloat(monitorValueToChange) / parseFloat(monitorValue)
          ).toString();

          dispatch(setMonitorValueToChange(result));
          addHistory(code, result);
        } else {
          dispatch(setMonitorValueToChange(monitorValue));
        }

        dispatch(setAction(code));
        dispatch(setMonitorValue('0'));

        break;
      }

      case code === Actions.PERCENTAGE: {
        if (!!parseFloat(monitorValueToChange)) {
          const result = (
            (parseFloat(monitorValueToChange) * parseFloat(monitorValue)) /
            100
          ).toString();

          dispatch(setMonitorValueToChange(result));
          addHistory(code, result);
        } else {
          dispatch(setMonitorValueToChange(monitorValue));
        }

        dispatch(setAction(code));
        dispatch(setMonitorValue('0'));

        break;
      }

      case code === Actions.CHANGE_SIGN: {
        dispatch(setMonitorValue(`-${monitorValue}`));
        break;
      }

      case code === Actions.CLEAR_MONITOR: {
        dispatch(setMonitorValue('0'));
        break;
      }

      case code === Actions.ADD_COMMA: {
        if (!monitorValue.includes('.')) {
          dispatch(setMonitorValue(`${monitorValue}.`));
        }

        break;
      }

      case code === Actions.PI_NUMBER: {
        dispatch(setMonitorValue(`${pi}`));

        break;
      }

      case code === Actions.E_NUMBER: {
        dispatch(setMonitorValue(`${e}`));

        break;
      }

      case code === Actions.CHANGE_ANGLE_UNITY: {
        const newAngleUnity =
          angleUnity === AngleUnity.RAD ? AngleUnity.DEGREE : AngleUnity.RAD;

        dispatch(setAngleUnity(newAngleUnity));

        break;
      }

      case code === Actions.CLEAR: {
        dispatch(clearHistory());
        dispatch(setMonitorValue('0'));
        dispatch(setMonitorValueToChange('0'));
        dispatch(setAction(null));
        break;
      }
    }
  };

  return { handleClick };
};

export { useHandleButtonClick };
