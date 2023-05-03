import { JSDOM } from "jsdom";
import { Requirement, TypographicalValidator } from "../../src/validators";
import { invalidHeadingHtml, css, validHtml, invalidParagraphHtml } from "./assets";

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
    dom.window.document.head.innerHTML += `<style>${css}</style>`;
    await loadDom(dom);
    const body = dom.window.document.querySelector("body");
    const validator = new TypographicalValidator();
    expect(validator.validate(dom, body, Requirement.AA)).toBe(true);
  });

  it("should return false given invalid heading", async () => {
    dom = new JSDOM(invalidHeadingHtml, {
      runScripts: "dangerously",
      resources: "usable",
    });
    dom.window.document.head.innerHTML += `<style>${css}</style>`;
    await loadDom(dom);
    const body = dom.window.document.querySelector("body");
    const validator = new TypographicalValidator();
    expect(validator.validate(dom, body, Requirement.AA)).toBe(false);
  });

  it("should return false given invalid paragraph", async () => {
    dom = new JSDOM(invalidParagraphHtml, {
      runScripts: "dangerously",
      resources: "usable",
    });
    dom.window.document.head.innerHTML += `<style>${css}</style>`;
    await loadDom(dom);
    const body = dom.window.document.querySelector("body");
    const validator = new TypographicalValidator();
    expect(validator.validate(dom, body, Requirement.AA)).toBe(false);
  });
});