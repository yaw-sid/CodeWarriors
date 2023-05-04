import fs from "fs/promises";
import path from "path";

const isFilePath = (str: string): boolean => {
  try {
    new URL(str);
    return false;
  } catch (_) {
    return true;
  }
};

const getCssPaths = (html: string): string[] => {
  const pattern = /<link\s+(?:[^>]*?\s+)?href=(["'])(.*?)\1/gm;
  const matches = html.matchAll(pattern);

  if (!matches) return [];

  const paths = Array.from(matches, (m) => m[2]).filter((p) => isFilePath(p));
  return [...paths];
};

const getCss = async (html: string, htmlPath: string): Promise<string> => {
  const cssPaths = getCssPaths(html);
  const basePath = path.dirname(htmlPath);

  let css = "";
  for (const cssPath of cssPaths) {
    const absolutePath = path.join(basePath, cssPath);

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
