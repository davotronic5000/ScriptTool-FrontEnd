import {
    Box,
    Checkbox,
    FormControl,
    FormHelperText,
    FormLabel,
    Input,
} from '@chakra-ui/react';
import { ComponentType } from 'react';
import { ScriptManagerDispatch } from './use-script-manager';
import { ScriptSubmission } from '../api-types';
import ColourPicker from './ColourPicker';

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
                            type: 'update-value',
                            data: {
                                key: 'name',
                                value: event.target.value,
                            },
                        })
                    }
                    value={script.name}
                />
            </FormControl>
            <FormControl>
                <FormLabel>Choose a colour:</FormLabel>
                <ColourPicker
                    onChange={(colour) =>
                        dispatch({
                            type: 'update-value',
                            data: {
                                key: 'colour',
                                value: colour,
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
            <FormControl>
                <FormLabel>
                    Would you like us to colourise any custom images?
                </FormLabel>
                <Checkbox
                    isChecked={script.colourise}
                    onChange={(event) =>
                        dispatch({
                            type: 'update-boolean-value',
                            data: {
                                key: 'colourise',
                                value: event.target.checked,
                            },
                        })
                    }
                />
            </FormControl>
        </Box>
    );
};

export default ScriptControls;
