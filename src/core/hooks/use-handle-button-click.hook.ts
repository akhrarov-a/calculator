import { useDispatch, useSelector } from 'react-redux';
import { Actions, AngleUnity, ButtonTypes } from '@api';
import { State } from '@store';
import {
  addToHistory,
  clearHistory,
  setAction,
  setAngleUnity,
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
    const action = getActionSign(code as Actions) as string;

    const singleActions = [
      Actions.SQRT,
      Actions.LN,
      Actions.LOG,
      Actions.E_DEGREE
    ];
    const isSingleAction = singleActions.some((c) => c === code);

    switch (true) {
      case code === Actions.NUMBER_DEGREE: {
        const number = monitorValue.split('^')[0];
        const degree = monitorValue.split('^')[1];

        dispatch(
          addToHistory({
            action: action.replace('x', number).replace('y', degree),
            firstValue: '',
            secondValue: '',
            result
          })
        );

        break;
      }

      case code === Actions.FACTORIAL:
      case code === Actions.CUBE_OF_NUMBER:
      case code === Actions.DEGREE_OF_TEN:
      case code === Actions.DEGREE_OF_TWO:
      case code === Actions.ABS_NUMBER:
      case code === Actions.SQR:
      case code === Actions.E_DEGREE:
      case code === Actions.ONE_DIVIDED_BY_NUMBER: {
        dispatch(
          addToHistory({
            action: action.replace('x', monitorValue),
            firstValue: '',
            secondValue: '',
            result: result.replace('.', ',')
          })
        );

        break;
      }

      case isSingleAction: {
        dispatch(
          addToHistory({
            action,
            firstValue: '',
            secondValue: monitorValue.replace('.', ','),
            result: result.replace('.', ',')
          })
        );

        break;
      }

      default: {
        dispatch(
          addToHistory({
            action,
            firstValue: monitorValueToChange.replace('.', ',') || '',
            secondValue: monitorValue.replace('.', ',') || '',
            result: result.replace('.', ',')
          })
        );
      }
    }
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

      case code === Actions.SQRT: {
        const value = `${Math.sqrt(parseFloat(monitorValue))}`;

        dispatch(setMonitorValue(value));
        addHistory(code, value);

        break;
      }

      case code === Actions.LN: {
        const value = `${Math.log(parseFloat(monitorValue))}`;

        dispatch(setMonitorValue(value));
        addHistory(code, value);

        break;
      }

      case code === Actions.LOG: {
        const value = `${Math.log10(parseFloat(monitorValue))}`;

        dispatch(setMonitorValue(value));
        addHistory(code, value);

        break;
      }

      case code === Actions.ONE_DIVIDED_BY_NUMBER: {
        const value = `${1 / parseFloat(monitorValue)}`;

        dispatch(setMonitorValue(value));
        addHistory(code, value);

        break;
      }

      case code === Actions.E_DEGREE: {
        const value = `${e ** parseFloat(monitorValue)}`;

        dispatch(setMonitorValue(value));
        addHistory(code, value);

        break;
      }

      case code === Actions.SQR: {
        const value = `${parseFloat(monitorValue) * parseFloat(monitorValue)}`;

        dispatch(setMonitorValue(value));
        addHistory(code, value);

        break;
      }

      case code === Actions.NUMBER_DEGREE: {
        if (monitorValue.includes('^')) return;

        dispatch(setMonitorValue(`${monitorValue}^`));
        dispatch(setAction(code));

        break;
      }

      case code === Actions.ABS_NUMBER: {
        const value = `${Math.abs(parseFloat(monitorValue))}`;

        dispatch(setMonitorValue(value));
        addHistory(code, value);

        break;
      }

      case code === Actions.DEGREE_OF_TWO: {
        const value = `${2 ** parseFloat(monitorValue)}`;

        dispatch(setMonitorValue(value));
        addHistory(code, value);

        break;
      }

      case code === Actions.DEGREE_OF_TEN: {
        const value = `${10 ** parseFloat(monitorValue)}`;

        dispatch(setMonitorValue(value));
        addHistory(code, value);

        break;
      }

      case code === Actions.CUBE_OF_NUMBER: {
        const value = `${parseFloat(monitorValue) ** 3}`;

        dispatch(setMonitorValue(value));
        addHistory(code, value);

        break;
      }

      case code === Actions.FACTORIAL: {
        let value: number | string = 1;

        for (let i = 1; i <= parseFloat(monitorValue); i++) {
          value *= i;
        }

        value = `${value}`;

        dispatch(setMonitorValue(value));
        addHistory(code, value);

        break;
      }

      case code === Actions.MOD: {
        dispatch(setMonitorValueToChange(`${monitorValue}`));
        dispatch(setMonitorValue('0'));
        dispatch(setAction(code));

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
