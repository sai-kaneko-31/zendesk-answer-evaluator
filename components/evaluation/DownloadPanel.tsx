"use client";

import DownloadButton from "../file/DownloadButton";
import { Content } from "./EvaluationPanel";

interface DownloadButtonProps {
    votedContents: Content[];
}

const DownloadPanel = ({ votedContents }: DownloadButtonProps) => {
    const downloadFileContent = JSON.stringify(votedContents);
    return (
        <div>
            <p>ダウンロードはこちら</p>
            <DownloadButton content={downloadFileContent} />
        </div>
    );
}
export default DownloadPanel;