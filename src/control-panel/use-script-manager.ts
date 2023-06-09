import { Dispatch, Reducer, useReducer } from "react";
import { ScriptSubmission } from "../api-types";

export type ScriptState = ScriptSubmission | null;

interface UpdateScriptAction {
    type: "update-script";
    data: ScriptState;
}

interface UpdateValueAction {
    type: "update-value";
    data: {
        key: "name" | "colour";
        value: string;
    };
}

type ScriptManagerActions = UpdateScriptAction | UpdateValueAction;
export type ScriptManagerDispatch = Dispatch<ScriptManagerActions>;

export const resetScriptAction: UpdateScriptAction = {
    type: "update-script",
    data: null,
};

const scriptManagerReducer: Reducer<ScriptState, ScriptManagerActions> = (
    state: ScriptState,
    action: ScriptManagerActions,
) => {
    switch (action.type) {
        case "update-script":
            return action.data;
        case "update-value":
            if (state !== null) {
                return { ...state, [action.data.key]: action.data.value };
            }
            return state;
        default:
            return state;
    }
};

const useScriptManager = () => {
    const [state, dispatch] = useReducer(scriptManagerReducer, null);

    return { script: state, dispatch };
};

export default useScriptManager;
