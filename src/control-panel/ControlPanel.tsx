import {
    Box,
    Button,
    ButtonGroup,
    Flex,
    Heading,
    Text,
    VStack,
} from '@chakra-ui/react';
import {
    ComponentType,
    Dispatch,
    Fragment,
    SetStateAction,
    useCallback,
    useState,
} from 'react';
import FileUpload from './FileUpload';
import useFileUpload from './use-file-upload';
import ScriptControls from './ScriptControls';
import {
    resetScriptAction,
    ScriptManagerDispatch,
    ScriptState,
} from './use-script-manager';
import useDownloadPdf from './use-download-pdf';
import TokenSettings from './TokenSettings';
import { TokenProcessingVariables } from '../api-types';
import { TokenManagerDispatch } from './use-token-manager';
import useDownloadTokenPdf from './use-download-token-pdf';
import tokenDefaults from './token-defaults';

export interface ControlPanelProps {
    updatePdf: Dispatch<SetStateAction<Uint8Array | null>>;
    dispatch: ScriptManagerDispatch;
    script: ScriptState;
    tokenSettings: TokenProcessingVariables;
    dispatchTokenActions: TokenManagerDispatch;
}

const ControlPanel: ComponentType<ControlPanelProps> = ({
    updatePdf,
    script,
    dispatch,
    dispatchTokenActions,
    tokenSettings,
}) => {
    const { fetchingPdf, createPdf } = useDownloadPdf(updatePdf);
    const { fetchingTokenPdf, createTokenPdf } = useDownloadTokenPdf(updatePdf);

    const { fileUploadFieldValue, handleFileUpload, setFileName } =
        useFileUpload({
            dispatch,
        });
    const resetScript = useCallback(() => {
        setFileName('');
        updatePdf(null);
        dispatch(resetScriptAction);
    }, [setFileName, dispatch, updatePdf]);
    const [tool, updateTool] = useState<'script' | 'tokens' | 'none'>('none');
    return (
        <Flex direction="column" p={2}>
            <Heading
                as="h2"
                size="md"
                textAlign="center"
                mb={2}
                pb={1}
                borderBottom="1px solid"
                borderColor="blue.200"
            >
                Control Panel
            </Heading>
            <Box p={2}>
                {script ? (
                    <Fragment>
                        {tool === 'none' && (
                            <VStack spacing={4}>
                                <Button onClick={() => updateTool('script')}>
                                    Create Script
                                </Button>
                                <Flex>
                                    <Text
                                        casing="uppercase"
                                        fontFamily="heading"
                                    >
                                        ~ Or ~
                                    </Text>
                                </Flex>
                                <Button onClick={() => updateTool('tokens')}>
                                    Create Tokens
                                </Button>
                            </VStack>
                        )}
                        {tool === 'script' && (
                            <Fragment>
                                <ScriptControls
                                    dispatch={dispatch}
                                    script={script}
                                />
                                <Flex justifyContent="center">
                                    <ButtonGroup>
                                        <Button
                                            isLoading={fetchingPdf}
                                            loadingText="Submitting"
                                            onClick={() => createPdf(script)}
                                        >
                                            Submit
                                        </Button>
                                        <Button
                                            onClick={() => updateTool('tokens')}
                                        >
                                            Make Tokens
                                        </Button>
                                        <Button
                                            onClick={() => {
                                                resetScript();
                                                updateTool('none');
                                            }}
                                            isDisabled={fetchingPdf}
                                            variant="secondary"
                                        >
                                            Start Over
                                        </Button>
                                    </ButtonGroup>
                                </Flex>
                            </Fragment>
                        )}
                        {tool === 'tokens' && (
                            <Fragment>
                                <TokenSettings
                                    script={script}
                                    dispatch={dispatch}
                                    dispatchTokenActions={dispatchTokenActions}
                                    tokenSettings={tokenSettings}
                                />
                                <ButtonGroup>
                                    <Button
                                        isLoading={fetchingTokenPdf}
                                        loadingText="Submitting"
                                        onClick={() =>
                                            createTokenPdf({
                                                name: script.name,
                                                modern: script.modern,
                                                lowInk: script.lowInk,
                                                roles: script.roles,
                                                tokenProcessingSettings:
                                                    tokenDefaults,
                                                colourise: script.colourise,
                                            })
                                        }
                                    >
                                        Submit
                                    </Button>
                                    <Button
                                        onClick={() => updateTool('script')}
                                    >
                                        Make Script
                                    </Button>
                                    <Button
                                        onClick={() => {
                                            resetScript();
                                            updateTool('none');
                                        }}
                                        isDisabled={fetchingTokenPdf}
                                        variant="secondary"
                                    >
                                        Start Over
                                    </Button>
                                </ButtonGroup>
                            </Fragment>
                        )}
                    </Fragment>
                ) : (
                    <FileUpload
                        value={fileUploadFieldValue}
                        handleChange={handleFileUpload}
                    />
                )}
            </Box>
        </Flex>
    );
};

export default ControlPanel;
