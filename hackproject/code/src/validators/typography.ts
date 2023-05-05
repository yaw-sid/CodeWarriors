import { Requirement, Response, Validator } from "validators";

const MIN_LINE_HEIGHT = 1.5;
const MIN_LETTER_SPACING = 0.12;
const DEFAULT_FONT_SIZE = "16px";
const DEFAULT_LINE_HEIGHT = "1.1";
const DEFAULT_LETTER_SPACING = "normal";

const isTypographyTag = (tagName: string): boolean => {
  return /p|h[1-6]/.test(tagName);
};

const hasUnits = (value: string): boolean => {
  if (!value) return false;
  return value.endsWith("px") || value.endsWith("em") || value.endsWith("%");
};

const toPixel = (value: string): number => {
  if (value.endsWith("px")) {
    return parseFloat(value.split("px")[0]);
  }
  if (value.endsWith("rem")) {
    return parseFloat(value.split("rem")[0]) * 16;
  }
  if (value.endsWith("em")) {
    return parseFloat(value.split("em")[0]) * 16;
  }
  if (value.endsWith("%")) {
    return parseFloat(value.split("%")[0]) / 100;
  }
  return 0;
};

/* 
  Assumptions:
  - default line height is between 110 - 120%
  - line height is specified as decimal with no units
*/
export default class TypographicalValidator implements Validator {
  validate(dom: any, root: Element, requirement: Requirement): Response {
    const fontSize =
      dom.window.getComputedStyle(root).fontSize || DEFAULT_FONT_SIZE;
    const lineHeight =
      dom.window.getComputedStyle(root).lineHeight || DEFAULT_LINE_HEIGHT;
    const letterSpacing =
      dom.window.getComputedStyle(root).letterSpacing || DEFAULT_LETTER_SPACING;
    return this.validateTypography(
      dom,
      root,
      requirement,
      fontSize,
      lineHeight,
      letterSpacing
    );
  }

  validateTypography(
    dom: any,
    root: Element,
    requirement: Requirement,
    parentFontSize: string,
    parentLineHeight: string,
    parentLetterSpacing: string
  ): Response {
    const tagName = root.tagName.toLowerCase();
    const fontSize =
      dom.window.getComputedStyle(root).fontSize || parentFontSize;
    const lineHeight =
      dom.window.getComputedStyle(root).lineHeight || parentLineHeight;
    const letterSpacing =
      dom.window.getComputedStyle(root).letterSpacing || parentLetterSpacing;

    let response: Response = {
      isValid: true,
      errors: [],
    };

    if (isTypographyTag(tagName)) {
      if (parseFloat(lineHeight) < MIN_LINE_HEIGHT) {
        response.isValid = false;
        response.errors.push(
          new Error(`${tagName}: invalid line height: ${lineHeight}`)
        );
      }

      if (letterSpacing != "normal") {
        if (hasUnits(letterSpacing)) {
          if (toPixel(letterSpacing) / toPixel(fontSize) < MIN_LETTER_SPACING) {
            response.isValid = false;
            response.errors.push(
              new Error(`${tagName}: invalid letter spacing: ${letterSpacing}`)
            );
          }
        } else if (parseFloat(letterSpacing) < MIN_LETTER_SPACING) {
          response.isValid = false;
          response.errors.push(
            new Error(`${tagName}: invalid letter spacing: ${letterSpacing}`)
          );
        }
      }
    }

    return response;
  }
}
