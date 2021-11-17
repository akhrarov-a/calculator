import { useDispatch, useSelector } from 'react-redux';
import { Actions, AngleUnity, ButtonTypes } from '@api';
import { State } from '@store';
import {
  clearHistory,
  setAction,
  setAngleUnity,
  setIsGotResult,
  setMonitorValue,
  setMonitorValueToChange
} from '@calculator/store';
import { useHandleEqualClick } from './use-handle-equal-click.hook';
import { useAddToHistory } from './use-add-to-history.hook';

/**
 * Use Handle Button Click
 */
const useHandleButtonClick = () => {
  const pi = 3.1415926535897932384626433832795;
  const e = 2.7182818284590452353602874713527;

  const dispatch = useDispatch();

  const { handleEqualClick, setError } = useHandleEqualClick();

  const { addHistory } = useAddToHistory();

  const { monitorValue, monitorValueToChange, isGotResult, angleUnity } =
    useSelector((state: State) => state.calculator);

  const getInRadian = (value: string) =>
    angleUnity === AngleUnity.RAD
      ? parseFloat(value)
      : (parseFloat(value) * pi) / 180;

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
        if (parseFloat(monitorValue) === 0) return;

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

        dispatch(setMonitorValueToChange(monitorValue));
        dispatch(setMonitorValue(value));
        dispatch(setAction(code));
        addHistory(code, value);

        break;
      }

      case code === Actions.LN: {
        const value = `${Math.log(parseFloat(monitorValue))}`;

        dispatch(setMonitorValueToChange(monitorValue));
        dispatch(setMonitorValue(value));
        dispatch(setAction(code));
        addHistory(code, value);

        break;
      }

      case code === Actions.LOG: {
        const value = `${Math.log10(parseFloat(monitorValue))}`;

        dispatch(setMonitorValueToChange(monitorValue));
        dispatch(setMonitorValue(value));
        dispatch(setAction(code));
        addHistory(code, value);

        break;
      }

      case code === Actions.ONE_DIVIDED_BY_NUMBER: {
        const value = `${1 / parseFloat(monitorValue)}`;

        dispatch(setMonitorValueToChange(monitorValue));
        dispatch(setMonitorValue(value));
        dispatch(setAction(code));
        addHistory(code, value);

        break;
      }

      case code === Actions.E_DEGREE: {
        const value = `${e ** parseFloat(monitorValue)}`;

        dispatch(setMonitorValueToChange(monitorValue));
        dispatch(setMonitorValue(value));
        dispatch(setAction(code));
        addHistory(code, value);

        break;
      }

      case code === Actions.SQR: {
        const value = `${parseFloat(monitorValue) * parseFloat(monitorValue)}`;

        dispatch(setMonitorValueToChange(monitorValue));
        dispatch(setMonitorValue(value));
        dispatch(setAction(code));
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

        dispatch(setMonitorValueToChange(monitorValue));
        dispatch(setMonitorValue(value));
        dispatch(setAction(code));
        addHistory(code, value);

        break;
      }

      case code === Actions.DEGREE_OF_TWO: {
        const value = `${2 ** parseFloat(monitorValue)}`;

        dispatch(setMonitorValueToChange(monitorValue));
        dispatch(setMonitorValue(value));
        dispatch(setAction(code));
        addHistory(code, value);

        break;
      }

      case code === Actions.DEGREE_OF_TEN: {
        const value = `${10 ** parseFloat(monitorValue)}`;

        dispatch(setMonitorValueToChange(monitorValue));
        dispatch(setMonitorValue(value));
        dispatch(setAction(code));
        addHistory(code, value);

        break;
      }

      case code === Actions.CUBE_OF_NUMBER: {
        const value = `${parseFloat(monitorValue) ** 3}`;

        dispatch(setMonitorValueToChange(monitorValue));
        dispatch(setMonitorValue(value));
        dispatch(setAction(code));
        addHistory(code, value);

        break;
      }

      case code === Actions.FACTORIAL: {
        let value: number | string = 1;

        for (let i = 1; i <= parseFloat(monitorValue); i++) {
          value *= i;
        }

        value = `${value}`;

        dispatch(setMonitorValueToChange(monitorValue));
        dispatch(setMonitorValue(value));
        dispatch(setAction(code));
        addHistory(code, value);

        break;
      }

      case code === Actions.MOD: {
        dispatch(setMonitorValueToChange(`${monitorValue}`));
        dispatch(setMonitorValue('0'));
        dispatch(setAction(code));

        break;
      }

      case code === Actions.SINUS: {
        const angleRadian = getInRadian(monitorValue);
        const value = `${Math.sin(angleRadian)}`;

        dispatch(setMonitorValueToChange(monitorValue));
        dispatch(setMonitorValue(value));
        dispatch(setAction(code));
        addHistory(code, value);

        break;
      }

      case code === Actions.COSINUS: {
        const angleRadian = getInRadian(monitorValue);
        const value = `${Math.cos(angleRadian)}`;

        dispatch(setMonitorValueToChange(monitorValue));
        dispatch(setMonitorValue(value));
        dispatch(setAction(code));
        addHistory(code, value);

        break;
      }

      case code === Actions.TAN: {
        const angleRadian = getInRadian(monitorValue);
        const value = `${Math.tan(angleRadian)}`;

        dispatch(setMonitorValueToChange(monitorValue));
        dispatch(setMonitorValue(value));
        dispatch(setAction(code));
        addHistory(code, value);

        break;
      }

      case code === Actions.ARC_SINUS: {
        if (parseFloat(monitorValue) > 1) {
          setError('Sinus is between 1 and -1');

          break;
        }

        const value = `${Math.asin(parseFloat(monitorValue))}`;

        dispatch(setMonitorValueToChange(monitorValue));
        dispatch(setMonitorValue(value));
        dispatch(setAction(code));
        addHistory(code, value);

        break;
      }

      case code === Actions.ARC_COSINUS: {
        if (parseFloat(monitorValue) > 1) {
          setError('Cosinus is between 1 and -1');

          break;
        }

        const value = `${Math.acos(parseFloat(monitorValue))}`;

        dispatch(setMonitorValueToChange(monitorValue));
        dispatch(setMonitorValue(value));
        dispatch(setAction(code));
        addHistory(code, value);

        break;
      }

      case code === Actions.ARC_TAN: {
        if (parseFloat(monitorValue) > 1) {
          setError('Tan is between 1 and -1');

          break;
        }

        const value = `${Math.atan(parseFloat(monitorValue))}`;

        dispatch(setMonitorValueToChange(monitorValue));
        dispatch(setMonitorValue(value));
        dispatch(setAction(code));
        addHistory(code, value);

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
