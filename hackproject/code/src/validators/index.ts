export interface Validator {
  validate(dom: any, root: Element, requirement: Requirement): boolean;
}

export enum Requirement {
  AA,
  AAA
};

export { default as ContrastValidator } from "./contrast";

export { default as TypographicalValidator } from "./typography";

export { default as AttributeValidator } from "./attribute";

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