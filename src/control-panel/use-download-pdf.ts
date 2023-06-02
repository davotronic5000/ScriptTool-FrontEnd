import { Dispatch, SetStateAction, useCallback, useState } from "react";
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

const concatUintArrayArrays = (a: Uint8Array, b: Uint8Array) => {
    const c = new Uint8Array(a.length + b.length);
    c.set(a, 0);
    c.set(b, a.length);
    return c;
};

const useDownloadPdf = (
    updatePdf: Dispatch<SetStateAction<Uint8Array | null>>,
) => {
    const [fetchingPdf, updateFetchingPdf] = useState(false);
    const createPdf = useCallback(
        async (script: ScriptSubmission) => {
            updateFetchingPdf(true);
            const data = await downloadPdf(script);
            if (data.body) {
                const reader = await data.body.getReader();
                let pdf = new Uint8Array();
                let processing = true;
                while (processing) {
                    const { done, value } = await reader.read();
                    if (value) {
                        pdf = concatUintArrayArrays(pdf, value);
                    }
                    if (done) {
                        processing = false;
                    }
                }
                updatePdf(pdf);
            }
            updateFetchingPdf(false);
        },
        [updateFetchingPdf, updatePdf],
    );
    return { createPdf, fetchingPdf };
};

export default useDownloadPdf;
