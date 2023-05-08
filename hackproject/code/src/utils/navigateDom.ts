import { Requirement, Response, Validator } from "validators";

const navigateDom = (
  rootDom: any,
  rootElement: Element,
  requirement: Requirement,
  validator: Validator
): Response[] => {
  let responses: Response[] = [];

  responses.push(validator.validate(rootDom, rootElement, requirement));

  for (let i = 0; i < rootElement.children.length; ++i) {
    const child = rootElement.children[i];
    responses.push(...navigateDom(rootDom, child, requirement, validator));
  }
  return responses;
};

export default navigateDom;
