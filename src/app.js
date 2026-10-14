/**
 * File: app.js
 * Description: Creates a REST API using Express
 * to convert HEX colour values into RGB.
 */

const express = require("express");
const hexToRgb = require("./hexToRgb");

const app = express();

/**
 * GET /api/convert/:hex
 * Converts a HEX colour into RGB values.
 */
app.get("/api/convert/:hex", (req, res) => {
  try {
    const hex = req.params.hex;
    const rgb = hexToRgb(hex);

    res.status(200).json({
      hex: "#" + hex.replace("#", "").toUpperCase(),
      rgb: rgb
    });

  } catch (error) {
    res.status(400).json({
      error: error.message
    });
  }
});

// Export the app for integration testing.
module.exports = app;