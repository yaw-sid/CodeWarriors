export interface Validator {
  validate(
    dom: any,
    root: Element,
    requirement: Requirement,
    htmlString: string
  ): Response;
}

export enum Requirement {
  AA,
  AAA,
}

export interface Response {
  isValid: boolean;
  errors: {
    start: number;
    end: number;
    error: Error;
  }[];
}

export { default as ContrastValidator } from "./contrast";
export { default as TypographicalValidator } from "./typography";
export { default as AttributeValidator } from "./attribute";
export { default as ComboValidator } from "./combo";

/*
WCAG Guideline Variables: https://github.com/discoverfinancial/a11y-theme-builder/wiki/WCAG-Guideline-Variables
CONTRAST - 
  Requirments:
  -> text-to-background=4.5:1, 
  -> hotlinks-colors: 4.5:1 against the background and 3.1 against the surrounding text (unless underlined)
  -> everything else: 3.1:1

TYPOGRAPHY
ANIMATION
*/
