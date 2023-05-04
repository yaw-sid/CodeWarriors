const SYSTEM_COLORS: {[key: string]: string} = {
  ActiveBorder: 'rgb(180, 180, 180)',
  ActiveCaption: 'rgb(153, 180, 209)',
  AppWorkspace: 'rgb(171, 171, 171)',
  Background: 'rgb(192, 192, 192)',
  ButtonFace: 'rgb(240, 240, 240)',
  ButtonHighlight: 'rgb(255, 255, 255)',
  ButtonShadow: 'rgb(160, 160, 160)',
  ButtonText: 'rgb(0, 0, 0)',
  CaptionText: 'rgb(0, 0, 0)',
  GrayText: 'rgb(128, 128, 128)',
  Highlight: 'rgb(51, 153, 255)',
  HighlightText: 'rgb(255, 255, 255)',
  InactiveBorder: 'rgb(244, 247, 252)',
  InactiveCaption: 'rgb(191, 205, 219)',
  InactiveCaptionText: 'rgb(255, 255, 255)',
  InfoBackground: 'rgb(255, 255, 225)',
  InfoText: 'rgb(0, 0, 0)',
  Menu: 'rgb(240, 240, 240)',
  MenuText: 'rgb(0, 0, 0)',
  Scrollbar: 'rgb(200, 200, 200)',
  ThreeDDarkShadow: 'rgb(128, 128, 128)',
  ThreeDFace: 'rgb(192, 192, 192)',
  ThreeDHighlight: 'rgb(255, 255, 255)',
  ThreeDLightShadow: 'rgb(224, 224, 224)',
  ThreeDShadow: 'rgb(160, 160, 160)',
  Window: 'rgb(255, 255, 255)',
  WindowFrame: 'rgb(100, 100, 100)',
  WindowText: 'rgb(0, 0, 0)'
};

export const DEFAULT_BACKGROUND = "#ffffff";
export const DEFAULT_FOREGROUND = "#000000";

const toRgb = (color: string): string | undefined => {
  let rgb;

  if (color.startsWith('rgb')) {
    return color;
  } else if (SYSTEM_COLORS.hasOwnProperty(color)) {
    rgb = SYSTEM_COLORS[color];
  }else {
    rgb = undefined;  
  }
   
  return rgb;
}

export default (color: string): string | undefined => {
  const rgb = toRgb(color);
  const rgbValues = rgb ? rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/) : undefined;
  if (rgbValues) {
    const r = parseInt(rgbValues[1], 10).toString(16);
    const g = parseInt(rgbValues[2], 10).toString(16);
    const b = parseInt(rgbValues[3], 10).toString(16);
    return `#${r.padStart(2, "0")}${g.padStart(2, "0")}${b.padStart(2, "0")}`;
  }
  return color;
};

export const rgbHex = (color: string) => {
  const rgb = toRgb(color);
  const rgbValues = rgb ? rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/) : undefined;
  if (rgbValues) {
    const r = parseInt(rgbValues[1], 10).toString(16);
    const g = parseInt(rgbValues[2], 10).toString(16);
    const b = parseInt(rgbValues[3], 10).toString(16);
    return `#${r.padStart(2, "0")}${g.padStart(2, "0")}${b.padStart(2, "0")}`;
  }
  return color;
}