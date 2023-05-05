import { AttributeValidator, ContrastValidator, Requirement, TypographicalValidator, Validator } from "./index";

export default class AllValidators implements Validator {
	private contrastValidator = new ContrastValidator();
	private typographicalValidator = new TypographicalValidator();
	private attributeValidator = new AttributeValidator();
	private isValid = true;

	validate(dom: any, root: Element, requirement: Requirement): boolean {
		const validatorResults = [
			this.contrastValidator.validate(dom, root, requirement),
			this.typographicalValidator.validate(dom, root, requirement),
			this.attributeValidator.validate(dom, root, requirement)
		];
		
		this.isValid = this.validateAll(validatorResults);
		return this.isValid;
	}

	validateAll(validatorResults: boolean[]) {
		for (let i = 0; i < validatorResults.length; i++) {
			if (!validatorResults[i]) {
				return false;
			}
		}
		return true;
	}
} 