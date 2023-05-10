import { JSDOM } from "jsdom";
import { getCss, validateDom } from "./utils";
import { Requirement, Response, Validator } from "./validators";

interface Params {
  html: string;
  htmlPath: string;
  css?: string;
  validator: Validator;
  requirement: Requirement;
}

export const validate = async (params: Params): Promise<Response[]> => {
  const { html, htmlPath, requirement, validator } = params;

  return new Promise(async (resolve, reject) => {
    const css =
      (params.css || "") + (await getCss(html, htmlPath).catch(reject));

    const dom = new JSDOM(html, {
      runScripts: "dangerously",
      resources: "usable",
    });

    dom.window.document.head.innerHTML += `<style>${css}</style>`;

    dom.window.document.onload = () => {
      const body = dom.window.document.querySelector("body");
      resolve(validateDom(dom, body, requirement, validator, html));
    };
  });
};
