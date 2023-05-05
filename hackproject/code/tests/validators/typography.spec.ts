import { JSDOM } from "jsdom";
import { Requirement, TypographicalValidator } from "../../src/validators";
import { invalidLetterSpacingHtml, invalidLineHeightHtml, noLetterSpacingHtml, noLineHeightHtml, validHtml, validLetterSpacingInPxHtml } from "./typographyAssets";

let dom: any;

const loadDom = (dom: any): Promise<void> => {
  return new Promise((resolve, reject) => {
    dom.window.onload = () => {
      resolve();
    };
  });
};

describe("typography validator", () => {
  it("should return true given valid dom", async () => {
    dom = new JSDOM(validHtml, {
      runScripts: "dangerously",
      resources: "usable",
    });
    await loadDom(dom);
    const body = dom.window.document.querySelector("body");
    const validator = new TypographicalValidator();
    expect(validator.validate(dom, body, Requirement.AA)).toBe(true);
  });

  it("should return false given no line height", async () => {
    dom = new JSDOM(noLineHeightHtml, {
      runScripts: "dangerously",
      resources: "usable",
    });
    await loadDom(dom);
    const body = dom.window.document.querySelector("body");
    const validator = new TypographicalValidator();
    expect(validator.validate(dom, body, Requirement.AA)).toBe(false);
  });

  it("should return false given invalid line height", async () => {
    dom = new JSDOM(invalidLineHeightHtml, {
      runScripts: "dangerously",
      resources: "usable",
    });
    await loadDom(dom);
    const body = dom.window.document.querySelector("body");
    const validator = new TypographicalValidator();
    expect(validator.validate(dom, body, Requirement.AA)).toBe(false);
  });

  it("should return true given default letter spacing", async () => {
    dom = new JSDOM(noLetterSpacingHtml, {
      runScripts: "dangerously",
      resources: "usable",
    });
    await loadDom(dom);
    const body = dom.window.document.querySelector("body");
    const validator = new TypographicalValidator();
    expect(validator.validate(dom, body, Requirement.AA)).toBe(true);
  });

  it("should return true given specified letter spacing", async () => {
    dom = new JSDOM(validLetterSpacingInPxHtml, {
      runScripts: "dangerously",
      resources: "usable",
    });
    await loadDom(dom);
    const body = dom.window.document.querySelector("body");
    const validator = new TypographicalValidator();
    expect(validator.validate(dom, body, Requirement.AA)).toBe(true);
  });

  it("should return false given invalid letter spacing", async () => {
    dom = new JSDOM(invalidLetterSpacingHtml, {
      runScripts: "dangerously",
      resources: "usable",
    });
    await loadDom(dom);
    const body = dom.window.document.querySelector("body");
    const validator = new TypographicalValidator();
    expect(validator.validate(dom, body, Requirement.AA)).toBe(false);
  });
});