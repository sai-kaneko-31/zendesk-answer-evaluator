"use client";

import { useMemo, useState } from "react";

import BadButton from "./BadButton";
import GoodButton from "./GoodButton";
import TargetContent from "./TargetContent";
import updateVotedContent from "./_commands/updateVotedContent";
import goNextContent from "./_commands/goNextContent";
import DownloadPanel from "./DownloadPanel";

export class Content {
    constructor(public messages: string[]) { }
}

export class ContentIterator implements IterableIterator<Content> {
    private pointer = 0;

    constructor(public contents: Content[]) { }

    public next(): IteratorResult<Content> {
        if (this.pointer < this.contents.length) {
            return {
                done: false,
                value: this.contents[this.pointer++]
            }
        } else {
            return {
                done: true,
                value: null
            }
        }
    }

    [Symbol.iterator](): IterableIterator<Content> {
        return this;
    }
}

interface EvaluationPanelProps {
    originalContent: string;
}

const EvaluationPanel = ({ originalContent }: EvaluationPanelProps) => {
    const contentIterator = useMemo(() => new ContentIterator(JSON.parse(originalContent)), [originalContent]);
    if (contentIterator == null) {
        throw new Error("ファイルコンテンツのフォーマットが正しくありません。")
    }

    const [content, setContent] = useState<Content | null>(contentIterator.contents.length === 0 ? null : contentIterator.contents[0]);
    const [votedContents, setVotedContents] = useState<Content[]>([]);
    const [isDone, setIsDone] = useState(contentIterator.contents.length === 0);

    const vote = (type: boolean) => {
        if (content !== null) {
            setVotedContents(updateVotedContent(type, content, votedContents));
        }
        const [nextContent, nextIsDone] = goNextContent(contentIterator);
        setContent(nextContent);
        setIsDone(nextIsDone);
    }

    return (
        <div>
            {!isDone && (
                <div className="flex flex-col items-center justify-center">
                    <TargetContent content={content} />
                    <div className="flex flex-row space-x-16">
                        <BadButton onClick={() => vote(false)} />
                        <GoodButton onClick={() => vote(true)} />
                    </div>
                </div>
            )}
            {isDone && (
                <div className="flex justify-center mt-4">
                    <DownloadPanel votedContents={votedContents} />
                </div>
            )}
        </div>


    );
}
export default EvaluationPanel;