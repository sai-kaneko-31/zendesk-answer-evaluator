"use client";

const fetchContent = async (url: string): Promise<string | null> => {
    if (!url) {
        return null;
    }
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(response.statusText);
    }

    return await response.text();
}
export default fetchContent;