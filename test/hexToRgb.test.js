
/**
 * File: hexToRgb.test.js
 * Description: Unit tests for the HEX-to-RGB
 * conversion function using Mocha.
 *
 * Tests valid colours, invalid formats
 * and incorrect input types.
 */

const assert = require("node:assert/strict");
const hexToRgb = require("../src/hexToRgb");

describe("Unit Tests - HEX to RGB", function () {

  // Test 1: Convert red.
  it("should convert red correctly", function () {
    assert.deepEqual(hexToRgb("FF0000"), {
      r: 255, g: 0, b: 0
    });
  });

  // Test 2: Convert green.
  it("should convert green correctly", function () {
    assert.deepEqual(hexToRgb("00FF00"), {
      r: 0, g: 255, b: 0
    });
  });

  // Test 3: Convert blue.
  it("should convert blue correctly", function () {
    assert.deepEqual(hexToRgb("0000FF"), {
      r: 0, g: 0, b: 255
    });
  });

  // Test 4: Convert black.
  it("should convert black correctly", function () {
    assert.deepEqual(hexToRgb("000000"), {
      r: 0, g: 0, b: 0
    });
  });

  // Test 5: Convert white.
  it("should convert white correctly", function () {
    assert.deepEqual(hexToRgb("FFFFFF"), {
      r: 255, g: 255, b: 255
    });
  });

  // Test 6: Accept a leading # symbol.
  it("should accept # before HEX", function () {
    assert.deepEqual(hexToRgb("#FF5733"), {
      r: 255, g: 87, b: 51
    });
  });

  // Test 7: Accept lowercase HEX values.
  it("should accept lowercase HEX", function () {
    assert.deepEqual(hexToRgb("ff0000"), {
      r: 255, g: 0, b: 0
    });
  });

  // Test 8: Reject invalid characters.
  it("should reject invalid characters", function () {
    assert.throws(() => hexToRgb("GGGGGG"));
  });

  // Test 9: Reject incorrect HEX length.
  it("should reject short HEX values", function () {
    assert.throws(() => hexToRgb("12345"));
  });

  // Test 10: Reject empty input.
  it("should reject an empty string", function () {
    assert.throws(() => hexToRgb(""));
  });

  // Test 11: Reject numbers.
  it("should reject number input", function () {
    assert.throws(() => hexToRgb(123456), TypeError);
  });

  // Test 12: Reject null.
  it("should reject null input", function () {
    assert.throws(() => hexToRgb(null), TypeError);
  });

});
