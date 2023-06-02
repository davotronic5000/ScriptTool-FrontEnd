import { Box, Button, Heading } from "@chakra-ui/react";
import { ComponentType, useCallback, useState } from "react";
import FileUpload from "./FileUpload";
import useFileUpload from "./use-file-upload";
import { ScriptSubmission } from "../api-types";

const ControlPanel: ComponentType = () => {
    const [script, updateScript] = useState<ScriptSubmission | null>(null);
    const { fileUploadFieldValue, handleFileUpload, setFileName } =
        useFileUpload({
            updateScript,
        });
    const resetScript = useCallback(() => {
        setFileName("");
        updateScript(null);
    }, [setFileName, updateScript]);
    return (
        <Box p={2}>
            <Heading as="h2" size="md">
                Control Panel
            </Heading>
            {script ? (
                <div>
                    <Button onClick={resetScript}>Reset</Button>
                </div>
            ) : (
                <FileUpload
                    value={fileUploadFieldValue}
                    handleChange={handleFileUpload}
                />
            )}
        </Box>
    );
};

export default ControlPanel;
