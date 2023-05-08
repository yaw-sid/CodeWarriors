import fs from "fs/promises";

const read = async (filePath: string) => {
  try {
    const data = await fs.readFile(filePath, { encoding: "utf-8" });
    return Promise.resolve(data);
  } catch (error) {
    return Promise.reject(error);
  }
};

export default { read };
