import { ChangeEvent, useCallback, useState } from 'react';
import { ScriptRole, ScriptSubmission } from '../api-types';
import { Metadata, RawScript } from './script';
import { ScriptManagerDispatch, resetScriptAction } from './use-script-manager';
import { useToast } from '@chakra-ui/react';

const isMetaObject = (
    rawScriptObject: Metadata | ScriptRole,
): rawScriptObject is Metadata => {
    return rawScriptObject.id === '_meta';
};

const isRoleObject = (
    rawScriptObject: Metadata | ScriptRole,
): rawScriptObject is ScriptRole => {
    return rawScriptObject.id !== '_meta';
};

const defaultScript: ScriptSubmission = {
    name: 'Custom Script',
    colour: '#800000',
    type: 'ravenswood-bluff',
    roles: [],
    modern: false,
    colourise: true,
};

const useFileUpload = ({ dispatch }: { dispatch: ScriptManagerDispatch }) => {
    const [value, setValue] = useState('');
    const toast = useToast();
    const handleFileUpload = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
            if (
                !event.currentTarget.files ||
                !event.currentTarget.files.length
            ) {
                dispatch(resetScriptAction);
                setValue('');
                return;
            }
            const fileReader = new FileReader();
            fileReader.readAsText(event.currentTarget.files[0], 'UTF-8');
            fileReader.onload = (event: ProgressEvent<FileReader>) => {
                if (!event.target?.result) return;
                const jsonData = JSON.parse(
                    event.target.result as string,
                ) as RawScript;
                if (!Array.isArray(jsonData)) {
                    toast({
                        title: 'Error processing JSON',
                        description:
                            'Your script file does not look like a standard script. Unable to read JSON.',
                        status: 'error',
                        duration: 9000,
                        isClosable: true,
                    });
                    return;
                }
                const meta = jsonData.find(isMetaObject);
                const modern = window.location.search.includes('modern');
                dispatch({
                    type: 'update-script',
                    data: {
                        name: meta?.name || defaultScript.name,
                        colour: meta?.colour || defaultScript.colour,
                        type: defaultScript.type,
                        roles: jsonData.filter(isRoleObject),
                        modern,
                        colourise: meta?.colouriseImages || true,
                    },
                });
            };
            setValue(event.target.value);
        },
        [setValue, dispatch, toast],
    );
    return {
        fileUploadFieldValue: value,
        handleFileUpload,
        setFileName: setValue,
    };
};

export default useFileUpload;
