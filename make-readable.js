const readableFonts = [
  'Arial, sans-serif',
  'Verdana, sans-serif',
  'Helvetica, sans-serif',
  'Tahoma, sans-serif',
  'Trebuchet MS, sans-serif',
  'Gill Sans, sans-serif',
  'Calibri, sans-serif',
  'Georgia, serif',
  'Times New Roman, serif',
  'Palatino, serif',
];

function applyReadableFont(element) {
  for (const font of readableFonts) {
    element.style.fontFamily = font;
    const computedStyle = getComputedStyle(element);
    if (computedStyle.fontFamily === font) {
      break;
    }
  }
}

function makeReadable(element) {
  if (element instanceof HTMLElement) {
    applyReadableFont(element);
    element.style.fontSize = '18px';
  }

  for (const child of element.children) {
    makeReadable(child);
  }
}

document.body.style.backgroundColor = 'white';
makeReadable(document.documentElement);
