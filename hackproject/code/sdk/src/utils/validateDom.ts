import { Requirement, Response, Validator } from "validators/index";

const navigateDom = (
  rootDom: any,
  rootElement: Element,
  requirement: Requirement,
  validator: Validator,
  htmlString: string
): Response[] => {
  let responses: Response[] = [];

  responses.push(
    validator.validate(rootDom, rootElement, requirement, htmlString)
  );

  for (let i = 0; i < rootElement.children.length; ++i) {
    const child = rootElement.children[i];
    responses.push(
      ...validateDom(rootDom, child, requirement, validator, htmlString)
    );
  }
  return responses;
};

const validateDom = (
  rootDom: any,
  rootElement: Element,
  requirement: Requirement,
  validator: Validator,
  htmlString: string
): Response[] => {
  return navigateDom(
    rootDom,
    rootElement,
    requirement,
    validator,
    htmlString
  ).filter((response) => !response.isValid);
};

export default validateDom;
