import { JSDOM } from "jsdom";
import {
  Requirement,
  ContrastValidator,
  Response,
  AttributeValidator,
} from "../../src/validators";
import { validHtml, invalidHtml } from "./contrastAssets";
import navigateDom from "../../src/utils/navigateDom";

let dom: any;

const loadDom = (dom: any): Promise<void> => {
  return new Promise((resolve, reject) => {
    dom.window.onload = () => {
      resolve();
    };
  });
};

describe("contrast validator", () => {
  it("should return true given valid dom", async () => {
    dom = new JSDOM(validHtml, {
      runScripts: "dangerously",
      resources: "usable",
    });
    await loadDom(dom);
    const body = dom.window.document.querySelector("body");
    const contrastValidator = new ContrastValidator();
    const responses = navigateDom(dom, body, Requirement.AA, contrastValidator);

    let isValid = true;
    responses.forEach((response: Response) => {
      isValid &&= response.isValid;
    });
    expect(isValid).toBe(true);
  });

  it("should return false given an invalid dom", async () => {
    dom = new JSDOM(invalidHtml, {
      runScripts: "dangerously",
      resources: "usable",
    });
    await loadDom(dom);
    const body = dom.window.document.querySelector("body");
    const contrastValidator = new ContrastValidator();
    const responses = navigateDom(dom, body, Requirement.AA, contrastValidator);

    let isValid = true;
    responses.forEach((response: Response) => {
      isValid &&= response.isValid;
    });
    expect(isValid).toBe(false);
  });
});
