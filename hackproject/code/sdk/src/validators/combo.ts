import { validateDom } from "../utils";
import {
  AttributeValidator,
  ContrastValidator,
  Requirement,
  Response,
  TypographicalValidator,
  Validator,
} from "./index";

export default class ComboValidator implements Validator {
  private contrastValidator = new ContrastValidator();
  private typographicalValidator = new TypographicalValidator();
  private attributeValidator = new AttributeValidator();

  validate(
    dom: any,
    root: Element,
    requirement: Requirement,
    htmlString: string
  ): Response {
    let response: Response = { isValid: true, errors: [] };

    const contrastResponse = this.contrastValidator.validate(
      dom,
      root,
      requirement,
      htmlString
    );
    if (!contrastResponse.isValid) {
      response.isValid = false;
      response.errors.push(...contrastResponse.errors);
    }

    const typographyResponse = this.typographicalValidator.validate(
      dom,
      root,
      requirement,
      htmlString
    );
    if (!typographyResponse.isValid) {
      response.isValid = false;
      response.errors.push(...typographyResponse.errors);
    }

    const attributeResponse = this.attributeValidator.validate(
      dom,
      root,
      requirement,
      htmlString
    );
    if (!attributeResponse.isValid) {
      response.isValid = false;
      response.errors.push(...attributeResponse.errors);
    }

    return response;
  }
}
