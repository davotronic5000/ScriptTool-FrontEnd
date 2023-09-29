import { Dispatch, Reducer, useReducer } from 'react';
import { TokenProcessingVariables } from '../api-types';
import tokenDefaults from './token-defaults';

export type TokenState = TokenProcessingVariables;

interface ResetTokenSettingsAction {
    type: 'reset-tokens';
}

interface SetTokenPageMargin {
    type: 'set-token-page-margin';
    payload: {
        value: number;
    };
}

interface SetIconValuesAction {
    type: 'set-icon-value-action';
    payload: {
        iconType: 'setup' | 'firstNight' | 'otherNight' | 'reminder';
        iconProperty: 'icon' | 'colour';
        value: string;
    };
}

interface SetTokenStringValueAction {
    type: 'set-token-string-value';
    payload: {
        path:
            | 'fontColour'
            | 'setupIcon'
            | 'setupColour'
            | 'firstNightIcon'
            | 'firstNightColour'
            | 'otherNightIcon'
            | 'otherNightColour'
            | 'reminderIcon'
            | 'reminderColour'
            | 'borderColour';
        value: string;
    };
}

interface SetTokenBorderStyleAction {
    type: 'set-token-border-style-value';
    payload: {
        path: 'circleBorder' | 'squareBorder';
        value: boolean;
    };
}

type TokenManagerActions =
    | ResetTokenSettingsAction
    | SetTokenBorderStyleAction
    | SetTokenPageMargin
    | SetIconValuesAction;

export type TokenManagerDispatch = Dispatch<TokenManagerActions>;

export const resetScriptAction: ResetTokenSettingsAction = {
    type: 'reset-tokens',
};

const tokenManagerReducer: Reducer<TokenState, TokenManagerActions> = (
    state: TokenState,
    action: TokenManagerActions,
) => {
    switch (action.type) {
        case 'reset-tokens':
            return tokenDefaults;
        case 'set-token-border-style-value':
            return {
                ...state,
                styles: {
                    ...state.styles,
                    border: {
                        ...state.styles.border,
                        [action.payload.path]: action.payload.value,
                    },
                },
            };
        case 'set-icon-value-action':
            return {
                ...state,
                styles: {
                    ...state.styles,
                    [action.payload.iconType]: {
                        ...state.styles[action.payload.iconType],
                        [action.payload.iconProperty]: action.payload.value,
                    },
                },
            };
        case 'set-token-page-margin':
            return {
                ...state,
                page: {
                    ...state.page,
                    margin: action.payload.value,
                },
            };
        default:
            return state;
    }
};

const useTokenManager = () => {
    const [state, dispatch] = useReducer(tokenManagerReducer, tokenDefaults);

    return { tokenSettings: state, dispatchTokenActions: dispatch };
};

export default useTokenManager;
