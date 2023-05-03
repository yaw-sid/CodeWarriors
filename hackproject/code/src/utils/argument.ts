import { FileNotSpecified, InvalidFile } from "../errors";
export enum FileType {
  HTML,
  CSS
};

export const getFileLocation = (fileType: FileType): string => {
  const argName = fileType === FileType.HTML ? "--html" : "--css";
  const fileExtension = fileType === FileType.HTML ? ".html" : ".css";

  const argIndex = process.argv.indexOf(argName);
  if (argIndex == -1 || argIndex === process.argv.length - 1 || process.argv[argIndex + 1].startsWith("--")) {
    throw new FileNotSpecified("file not specified.");
  }

  const file = process.argv[argIndex + 1];
  if (!file || !file.endsWith(fileExtension)) {
    throw new InvalidFile("invalid file.");
  }

  return file;
};
  