"use server";
import * as fs from "node:fs";
import * as path from "node:path";
import { redirect } from "next/navigation";

export async function uploadFile(formData: FormData) {
    const file = formData.get("file") as File;
    if (!file || file.size < 0) {
        throw new Error("ファイルが無効です");
    }
    if (file && file.size > 0) {
        const data = await file.arrayBuffer();
        const buffer = Buffer.from(data);
        const filePath = path.resolve(
            process.cwd(),
            "./uploads",
            `${crypto.randomUUID()}.${file.name.split(".").pop()}`,
        );
        await fs.writeFileSync(filePath, buffer);
    }
    redirect("/evaluate");
}