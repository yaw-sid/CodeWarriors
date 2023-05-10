import path from "path";
import { JSDOM } from "jsdom";
import { srcPath, file, rgbToHex, validate } from "./utils";
import { DEFAULT_BACKGROUND, DEFAULT_FOREGROUND } from "./utils";

const STATIC_PATH = path.join(srcPath, "../static/");

const main = async () => {
  const htmlFile = "demo.html";
  const html = await file.read(path.join(STATIC_PATH, htmlFile));

  const cssFile = "demo.css";
  const css = await file.read(path.join(STATIC_PATH, cssFile));

  const dom = new JSDOM(html, {
    runScripts: "dangerously",
    resources: "usable",
  });

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
  };
};

main().catch(console.error);
