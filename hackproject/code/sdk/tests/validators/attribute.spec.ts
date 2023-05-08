import { JSDOM } from "jsdom";
import {
  Requirement,
  Response,
  AttributeValidator,
} from "../../src/validators";
import { noImgAltHtml, validHtml } from "./attributeAssets";
import validateDom from "../../src/utils/validateDom";

let dom: any;

const loadDom = (dom: any): Promise<void> => {
  return new Promise((resolve, reject) => {
    dom.window.onload = () => {
      resolve();
    };
  });
};

describe("attribute validator", () => {
  it("should return true given all img tags contain an alt attribute", async () => {
    dom = new JSDOM(validHtml, {
      runScripts: "dangerously",
      resources: "usable",
    });
    await loadDom(dom);
    const body = dom.window.document.querySelector("body");
    const validator = new AttributeValidator();
    const responses = validateDom(dom, body, Requirement.AA, validator);

    let isValid = true;
    responses.forEach((response: Response) => {
      isValid &&= response.isValid;
    });
    expect(isValid).toBe(true);
  });

  it("should return false given any img tags omits an alt attribute", async () => {
    dom = new JSDOM(noImgAltHtml, {
      runScripts: "dangerously",
      resources: "usable",
    });
    await loadDom(dom);
    const body = dom.window.document.querySelector("body");
    const validator = new AttributeValidator();
    const responses = validateDom(dom, body, Requirement.AA, validator);

    let isValid = true;
    responses.forEach((response: Response) => {
      isValid &&= response.isValid;
    });
    expect(isValid).toBe(false);
  });
});
