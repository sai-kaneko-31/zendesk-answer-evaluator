"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";

import validateBlobUrl from "@/components/file/_commands/validateBlobUrl";
import fetchContent from "@/components/file/_commands/fetchFile";
import EvaluationPanel from "@/components/evaluation/EvaluationPanel";

const Evaluate = () => {
    const [originalContent, setOriginalContent] = useState<string | null>(null);
    const [errorMessage, setErrorMessage] = useState("");
    const searchParams = useSearchParams();

    useEffect(() => {
        const initializeContent = async () => {
            const blobUrlParamValue = searchParams.get("blob_url");
            try {
                validateBlobUrl(blobUrlParamValue);
            } catch (e: unknown) {
                if (e instanceof Error) {
                    setErrorMessage(e.message);
                }
            }
            const blobUrl = blobUrlParamValue!;
            const intervalId = setInterval(async () => {
                const tmpContent = await fetchContent(blobUrl);
                if (tmpContent !== null) {
                    setOriginalContent(tmpContent);
                    clearInterval(intervalId);
                }
            }, 300);
        }
        initializeContent();
    });

    return (
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
            <p>よくぞここまでたどり着いたな</p>
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}
            {originalContent && <EvaluationPanel originalContent={originalContent} />}
        </div>
    );
}

const EvaluatePage = () => {
    return (
        <Suspense fallback={<p>ロード中...</p>}>
            <Evaluate />
        </Suspense>
    );
}
export default EvaluatePage;
