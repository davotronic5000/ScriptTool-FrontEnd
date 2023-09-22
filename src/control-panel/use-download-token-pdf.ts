import { Dispatch, SetStateAction, useCallback, useState } from 'react';
import { GetTokensBody } from '../api-types';
import { useToast } from '@chakra-ui/react';

const downloadPdf = async (tokenScript: GetTokensBody) => {
    return await fetch('https://api.clocktower.guru:8082/tokens', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(tokenScript),
    });
};

const concatUintArrayArrays = (a: Uint8Array, b: Uint8Array) => {
    const c = new Uint8Array(a.length + b.length);
    c.set(a, 0);
    c.set(b, a.length);
    return c;
};

const useDownloadTokenPdf = (
    updatePdf: Dispatch<SetStateAction<Uint8Array | null>>,
) => {
    const [fetchingTokenPdf, updateFetchingPdf] = useState(false);
    const toast = useToast();
    const createTokenPdf = useCallback(
        async (tokenScript: GetTokensBody) => {
            updateFetchingPdf(true);
            const data = await downloadPdf(tokenScript);
            if (!data.ok) {
                const response = await data.json();
                toast({
                    title: 'Error processing JSON',
                    description: response.message,
                    status: 'error',
                    duration: 9000,
                    isClosable: true,
                });
            }
            if (data.ok && data.body) {
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
        [updateFetchingPdf, updatePdf, toast],
    );
    return { createTokenPdf, fetchingTokenPdf };
};

export default useDownloadTokenPdf;
