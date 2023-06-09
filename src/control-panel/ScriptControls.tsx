import {
    Box,
    FormControl,
    FormHelperText,
    FormLabel,
    Input,
} from "@chakra-ui/react";
import { ComponentType } from "react";
import { ScriptManagerDispatch } from "./use-script-manager";
import { ScriptSubmission } from "../api-types";

interface ScriptControlsProps {
    dispatch: ScriptManagerDispatch;
    script: ScriptSubmission;
}

const ScriptControls: ComponentType<ScriptControlsProps> = ({
    dispatch,
    script,
}) => {
    return (
        <Box mb={2}>
            <FormControl>
                <FormLabel>Choose a name:</FormLabel>
                <Input
                    type="text"
                    onChange={(event) =>
                        dispatch({
                            type: "update-value",
                            data: {
                                key: "name",
                                value: event.target.value,
                            },
                        })
                    }
                    value={script.name}
                />
            </FormControl>
            <FormControl>
                <FormLabel>Choose a colour:</FormLabel>
                <Input
                    type="color"
                    onChange={(event) =>
                        dispatch({
                            type: "update-value",
                            data: {
                                key: "colour",
                                value: event.target.value,
                            },
                        })
                    }
                    value={script.colour}
                />
                <FormHelperText>
                    This colour will be used to create the side bar and back of
                    the script. Due to the way these are created, the actual
                    colour appearance may vary.
                </FormHelperText>
            </FormControl>
        </Box>
    );
};

export default ScriptControls;
