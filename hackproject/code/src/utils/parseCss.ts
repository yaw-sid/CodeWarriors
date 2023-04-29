import fs from "fs/promises";
import { parse } from "@adobe/css-tools";

export default async (filePath: string) => {
    const data = await fs.readFile(filePath, { encoding: "utf-8" }).catch(Promise.reject);
    return parse(data, { source: filePath });
};