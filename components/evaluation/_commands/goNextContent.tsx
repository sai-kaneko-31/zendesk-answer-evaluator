"use client";

import { Content, ContentIterator } from "../EvaluationPanel";

const goNextContent = (contentIterator: ContentIterator): [Content | null, boolean] => {
    const nextItem = contentIterator.next();
    if (nextItem.done) {
        return [null, true];
    } else {
        const content = contentIterator.next().value;
        return [content, false];
    }
}
export default goNextContent;