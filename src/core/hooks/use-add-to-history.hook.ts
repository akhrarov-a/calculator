import { useDispatch, useSelector } from 'react-redux';
import { Actions, ButtonTypes } from '@api';
import { addToHistory } from '@calculator/store';
import { State } from '@store';
import { useGetActionSign } from './use-get-action-sign.hook';
import { useCheckActions } from './use-check-actions.hook';

/**
 * Use Add To History
 */
const useAddToHistory = () => {
  const dispatch = useDispatch();

  const { getActionSign } = useGetActionSign();

  const { checkIsSingleAction, checkReplaceXAction } = useCheckActions();

  const { monitorValue, monitorValueToChange } = useSelector(
    (state: State) => state.calculator
  );

  const addHistory = (code: ButtonTypes, result: string) => {
    const action = getActionSign(code as Actions) as string;

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

      case code === Actions.ARC_COSINUS:
      case code === Actions.ARC_TAN:
      case code === Actions.ARC_SINUS: {
        const actions = {
          [Actions.ARC_SINUS]: 'arcsin',
          [Actions.ARC_COSINUS]: 'arccos',
          [Actions.ARC_TAN]: 'arctan'
        };

        dispatch(
          addToHistory({
            action: `${actions[code]}${monitorValue}`,
            firstValue: '',
            secondValue: '',
            result
          })
        );

        break;
      }

      case checkReplaceXAction(code): {
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

      case checkIsSingleAction(code): {
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

  return { addHistory };
};

export { useAddToHistory };
