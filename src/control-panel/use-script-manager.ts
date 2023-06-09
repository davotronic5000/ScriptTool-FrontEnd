import { Dispatch, Reducer, useReducer } from "react";
import { Role, ScriptSubmission } from "../api-types";

const tempDefault: ScriptSubmission = {
    name: "Indigestion Brewing",
    colour: "#800000",
    type: "ravenswood-bluff",
    roles: [
        { id: "noble" },
        { id: "clockmaker" },
        { id: "grandmother" },
        { id: "pixie" },
        { id: "sailor" },
        { id: "cult_leader" },
        { id: "snake_charmer" },
        { id: "innkeeper" },
        { id: "professor" },
        { id: "amnesiac" },
        { id: "tea_lady" },
        { id: "farmer" },
        { id: "cannibal" },
        { id: "goon" },
        { id: "snitch" },
        { id: "klutz" },
        { id: "puzzlemaster" },
        { id: "godfather" },
        { id: "cerenovus" },
        { id: "devils_advocate" },
        { id: "widow" },
        { id: "lil_monsta" },
        { id: "fang_gu" },
        { id: "lleech" },
        { id: "legion" },
    ] as Role[],
    modern: true,
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
