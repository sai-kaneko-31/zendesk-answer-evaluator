"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import validateBlobUrl from "@/components/file/_commands/validateBlobUrl";

const Evaluate = () => {
    const [blobUrl, setBlobUrl] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const searchParams = useSearchParams();
    useEffect(() => {
        const blobUrlParamValue = searchParams.get("blob_url");
        try {
            validateBlobUrl(blobUrlParamValue);
        } catch (e: unknown) {
            if (e instanceof Error) {
                setErrorMessage(e.message);
            }
        }
        setBlobUrl(blobUrlParamValue!);
    }, [searchParams]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <p>よくぞここまでたどり着いたな</p>
            <p>君のアップロードしたファイルはここにある</p>
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}
            {!errorMessage && blobUrl && <p>{blobUrl}</p>}
        </div>
    );
}
export default Evaluate;
