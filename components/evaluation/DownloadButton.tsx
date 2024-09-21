"use client";

import { Content } from "./EvaluationPanel";

interface DownloadButtonProps {
    votedContents: Content[];
}

const DownloadButton = ({ votedContents }: DownloadButtonProps) => {
    return (
        <div>
            {votedContents !== null && votedContents.map((votedContent, index) => (
                <p key={index}>{votedContent.messages}</p>
            ))}
        </div>
    );
}
export default DownloadButton;