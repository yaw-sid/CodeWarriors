import { Validator } from "validators";

export default class ContrastValidator implements Validator {
  validate(dom: any, element: Element): boolean {
    const children = element.children;
    return true;
  }
}