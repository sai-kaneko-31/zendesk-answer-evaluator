"use server";
import { put } from '@vercel/blob';

const uploadFile = async (formData: FormData): Promise<string> => {
    const file = formData.get("file") as File;
    const blob = await put(file.name, file, {
        access: 'public',
    });
    return blob.url;
}
export default uploadFile;