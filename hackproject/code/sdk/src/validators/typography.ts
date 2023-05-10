import { Requirement, Response, Validator } from "./index";

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
  private fontSize = `${DEFAULT_FONT_SIZE}`;
  private lineHeight = `${DEFAULT_LINE_HEIGHT}`;
  private letterSpacing = `${DEFAULT_LETTER_SPACING}`;

  validate(
    dom: any,
    root: Element,
    requirement: Requirement,
    htmlString: string
  ): Response {
    this.fontSize = dom.window.getComputedStyle(root).fontSize || this.fontSize;
    this.lineHeight =
      dom.window.getComputedStyle(root).lineHeight || this.lineHeight;
    this.letterSpacing =
      dom.window.getComputedStyle(root).letterSpacing || this.letterSpacing;

    const tagName = root.tagName.toLowerCase();

    let response: Response = {
      isValid: true,
      errors: [],
    };

    const elementString = root.outerHTML;
    const start = htmlString.indexOf(elementString);
    const end = start + elementString.length;
    let log = `${elementString}\n\t`;
    let err;


    if (isTypographyTag(tagName)) {
      if (parseFloat(this.lineHeight) < MIN_LINE_HEIGHT) {
        response.isValid = false;
        err = new Error(`${tagName}: invalid line height: ${this.lineHeight}`);
        log += err.message; 
        response.errors.push({
          start,
          end,
          error: err,
          log
        });
      }

      if (this.letterSpacing != "normal") {
        if (hasUnits(this.letterSpacing)) {
          if (
            toPixel(this.letterSpacing) / toPixel(this.fontSize) <
            MIN_LETTER_SPACING
          ) {
            response.isValid = false;
            err = new Error(`${tagName}: invalid letter spacing: ${this.letterSpacing}`);
            log += err.message; 
            response.errors.push({
              start,
              end,
              error: err,
              log
            });
          }
        } else if (parseFloat(this.letterSpacing) < MIN_LETTER_SPACING) {
          response.isValid = false;
          err = new Error(`${tagName}: invalid letter spacing: ${this.letterSpacing}`);
          log += err.message; 
          response.errors.push({
            start,
            end,
            error: err,
            log
          });
        }
      }
    }

    return response;
  }
}
