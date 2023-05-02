import { Shade } from "a11y-theme-builder-sdk";
import rgbToHex from "./color";

const MIN_CONTRAST_RATIO = 3.1;

let isSuccess = true;

export const validate = (dom: any, element: Element, parentBgColor: string, parentColor: string): boolean => {
  const children = element.children;
  
  const elementBgColor = rgbToHex(dom.window.getComputedStyle(element).backgroundColor) || parentBgColor;
  const elementColor = rgbToHex(dom.window.getComputedStyle(element).color) || parentColor;
  
  const bgShade = Shade.fromHex(elementBgColor);
  const colorShade = Shade.fromHex(elementColor);
  
  const contrastRatio = bgShade.getContrastRatio(colorShade);
  const isContrastValid = contrastRatio >= MIN_CONTRAST_RATIO;
  

  const elementTag = element.tagName.toLowerCase();
  // console.log("<"+elementTag+">");
  
  // if (element.tagName == "P") {
  //   console.log("elementBgColor: %s", elementBgColor);
  //   console.log("elementColor: %s", elementColor);
  //   console.log("bgShade: %s", bgShade);
  //   console.log("colorShade: %s", colorShade);
  //   console.log("contrastRatio: %s", contrastRatio);
  //   console.log("isContrastValid: %s", isContrastValid);
  // }
  
  if (!isContrastValid) {
    // const elementTag = element.tagName.toLowerCase();
    console.log("<"+elementTag+">");
    console.log("\tinvalid contrast betweeen background(%s) and foreground(%s)", elementBgColor, elementColor);
    console.log("</"+elementTag+">\n");
    isSuccess = false;
  }
  
  for(let i = 0; i< children.length; i++){
    const child = children[i];
    validate(dom, child, elementBgColor, elementColor);
  }
  // console.log("<"+elementTag+">\n");
  
  return isSuccess;
};