import { AttributeValidator, ComboValidator, ContrastValidator, Requirement, TypographicalValidator, Validator } from "../../../sdk/";
import { FileNotSpecified, InvalidFile } from "../errors/index";
export enum FileType {
  HTML,
  CSS,
}
const CONTRAST_VALIDATOR = "contrast";
const TYPOGRAPHY_VALIDATOR = "typography";
const ATTRIBUTE_VALIDATOR = "attribute";
const COMBO_VALIDATOR = "all";

const REQUIREMENT_AA = "AA";
const REQUIREMENT_AAA = "AAA";

export const getFileLocation = (fileType: FileType): string => {
  const argName = fileType === FileType.HTML ? "--html" : "--css";
  const fileExtension = fileType === FileType.HTML ? ".html" : ".css";

  const argIndex = process.argv.indexOf(argName);
  if (
    argIndex == -1 ||
    argIndex === process.argv.length - 1 ||
    process.argv[argIndex + 1].startsWith("--")
  ) {
    throw new FileNotSpecified("file not specified.");
  }

  const file = process.argv[argIndex + 1];
  if (!file || !file.endsWith(fileExtension)) {
    throw new InvalidFile("invalid file.");
  }

  return file;
};

export const getValidator = (): Validator => {
  const argName = "--validator";
  const argIndex = process.argv.indexOf(argName);

  if (
    argIndex == -1 ||
    argIndex === process.argv.length - 1 ||
    process.argv[argIndex + 1].startsWith("--")
  ) {
    throw new Error("validator not specified.");
  }

  const validatorName = process.argv[argIndex + 1];
  let validator: Validator;

  switch (validatorName) {
    case CONTRAST_VALIDATOR:
      validator = new ContrastValidator();
      break;
    case TYPOGRAPHY_VALIDATOR:
      validator = new TypographicalValidator();
      break;
    case ATTRIBUTE_VALIDATOR:
      validator = new AttributeValidator();
      break;
    case COMBO_VALIDATOR:
      validator = new ComboValidator();
      break;
    default:
      throw new Error("invalid validator name");
  }

  return validator;
}

export const getRequirement = (): Requirement => {
  const argName = "--requirement";
  const argIndex = process.argv.indexOf(argName);

  if (
    argIndex == -1 ||
    argIndex === process.argv.length - 1 ||
    process.argv[argIndex + 1].startsWith("--")
  ) {
    throw new Error("requirement not specified.");
  }

  let requirement: Requirement;

  switch (process.argv[argIndex + 1]) {
    case REQUIREMENT_AA:
      requirement = Requirement.AA;
      break;
    case REQUIREMENT_AAA:
      requirement = Requirement.AAA;
      break;
    default:
      throw new Error("invalid requirement");
  }
  return requirement;
}
