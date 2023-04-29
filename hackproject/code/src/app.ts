import path from "path";
import { HTMLElement } from "node-html-parser";
import { srcPath, parseHtml, parseCss } from "./utils";

const STATIC_PATH = path.join(srcPath, "../static/");

const getBody = (root: HTMLElement) => {
    return root.childNodes[1].childNodes[3].childNodes[1];
};

const main = async () => {
    // const htmlFile = "index.html";
    // const root = await parseHtml(path.join(STATIC_PATH, htmlFile)).catch(error => {
    //     throw new Error(error);
    // });
    // const body = getBody(root);

    const cssFile = "style.css";
    const css = await parseCss(path.join(STATIC_PATH, cssFile)).catch(error => {
        throw new Error(error);
    });
    // console.log(css.stylesheet.rules);

    const CONTAINER_SELECTOR = "section";
    const BACKGROUND_COLOR_PROPERTY = "background-color";

    const container = css.stylesheet.rules.find((rule: any) => rule.selectors.findIndex((selector: string) => selector == CONTAINER_SELECTOR) >= 0);
    console.log(container);
    const { value: backgroundColor } = container.declarations.find((dec: any) => dec.property == BACKGROUND_COLOR_PROPERTY);
    console.log(backgroundColor);

    const HEADING_SELECTOR = "h1", PARAGRAPH_SELECTOR = "p";
    const COLOR_PROPERTY = "color";

    const heading = css.stylesheet.rules.find((rule: any) => rule.selectors.findIndex((selector: string) => selector == `${CONTAINER_SELECTOR} ${HEADING_SELECTOR}`) >= 0);
    console.log(heading);
    const { value: headingColor } = heading.declarations.find((dec: any) => dec.property == COLOR_PROPERTY);
    console.log(headingColor);
};

main().catch(console.error);
