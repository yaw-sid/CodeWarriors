import { JSDOM } from "jsdom";
import { Requirement, ContrastValidator } from "../../src/validators";
import { validHtml, invalidHtml } from "./contrastAssets";

let dom: any;

const loadDom = (dom: any): Promise<void> => {
  return new Promise((resolve, reject) => {
    dom.window.onload = () => {
      resolve();
    };
  });
};

describe("contrast validator", () => {
  it("should return true given valid dom",async () => {
    dom = new JSDOM(validHtml, {
      runScripts: "dangerously",
      resources: "usable",
    });
    await loadDom(dom);
    const body = dom.window.document.querySelector("body");
    const contrastValidator = new ContrastValidator();
    expect(contrastValidator.validate(dom, body, Requirement.AA)).toBe(true);
  })

  it("should return false given an invalid dom",async () => {
    dom = new JSDOM(invalidHtml, {
      runScripts: "dangerously",
      resources: "usable",
    });
    await loadDom(dom);
    const body = dom.window.document.querySelector("body");
    const contrastValidator = new ContrastValidator();
    expect(contrastValidator.validate(dom, body, Requirement.AA)).toBe(false);
  })
  
})