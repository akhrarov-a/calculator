import { ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '@store';
import { useGetActionSign } from '@core';
import { setIsGotResult, setMonitorValue } from '../../store';

/**
 * Use Monitor
 */
const useMonitor = () => {
  const dispatch = useDispatch();

  const { actionSign } = useGetActionSign();

  const { monitorValue, monitorValueToChange, isGotResult, errorMessage } =
    useSelector((state: State) => state.calculator);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    let value = event.target.value;

    if (isNaN(+value)) return;

    if (isGotResult) {
      value = value.replace(`${monitorValue}`, '');
      dispatch(setIsGotResult(false));
    }

    dispatch(setMonitorValue(+value));
  };

  const onBackspaceClick = () => {
    const value = +`${monitorValue}`.slice(0, -1);

    dispatch(setMonitorValue(value));
  };

  return {
    actionSign,
    monitorValue,
    monitorValueToChange,
    errorMessage,
    onChange,
    onBackspaceClick
  };
};

export { useMonitor };
