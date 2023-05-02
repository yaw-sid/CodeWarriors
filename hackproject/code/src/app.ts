import path from "path";
import { JSDOM } from "jsdom";
import { Shade } from "a11y-theme-builder-sdk";
import { srcPath, file, rgbToHex } from "./utils";

const STATIC_PATH = path.join(srcPath, "../static/");
const MIN_CONTRAST_RATIO = 3.1;

const main = async () => {
  const htmlFile = "index.html";
  const html = await file.read(path.join(STATIC_PATH, htmlFile));

  const cssFile = "style.css";
  const css = await file.read(path.join(STATIC_PATH, cssFile));

  const dom = new JSDOM(html, {
    runScripts: "dangerously",
    resources: "usable",
  });

  dom.window.document.documentElement.innerHTML += `<style>${css}</style>`;

  dom.window.onload = () => {
    const body = dom.window.document.querySelector("body");
    // const childNodes = body.children.pop();
    // console.log(childNodes);
    for (const child of body.children) {
      const tag = child.tagName;
      if (tag === "STYLE") continue;
      console.log(tag);
    }

    // if (body.hasChildNodes()) {
    //   childNodes.forEach((element: any) => {
    //     console.log(element, ":", element.innerHTML);
    //   });
    // }
    // console.log(body.childNodes[0].innerText);
    const container = dom.window.document.querySelector("section");
    const containerBg = dom.window.getComputedStyle(container).backgroundColor;
    // console.log(containerBg, rgbToHex(containerBg));

    const heading = dom.window.document.querySelector("h1");
    const headingColor = dom.window.getComputedStyle(heading).color;
    // console.log(dom.window.document);
    // console.log(headingColor, rgbToHex(headingColor));

    const containerShade = Shade.fromHex(rgbToHex(containerBg));
    const headingShade = Shade.fromHex(rgbToHex(containerBg));

    if (containerShade.getContrastRatio(headingShade) >= MIN_CONTRAST_RATIO) {
      console.log("Valid contrast");
    } else {
      console.log("Invalid contrast");
    }
  };
};

main().catch(console.error);
