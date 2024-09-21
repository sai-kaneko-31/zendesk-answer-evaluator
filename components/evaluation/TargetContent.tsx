"use client";

import { Content } from "./EvaluationPanel";

interface TargetContentProps {
    content: Content | null;
}

const TargetContent = ({ content }: TargetContentProps) => {
    return (
        <div>
            {content !== null && content.messages.map((message, index) => (
                <p key={index}>{message}</p>
            ))}
        </div>
    );
}
export default TargetContent;