import { Checkbox, FormControl, FormLabel, Input } from '@chakra-ui/react';
import { ComponentType, Fragment } from 'react';
import { ScriptSubmission } from '../api-types';
import { ScriptManagerDispatch } from './use-script-manager';

export interface SharedScriptFieldsProps {
    dispatch: ScriptManagerDispatch;
    script: ScriptSubmission;
}

const SharedScriptFields: ComponentType<SharedScriptFieldsProps> = ({
    dispatch,
    script,
}) => {
    return (
        <Fragment>
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
        </Fragment>
    );
};

export default SharedScriptFields;
