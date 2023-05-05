import { Requirement, Response, Validator } from "./index";
import { Shade } from "a11y-theme-builder-sdk";
import { rgbHex } from "../utils/color";

const AA_MIN_CONTRAST_RATIO = 3.1;
const AA_MIN_CONTRAST_RATIO_TB = 4.5;
const AAA_MIN_CONTRAST_RATIO_TB = 7.1;

const DEFAULT_BACKGROUND = "#ffffff";
const DEFAULT_FOREGROUND = "#000000";

const isText = (tagName: string): boolean => {
  return (
    tagName.toLowerCase() == "p" ||
    tagName.toLowerCase() == "a" ||
    /h[1-6]/.test(tagName)
  );
};

export default class ContrastValidator implements Validator {
  private background = DEFAULT_BACKGROUND;
  private foreground = DEFAULT_FOREGROUND;

  validate(dom: any, root: Element, requirement: Requirement): Response {
    this.background =
      rgbHex(dom.window.getComputedStyle(root).backgroundColor) ||
      this.background;
    this.foreground =
      rgbHex(dom.window.getComputedStyle(root).color) || this.foreground;

    const bgShade = Shade.fromHex(this.background);
    const colorShade = Shade.fromHex(this.foreground);
    const contrastRatio = bgShade.getContrastRatio(colorShade);
    const elementTag = root.tagName.toLowerCase();

    let isValidContrast = true;
    const isTextElement = isText(elementTag);

    if (requirement === Requirement.AA) {
      isValidContrast = isTextElement
        ? contrastRatio >= AA_MIN_CONTRAST_RATIO_TB
        : contrastRatio >= AA_MIN_CONTRAST_RATIO;
    } else if (requirement === Requirement.AAA) {
      isValidContrast = isTextElement
        ? contrastRatio >= AAA_MIN_CONTRAST_RATIO_TB
        : contrastRatio >= AA_MIN_CONTRAST_RATIO;
    }

    let response: Response = { isValid: true, errors: [] };

    if (!isValidContrast) {
      response.isValid = false;
      response.errors.push(
        new Error(
          `\tinvalid contrast betweeen background(${this.background}) and foreground(${this.foreground})`
        )
      );
    }

    return response;
  }
}
