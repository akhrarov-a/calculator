import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { State } from '@store';
import { Actions } from '@api';
import { useCheckActions } from './use-check-actions.hook';
import { useGetActionSign } from './use-get-action-sign.hook';

/**
 * Use Monitor Action Desc
 */
const useMonitorActionDesc = () => {
  const { actionSign } = useGetActionSign();

  const { checkIsSingleAction, checkReplaceXAction } = useCheckActions();

  const { action, monitorValue, monitorValueToChange } = useSelector(
    (state: State) => state.calculator
  );

  const actionDesc = useMemo(() => {
    const monitorVTCH = monitorValueToChange.replace('.', ',');
    let content: string | null = null;

    switch (true) {
      case action === Actions.NUMBER_DEGREE:
        break;

      case action === Actions.ARC_COSINUS:
      case action === Actions.ARC_TAN:
      case action === Actions.ARC_SINUS: {
        const actions = {
          [Actions.ARC_SINUS]: 'arcsin',
          [Actions.ARC_COSINUS]: 'arccos',
          [Actions.ARC_TAN]: 'arctan'
        };

        content = `<p>${actions[action as Actions]}${monitorVTCH}</p>`;

        break;
      }

      case checkReplaceXAction(action): {
        content = `
          <p>${actionSign?.replace('x', monitorVTCH)}</p>
        `;

        break;
      }

      case checkIsSingleAction(action): {
        content = `
          <p>${actionSign}</p>
          <p>${monitorVTCH}</p>
        `;

        break;
      }

      case !!actionSign: {
        content = `
          <p>${monitorVTCH}</p>
          <p>${actionSign}</p>
        `;
      }
    }

    return content;
  }, [monitorValueToChange, monitorValue, action, actionSign]);

  return { actionDesc };
};

export { useMonitorActionDesc };
