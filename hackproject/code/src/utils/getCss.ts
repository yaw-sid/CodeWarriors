import fs from "fs/promises";
import BASE_PATH from "./srcPath";
import path from "path";

const getCssPaths = (html: string): string[] => {
  const pattern = /<link\s+(?:[^>]*?\s+)?href=(["'])(.*?)\1/gm;
  const matches = html.matchAll(pattern);

  if (!matches) return [];

  const paths = Array.from(matches, (m) => m[2]);
  return [...paths];
};

const getCss = async (html: string): Promise<string> => {
  const cssPaths = getCssPaths(html);

  let css = "";
  for (const cssPath of cssPaths) {
    const absolutePath = path.join(BASE_PATH, cssPath);

    try {
      const data = await fs.readFile(absolutePath, { encoding: "utf-8" });
      return Promise.resolve(data);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  return css;
};

export default getCss;
