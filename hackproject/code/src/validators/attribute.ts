import { navigateDom } from "../utils";
import { Requirement, Response, Validator } from "validators";

export default class AttributeValidator implements Validator {
  validate(dom: any, root: Element, requirement: Requirement): Response {
    const tagName = root.tagName.toLowerCase();
    const element = root as HTMLElement;

    let response: Response = { isValid: true, errors: [] };

    if (tagName == "img" && !element.attributes.getNamedItem("alt")) {
      response.isValid = false;
      response.errors.push(
        new Error("img tags should always include alt attribute")
      );
    }

    return response;
  }
}
