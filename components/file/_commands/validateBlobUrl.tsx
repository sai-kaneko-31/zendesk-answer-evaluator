"use client";

const validateBlobUrl = (blobUrl: string | null) => {
    if (blobUrl == null || blobUrl.length === 0 || !blobUrl.match(/^https:\/\/.*\.public\.blob\.vercel-storage\.com\/.*$/)) {
        throw new Error("blob_urlパラメータの値が不正です");
    }
}
export default validateBlobUrl;