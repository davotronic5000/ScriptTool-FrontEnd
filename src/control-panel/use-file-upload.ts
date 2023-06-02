import {
    ChangeEvent,
    Dispatch,
    SetStateAction,
    useCallback,
    useState,
} from "react";
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

const defaultScript: ScriptSubmission = {
    name: "Custom Script",
    colour: "#800000",
    type: "ravenswood-bluff",
    roles: [],
};

const useFileUpload = ({
    updateScript,
}: {
    updateScript: Dispatch<SetStateAction<ScriptSubmission | null>>;
}) => {
    const [value, setValue] = useState("");
    const handleFileUpload = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
            if (
                !event.currentTarget.files ||
                !event.currentTarget.files.length
            ) {
                updateScript(null);
                setValue("");
                return;
            }
            const fileReader = new FileReader();
            fileReader.readAsText(event.currentTarget.files[0], "UTF-8");
            fileReader.onload = (event: ProgressEvent<FileReader>) => {
                if (!event.target?.result) return;
                const jsonData = JSON.parse(
                    event.target.result as string,
                ) as RawScript;
                const meta = jsonData.find(isMetaObject);
                updateScript({
                    name: meta?.name || defaultScript.name,
                    colour: meta?.colour || defaultScript.colour,
                    type: defaultScript.type,
                    roles: jsonData.filter(isRoleObject),
                });
            };
            setValue(event.target.value);
        },
        [setValue, updateScript],
    );
    return {
        fileUploadFieldValue: value,
        handleFileUpload,
        setFileName: setValue,
    };
};

export default useFileUpload;
