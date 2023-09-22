import { Checkbox, FormControl, FormLabel } from '@chakra-ui/react';
import { ComponentType, Fragment } from 'react';
import SharedScriptFields, {
    SharedScriptFieldsProps,
} from './SharedScriptFields';

interface TokenSettingsProps extends SharedScriptFieldsProps {}

const TokenSettings: ComponentType<TokenSettingsProps> = ({
    dispatch,
    script,
}) => {
    return (
        <Fragment>
            <SharedScriptFields dispatch={dispatch} script={script} />
            <FormControl>
                <FormLabel>Low ink mode:</FormLabel>
                <Checkbox
                    isChecked={script.lowInk}
                    onChange={(event) =>
                        dispatch({
                            type: 'update-boolean-value',
                            data: {
                                key: 'lowInk',
                                value: event.target.checked,
                            },
                        })
                    }
                />
            </FormControl>
        </Fragment>
    );
};

export default TokenSettings;
