"use client";

import { useState } from "react";

import { uploadFile } from "@/components/file/_commands/uploadFile";

export function UploadForm() {
    const [file, setFile] = useState<File | null>(null);
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (errorMessage) {
            return;
        }
        if (!file || file.size < 0) {
            setErrorMessage("先にファイルを選択してください");
            return;
        }
        uploadFile(new FormData(event.currentTarget));

    }
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (!event.target.files) {
            setErrorMessage("空のファイルが指定されました");
            return;
        }
        const selectedFile: File = event.target.files[0];
        if (selectedFile.type !== "application/json") {
            setErrorMessage("JSONファイルを指定してください");
            return;
        }
        setFile(selectedFile);
        setErrorMessage("");
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