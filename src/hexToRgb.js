
/**
 * File: hexToRgb.js
 * Description: Converts hexadecimal colour codes
 * into RGB colour values.
 *
 * The function checks the input format and
 * returns red, green and blue values.
 */

/**
 * Convert a six-digit HEX colour to RGB.
 *
 * @param {string} hex - The hexadecimal colour.
 * @returns {{r: number, g: number, b: number}}
 * @throws {TypeError} If the input is not a string.
 * @throws {Error} If the HEX format is invalid.
 */
function hexToRgb(hex) {

  // Step 1: Check whether the input is a string.
  if (typeof hex !== "string") {
    throw new TypeError("Hex value must be a string");
  }

  // Step 2: Check whether the HEX format is valid.
  if (!/^#?[0-9A-Fa-f]{6}$/.test(hex)) {
    throw new Error("Invalid hex colour");
  }

  // Step 3: Remove the optional # symbol.
  const cleanHex = hex.replace("#", "");

  // Step 4: Convert hexadecimal parts into numbers.
  const r = parseInt(cleanHex.slice(0, 2), 16);
  const g = parseInt(cleanHex.slice(2, 4), 16);
  const b = parseInt(cleanHex.slice(4, 6), 16);

  // Step 5: Return the RGB values.
  return { r, g, b };
}

// Export the function for use in other files.
module.exports = hexToRgb;
