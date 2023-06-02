import { useCallback, useState } from "react";
import { ScriptSubmission } from "../api-types";

const downloadPdf = async (script: ScriptSubmission) => {
    return await fetch("http://localhost:8080/getPdf", {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(script),
    });
};

const useDownloadPdf = () => {
    const [fetchingPdf, updateFetchingPdf] = useState(false);
    const createPdf = useCallback(
        async (script: ScriptSubmission) => {
            updateFetchingPdf(true);
            const data = await downloadPdf(script);
            updateFetchingPdf(false);
        },
        [updateFetchingPdf],
    );
    return { createPdf, fetchingPdf };
};

export default useDownloadPdf;
