export function rgbToHex(rgb) {
  var hex = Number(rgb).toString(16);
  if (hex.length < 2) {
    hex = "0" + hex;
  }
  return hex;
}

export function hexString(red, green, blue) {
  return "#" + rgbToHex(red) + rgbToHex(green) + rgbToHex(blue);
}

export function tintedHex(r, g, b, tint) {
  var red = Math.floor(r + (255 - r) * tint);
  var green = Math.floor(g + (255 - g) * tint);
  var blue = Math.floor(b + (255 - b) * tint);

  console.log(red, blue, green);
  return "#" + rgbToHex(red) + rgbToHex(green) + rgbToHex(blue);
}
