import {
    Box,
    FormControl,
    FormHelperText,
    FormLabel,
    Input,
} from "@chakra-ui/react";
import { ComponentType, Fragment } from "react";
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
                    Please upload the JSON of your script.
                </FormHelperText>
            </FormControl>
        </Box>
    );
};

export default ScriptControls;
