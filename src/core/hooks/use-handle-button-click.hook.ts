import { useDispatch, useSelector } from 'react-redux';
import { Actions, ButtonTypes } from '@api';
import { State } from '@store';
import {
  setAction,
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

  const handleEqualClick = () => {
    dispatch(setMonitorValueToChange(0));
    dispatch(setAction(null));
    dispatch(setIsGotResult(true));

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
    }
  };

  const handleClick = (code: ButtonTypes) => {
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
