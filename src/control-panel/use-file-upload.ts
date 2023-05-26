import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import { Role, ScriptSubmission } from "../api-types";
import { Metadata, RawScript } from "./script";

const isMetaObject = (
    rawScriptObject: Metadata | Role,
): rawScriptObject is Metadata => {
    return rawScriptObject.id === "_meta";
};

const isRoleObject = (
    rawScriptObject: Metadata | Role,
): rawScriptObject is Role => {
    return rawScriptObject.id !== "_meta";
};

const useFileUpload = ({
    updateScript,
    resetToDefaultScript,
}: {
    updateScript: Dispatch<SetStateAction<ScriptSubmission>>;
    resetToDefaultScript: () => void;
}) => {
    const [value, setValue] = useState("");
    const handleFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
        const fileReader = new FileReader();
        if (!event.currentTarget.files) return;
        fileReader.readAsText(event.currentTarget.files[0], "UTF-8");
        fileReader.onload = (event: ProgressEvent<FileReader>) => {
            if (!event.target?.result) return;
            const jsonData = JSON.parse(
                event.target.result as string,
            ) as RawScript;
            const meta = jsonData.find(isMetaObject);
            resetToDefaultScript();
            updateScript((existingScript) => ({
                name: meta?.name || existingScript.name,
                colour: meta?.colour || existingScript.colour,
                type: existingScript.type,
                roles: jsonData.filter(isRoleObject),
            }));
        };
        setValue(event.target.value);
    };
    return { fileUploadFieldValue: value, handleFileUpload };
};

export default useFileUpload;
