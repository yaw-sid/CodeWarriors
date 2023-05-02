import path from "path";
import { JSDOM } from "jsdom";
<<<<<<< HEAD
import { srcPath, file, rgbToHex, validate } from "./utils";
import { DEFAULT_BACKGROUND, DEFAULT_FOREGROUND } from "./utils";

const STATIC_PATH = path.join(srcPath, "../static/");

const main = async () => {
  const htmlFile = "demo.html";
  const html = await file.read(path.join(STATIC_PATH, htmlFile));

  const cssFile = "demo.css";
=======
import { Shade } from "a11y-theme-builder-sdk";
import { srcPath, file, rgbToHex } from "./utils";

const STATIC_PATH = path.join(srcPath, "../static/");
const MIN_CONTRAST_RATIO = 3.1;

const main = async () => {
  const htmlFile = "index.html";
  const html = await file.read(path.join(STATIC_PATH, htmlFile));

  const cssFile = "style.css";
>>>>>>> 7072677 (Draft contrast validation idea (#3))
  const css = await file.read(path.join(STATIC_PATH, cssFile));

  const dom = new JSDOM(html, {
    runScripts: "dangerously",
    resources: "usable",
  });

<<<<<<< HEAD
  dom.window.document.head.innerHTML += `<style>${css}</style>`;

  dom.window.onload = () => {
    const body = dom.window.document.querySelector("body");
    const bodyBgColor = rgbToHex(dom.window.getComputedStyle(body).backgroundColor) || DEFAULT_BACKGROUND;
    const bodyColor = rgbToHex(dom.window.getComputedStyle(body).color) || DEFAULT_FOREGROUND;

    if (validate(dom, body, bodyBgColor, bodyColor)) {
      console.log("\x1b[32m accessibility test passed!\x1b[0m");
    } else {
      console.log("\x1b[31m accessibility test failed!\x1b[0m");
    }    
=======
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
>>>>>>> 7072677 (Draft contrast validation idea (#3))
  };
};

main().catch(console.error);
