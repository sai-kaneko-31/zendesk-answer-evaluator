"use client";

import { Content } from "../EvaluationPanel";

const updateVotedContent = (answer: boolean, content: Content, votedContent: Content[]) => {
    const results: Content[] = JSON.parse(JSON.stringify(votedContent));
    if (content !== null && answer) {
        results.push(content);
    }
    return results;
}
export default updateVotedContent;