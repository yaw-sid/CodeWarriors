export default (rgbColor: string) => {
  const rgbValues = rgbColor.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
  if (rgbValues) {
    const r = parseInt(rgbValues[1], 10).toString(16);
    const g = parseInt(rgbValues[2], 10).toString(16);
    const b = parseInt(rgbValues[3], 10).toString(16);
    return `#${r.padStart(2, "0")}${g.padStart(2, "0")}${b.padStart(2, "0")}`;
  }
  return rgbColor;
};
