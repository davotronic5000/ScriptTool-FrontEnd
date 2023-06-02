import { Dispatch, Reducer, useReducer } from "react";
import { Role, ScriptSubmission } from "../api-types";

const tempDefault: ScriptSubmission = {
    name: "Half of the 108",
    colour: "#800000",
    type: "ravenswood-bluff",
    roles: [
        { id: "washerwoman" },
        { id: "librarian" },
        { id: "investigator" },
        { id: "chef" },
        { id: "empath" },
        { id: "fortune_teller" },
        { id: "undertaker" },
        { id: "monk" },
        { id: "ravenkeeper" },
        { id: "virgin" },
        { id: "slayer" },
        { id: "soldier" },
        { id: "mayor" },
        { id: "butler" },
        { id: "drunk" },
        { id: "recluse" },
        { id: "saint" },
        { id: "poisoner" },
        { id: "spy" },
        { id: "baron" },
        { id: "scarlet_woman" },
        { id: "legion" },
        { id: "imp" },
        { id: "vortox" },
    ] as Role[],
};

type ScriptState = ScriptSubmission | null;

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
    const [state, dispatch] = useReducer(scriptManagerReducer, tempDefault);

    return { script: state, dispatch };
};

export default useScriptManager;
