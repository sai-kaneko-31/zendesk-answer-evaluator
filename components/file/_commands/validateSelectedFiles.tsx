"use client";

const validateSelectedFiles = (files: FileList | null) => {
    if (!files) {
        throw new Error("空のファイルが指定されました");
    }
    const file = files[0];
    if (file.size < 0) {
        throw new Error("無効なファイルが指定されました");
    }
    if (file.type !== "application/json") {
        throw new Error("JSONファイルを指定してください");
    }
}
export default validateSelectedFiles;