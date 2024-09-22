"use client";

import getFormattedDateStr from "../utils/getFormattedDateStr";

interface DownloadButtonProps {
    content: string;
}

const DownloadButton = ({ content }: DownloadButtonProps) => {

    const handleDownload = () => {

        const blob = new Blob([content], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = `result_${getFormattedDateStr()}.json`;
        link.click();
        URL.revokeObjectURL(url);
    };

    return (
        <button
            className="px-6 py-3 bg-blue-500 text-white font-bold rounded-full shadow-lg hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition ease-in-out duration-150"
            onClick={handleDownload}
        >
            ダウンロード
        </button>
    );
};

export default DownloadButton;
