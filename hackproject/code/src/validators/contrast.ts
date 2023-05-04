import { Requirement, Validator } from "./index";
import { Shade } from "a11y-theme-builder-sdk";
import { rgbHex } from "../utils/color";

const AA_MIN_CONTRAST_RATIO = 3.1;
const AA_MIN_CONTRAST_RATIO_TB = 4.5;
const AAA_MIN_CONTRAST_RATIO = 3.1;
const AAA_MIN_CONTRAST_RATIO_TB = 7.1;
let isSuccess = true;

const DEFAULT_BACKGROUND = "#ffffff";
const DEFAULT_FOREGROUND = "#000000";

const isText = (tagName: string): boolean => {
  return tagName.toLowerCase() == "p" || tagName.toLowerCase() == "a" || /h[1-6]/.test(tagName);
}

export default class ContrastValidator implements Validator {
  validate(dom: any, root: Element, requirement: Requirement): boolean {
    const bodyBackground = dom.window.getComputedStyle(root).backgroundColor || DEFAULT_BACKGROUND;
    const bodyForeground = dom.window.getComputedStyle(root).color || DEFAULT_FOREGROUND;
    return this.validateContrast(dom, root, requirement, bodyBackground, bodyForeground);
  }

  validateContrast(dom: any, element: Element, requirement: Requirement, parentBgColor: string, parentColor: string): boolean {
    const children = element.children;
    
    const elementBgColor = rgbHex(dom.window.getComputedStyle(element).backgroundColor) || parentBgColor;
    const elementColor = rgbHex(dom.window.getComputedStyle(element).color) || parentColor;
    
    const bgShade = Shade.fromHex(elementBgColor);
    const colorShade = Shade.fromHex(elementColor);
    const contrastRatio = bgShade.getContrastRatio(colorShade);
    const elementTag = element.tagName.toLowerCase();

    const isValidContrast = requirement == Requirement.AA ? contrastRatio >= AA_MIN_CONTRAST_RATIO
      : isText(elementTag) ? contrastRatio >= AAA_MIN_CONTRAST_RATIO_TB
      : contrastRatio >= AAA_MIN_CONTRAST_RATIO;
    
    if(!isValidContrast){
      console.log("<"+elementTag+">");
      console.log("\tinvalid contrast betweeen background(%s) and foreground(%s)", elementBgColor, elementColor);
      console.log("</"+elementTag+">\n");
      isSuccess = false;
    }

    for (let i=0; i<children.length; i++) {
      const child = children[i];
      this.validate(dom, child, requirement);
    }
    return isSuccess;
  }
}