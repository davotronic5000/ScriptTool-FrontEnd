import { Box } from "@chakra-ui/react";
import { ComponentType, useCallback, useState } from "react";
import FileUpload from "./FileUpload";
import useFileUpload from "./use-file-upload";
import { ScriptSubmission } from "../api-types";

const defaultScript: ScriptSubmission = {
    name: "Custom Script",
    colour: "#800000",
    type: "ravenswood-bluff",
    roles: [],
};

const ControlPanel: ComponentType = () => {
    const [script, updateScript] = useState<ScriptSubmission>(defaultScript);
    const resetToDefault = useCallback(
        () => updateScript(defaultScript),
        [updateScript],
    );
    const { fileUploadFieldValue, handleFileUpload } = useFileUpload({
        resetToDefaultScript: resetToDefault,
        updateScript,
    });
    return (
        <Box>
            Control Panel
            <FileUpload
                value={fileUploadFieldValue}
                handleChange={handleFileUpload}
            />
            <p>{script.name}</p>
            <p>{script.colour}</p>
            <p>{script.type}</p>
            <div>
                {script.roles.map((role) => (
                    <div key={role.id}>{role.id}</div>
                ))}
            </div>
        </Box>
    );
};

export default ControlPanel;
