import { Requirement, Validator } from "validators";

export default class AttributeValidator implements Validator {
  private isValid = true;

  validate(dom: any, root: Element, requirement: Requirement): boolean {
    const tagName = root.tagName.toLowerCase();
    const element = root as HTMLElement;
    
    if (tagName == "img" && !element.attributes.getNamedItem("alt")) {
      console.log("img tags should always include alt attribute");
      this.isValid = false;
    }

    for (let i = 0; i < root.children.length; ++i) {
      const child = root.children[i];
      this.validate(dom, child, requirement);
    }
    
    return this.isValid;
  }
}