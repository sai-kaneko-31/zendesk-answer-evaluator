"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import uploadFile from "@/components/file/_commands/uploadFile";
import validateSelectedFiles from "@/components/file/_commands/validateSelectedFiles";

const UploadFileForm = () => {
    const [errorMessage, setErrorMessage] = useState("");
    const router = useRouter();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            if (errorMessage.length !== 0) return;
            await uploadFile(new FormData(event.currentTarget));
            router.push("/evaluate");;
        } catch (e: unknown) {
            if (e instanceof Error) {
                setErrorMessage(e.message);
            }
        }
    }

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        try {
            validateSelectedFiles(event.target.files);
            setErrorMessage("");
        } catch (e: unknown) {
            if (e instanceof Error) {
                setErrorMessage(e.message);
            }
        }
    };
    return (
        <form className="flex flex-col" onSubmit={handleSubmit}>
            <input className="mb-4" type="file" name="file" onChange={handleFileChange} accept="application/json" />
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}
            <button
                className="px-6 py-3 bg-blue-500 text-white font-bold rounded-full shadow-lg hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition ease-in-out duration-150"
                type="submit"
            >
                アップロード</button>
        </form>
    );
}
export default UploadFileForm;