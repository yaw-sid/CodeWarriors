import path from "path";
import { JSDOM } from "jsdom";
import { rootPath, file, getFileLocation, FileType, getCss } from "./utils";
import { FileNotSpecified, InvalidFile } from "./errors";
import { Requirement, ContrastValidator } from "./validators";

const main = async () => {
  try {
    let htmlFile = "index.html";
    if (process.argv.includes("--html")) {
      htmlFile = getFileLocation(FileType.HTML);
    }
    const html = await file.read(path.join(rootPath, htmlFile));

    let css = "";
    if (process.argv.includes("--css")) {
      const cssFile = getFileLocation(FileType.CSS);
      css = await file.read(path.join(rootPath, cssFile));
    }

    css += await getCss(html);

    const dom = new JSDOM(html, {
      runScripts: "dangerously",
      resources: "usable",
    });

    dom.window.document.head.innerHTML += `<style>${css}</style>`;

    dom.window.onload = () => {
      const body = dom.window.document.querySelector("body");
      const requirement = Requirement.AA;
  
      const validator = new ContrastValidator();
      if (!validator.validate(dom, body, requirement)) {
        console.log("\x1b[31m accessibility test failed!\x1b[0m");
        process.exit(1);
      } 
      console.log("\x1b[32m accessibility test passed!\x1b[0m");
      process.exit(0);

    };
    
  } catch (error) {
    if (error instanceof FileNotSpecified) {
      console.error(error.message);
    } else if (error instanceof InvalidFile) {
      console.error(error.message);
    } else {
      console.error(error);
    }
    process.exit(1);
  }
};

main().catch(console.error);
