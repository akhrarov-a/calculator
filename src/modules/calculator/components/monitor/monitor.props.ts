import { useDispatch, useSelector } from 'react-redux';
import { State } from '@store';
import { useGetActionSign } from '@core';
import { setMonitorValue } from '../../store';
import { useEffect } from 'react';

/**
 * Use Monitor
 */
const useMonitor = () => {
  const dispatch = useDispatch();

  const { actionSign } = useGetActionSign();

  const { monitorValue, monitorValueToChange, errorMessage, history } =
    useSelector((state: State) => state.calculator);

  const onBackspaceClick = () => {
    const value = +`${monitorValue}`.slice(0, -1);

    dispatch(setMonitorValue(value));
  };

  useEffect(() => {
    console.log(history);
  }, [history]);

  return {
    actionSign,
    monitorValue,
    monitorValueToChange,
    errorMessage,
    onBackspaceClick
  };
};

export { useMonitor };
