import { Box, Button, ButtonGroup, Flex, Heading } from "@chakra-ui/react";
import {
    ComponentType,
    Dispatch,
    Fragment,
    SetStateAction,
    useCallback,
} from "react";
import FileUpload from "./FileUpload";
import useFileUpload from "./use-file-upload";
import ScriptControls from "./ScriptControls";
import useScriptManager, { resetScriptAction } from "./use-script-manager";
import useDownloadPdf from "./use-download-pdf";

interface ControlPanelProps {
    updatePdf: Dispatch<SetStateAction<Uint8Array | null>>;
}

const ControlPanel: ComponentType<ControlPanelProps> = ({ updatePdf }) => {
    const { fetchingPdf, createPdf } = useDownloadPdf(updatePdf);
    const { script, dispatch } = useScriptManager();
    const { fileUploadFieldValue, handleFileUpload, setFileName } =
        useFileUpload({
            dispatch,
        });
    const resetScript = useCallback(() => {
        setFileName("");
        dispatch(resetScriptAction);
    }, [setFileName, dispatch]);
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
                        <ScriptControls dispatch={dispatch} script={script} />
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
                                    onClick={resetScript}
                                    variant="secondary"
                                >
                                    Reset
                                </Button>
                            </ButtonGroup>
                        </Flex>
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
