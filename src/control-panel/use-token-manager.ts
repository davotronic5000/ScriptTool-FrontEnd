import { Dispatch, Reducer, useReducer } from 'react';
import { TokenProcessingVariables } from '../api-types';
import tokenDefaults from './token-defaults';

export type TokenState = TokenProcessingVariables;

interface ResetTokenSettingsAction {
    type: 'reset-script';
}

type TokenManagerActions = ResetTokenSettingsAction;

export type TokenManagerDispatch = Dispatch<TokenManagerActions>;

export const resetScriptAction: ResetTokenSettingsAction = {
    type: 'reset-script',
};

const tokenManagerReducer: Reducer<TokenState, TokenManagerActions> = (
    state: TokenState,
    action: TokenManagerActions,
) => {
    switch (action.type) {
        case 'reset-script':
            return tokenDefaults;
        default:
            return state;
    }
};

const useTokenManager = () => {
    const [state, dispatch] = useReducer(tokenManagerReducer, tokenDefaults);

    return { tokenSettings: state, dispatchTokenActions: dispatch };
};

export default useTokenManager;
