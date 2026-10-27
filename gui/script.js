
/**
 * Project: HEX to RGB and RGB to HEX Colour Converter
 * Author: Shoshe Asanin
 * Course: Software Testing
 *
 * Description:
 * This file handles colour conversion and input validation.
 * It also updates the colour preview in the GUI.
 *
 * The functionality will be tested using GUI testing methods.
 */

// Get the required HTML elements
const hexInput = document.getElementById("hexInput");
const hexButton = document.getElementById("hexButton");
const rgbResult = document.getElementById("rgbResult");

const rgbButton = document.getElementById("rgbButton");
const hexResult = document.getElementById("hexResult");
const preview = document.getElementById("preview");

// Function 1: Convert HEX colour to RGB
function convertHexToRgb() {

  // Read the HEX input and remove an optional #
  const hex = hexInput.value.trim().replace(/^#/, "");

  // Check whether the HEX value contains six valid characters
  if (!/^[0-9A-Fa-f]{6}$/.test(hex)) {
    rgbResult.textContent = "Invalid HEX colour";
    preview.style.backgroundColor = "transparent";
    return;
  }

  // Convert each HEX colour component into a decimal value
  const red = parseInt(hex.substring(0, 2), 16);
  const green = parseInt(hex.substring(2, 4), 16);
  const blue = parseInt(hex.substring(4, 6), 16);

  // Display the RGB result
  rgbResult.textContent = `RGB: ${red}, ${green}, ${blue}`;

  // Update the colour preview
  preview.style.backgroundColor = `#${hex}`;
}

// Function 2: Convert RGB values to HEX
function convertRgbToHex() {

  // Read the RGB input values as text
  const redInput = document.getElementById("red").value.trim();
  const greenInput = document.getElementById("green").value.trim();
  const blueInput = document.getElementById("blue").value.trim();

  const values = [redInput, greenInput, blueInput];

  // Validate that all inputs are whole numbers between 0 and 255
  const invalid = values.some(value =>
    value === "" ||
    !/^\d+$/.test(value) ||
    Number(value) > 255
  );

  if (invalid) {
    hexResult.textContent = "Invalid RGB values";
    preview.style.backgroundColor = "transparent";
    return;
  }

  // Convert the validated inputs into numbers
  const [red, green, blue] = values.map(Number);

  // Convert each decimal value into two HEX characters
  const hex = "#" + [red, green, blue]
    .map(value => value.toString(16).padStart(2, "0"))
    .join("")
    .toUpperCase();

  // Display the HEX result
  hexResult.textContent = `HEX: ${hex}`;

  // Update the colour preview
  preview.style.backgroundColor = hex;
}

// Connect each conversion button to its function
hexButton.addEventListener("click", convertHexToRgb);
rgbButton.addEventListener("click", convertRgbToHex);
