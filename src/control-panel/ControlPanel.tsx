import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import { ComponentType, Fragment, useCallback } from "react";
import FileUpload from "./FileUpload";
import useFileUpload from "./use-file-upload";
import ScriptControls from "./ScriptControls";
import useScriptManager, { resetScriptAction } from "./use-script-manager";

const ControlPanel: ComponentType = () => {
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
                            <Button onClick={resetScript}>Reset</Button>
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
