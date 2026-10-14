
/**
 * File: api.test.js
 * Description: Integration tests for the Express
 * HEX-to-RGB REST API using Mocha and Supertest.
 *
 * Tests successful requests, invalid inputs,
 * HTTP status codes and API responses.
 */

const request = require("supertest");
const assert = require("node:assert/strict");
const app = require("../src/app");

describe("Integration Tests - HEX to RGB API", function () {

  // Test 1: Valid HEX conversion.
  it("should convert a valid HEX value", async function () {
    const response = await request(app)
      .get("/api/convert/FF5733")
      .expect(200);

    assert.deepEqual(response.body, {
      hex: "#FF5733",
      rgb: { r: 255, g: 87, b: 51 }
    });
  });

  // Test 2: Black colour conversion.
  it("should convert black correctly", async function () {
    const response = await request(app)
      .get("/api/convert/000000")
      .expect(200);

    assert.deepEqual(response.body.rgb, {
      r: 0, g: 0, b: 0
    });
  });

  // Test 3: Lowercase HEX conversion.
  it("should accept lowercase HEX", async function () {
    const response = await request(app)
      .get("/api/convert/ff0000")
      .expect(200);

    assert.deepEqual(response.body.rgb, {
      r: 255, g: 0, b: 0
    });
  });

  // Test 4: Invalid HEX characters.
  it("should reject invalid characters", async function () {
    const response = await request(app)
      .get("/api/convert/GGGGGG")
      .expect(400);

    assert.equal(response.body.error, "Invalid hex colour");
  });

  // Test 5: Incorrect HEX length.
  it("should reject short HEX values", async function () {
    const response = await request(app)
      .get("/api/convert/12345")
      .expect(400);

    assert.equal(response.body.error, "Invalid hex colour");
  });

  // Test 6: Unknown API route.
  it("should return 404 for an unknown route", async function () {
    await request(app)
      .get("/api/unknown")
      .expect(404);
  });

});
