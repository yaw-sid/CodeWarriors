import fs from "fs/promises";
import { parse } from "node-html-parser";

const parseHtml = async (filePath: string) => {
  try {
    const data = await fs.readFile(filePath, { encoding: "utf-8" });
    const root = parse(data);
    return Promise.resolve(root);
  } catch (error) {
    return Promise.reject(error);
  }
};

export default parseHtml;
