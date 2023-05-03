import { Requirement, Validator } from "validators";

const isTypoTag = (tagName: string): boolean => {
  return /p|h[1-6]/.test(tagName);
}

let isValid = true;

export default class TypographicalValidator implements Validator {
  validate(dom: any, root: Element, requirement: Requirement): boolean {
    const tagName = root.tagName.toLowerCase();
    if (isTypoTag(tagName)) {  
      const lineHeight = dom.window.getComputedStyle(root).lineHeight;    
      if (lineHeight != "1.5") {
        console.log("%s: invalid line height: %s", tagName, lineHeight);
        isValid = false;
      }
      const letterSpacing = dom.window.getComputedStyle(root).letterSpacing;
      if (letterSpacing != "0.12") {
        console.log("%s: invalid letter spacing: %s", tagName, letterSpacing);
        isValid = false;
      }
    }

    for (let i = 0; i < root.children.length; ++i) {
      const child = root.children[i];
      this.validate(dom, child, requirement);
    }

    return isValid;
  }
}