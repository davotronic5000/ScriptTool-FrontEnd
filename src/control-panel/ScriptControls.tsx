import { Box, FormControl, FormHelperText, FormLabel } from '@chakra-ui/react';
import { ComponentType } from 'react';
import { ScriptManagerDispatch } from './use-script-manager';
import { ScriptSubmission } from '../api-types';
import ColourPicker from './ColourPicker';
import SharedScriptFields from './SharedScriptFields';

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
            <SharedScriptFields dispatch={dispatch} script={script} />
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
        </Box>
    );
};

export default ScriptControls;
