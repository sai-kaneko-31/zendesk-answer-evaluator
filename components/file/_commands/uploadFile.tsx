"use server";
import * as fs from "node:fs";
import * as path from "node:path";

const uploadFile = async (formData: FormData) => {
    const file = formData.get("file") as File;
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
}
export default uploadFile;