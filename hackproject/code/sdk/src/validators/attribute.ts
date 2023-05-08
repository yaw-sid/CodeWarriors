import { Requirement, Response, Validator } from "./index";

export default class AttributeValidator implements Validator {
  validate(
    dom: any,
    root: Element,
    requirement: Requirement,
    htmlString: string
  ): Response {
    const tagName = root.tagName.toLowerCase();
    const element = root as HTMLElement;

    let response: Response = { isValid: true, errors: [] };

    if (tagName == "img" && !element.attributes.getNamedItem("alt")) {
      response.isValid = false;
      const elementString = element.outerHTML;
      const start = htmlString.indexOf(elementString);
      const end = start + elementString.length;

      response.errors.push({
        start,
        end,
        error: new Error("img tags should always include alt attribute"),
      });
    }

    return response;
  }
}
