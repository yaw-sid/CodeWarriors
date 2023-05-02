const validateBackground = (element: HTMLElement, currentBackgroundColor: string) => {
    if (!element.hasChildNodes()) {
        // compare element's color to currentBackgroundColor
    }
    for (const child in element.childNodes) {
        let newBgColor = currentBackgroundColor;
        if (child has a background) newBgColor = child's background
        return validateBackground(child, newBgColor);
    }
}

const getInheritedBackgroundColor = (element: HTMLElement):string => {
  var defaultStyle = getDefaultBackground();

  var backgroundColor = window.getComputedStyle(element).backgroundColor;

  if (backgroundColor != defaultStyle) return backgroundColor;

  if (!element.parentElement) return defaultStyle;

  return getInheritedBackgroundColor(element.parentElement);
};

const getDefaultBackground = () => {
  var div = document.createElement("div");
  document.head.appendChild(div);
  var bg = window.getComputedStyle(div).backgroundColor;
  document.head.removeChild(div);
  return bg;
};
