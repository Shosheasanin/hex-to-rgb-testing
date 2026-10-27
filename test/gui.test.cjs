
/**
 * Project: HEX and RGB Colour Converter
 * Author: Shoshe Asanin
 * Course: Software Testing
 *
 * Test Method: Automated GUI Testing
 * Framework: Selenium WebDriver with Mocha
 *
 * TC01: Verify HEX to RGB conversion
 *
 * Purpose:
 * Open the GUI application in Chrome, enter a valid
 * HEX colour and check the RGB conversion result.
 */

const { Builder, By, until } = require("selenium-webdriver");
const assert = require("node:assert/strict");
const path = require("node:path");
const { pathToFileURL } = require("node:url");

// Define the location of the GUI application
const appPath = path.join(__dirname, "..", "gui", "index.html");
const appUrl = pathToFileURL(appPath).href;

describe("Colour Converter GUI Testing", function () {

  // Allow enough time for Chrome to start
  this.timeout(30000);

  let driver;

  // Open Chrome before each test
  beforeEach(async function () {
    driver = await new Builder().forBrowser("chrome").build();
    await driver.get(appUrl);
  });

  // Close Chrome after each test
  afterEach(async function () {
    if (driver) {
      await driver.quit();
    }
  });

  // TC01: Check HEX to RGB conversion
  it("TC01 - should convert HEX to RGB correctly", async function () {

    // Find the HEX input field
    const hexInput = await driver.findElement(By.id("hexInput"));

    // Enter a valid HEX colour
    await hexInput.sendKeys("#FF5733");

    // Click the conversion button
    const convertButton = await driver.findElement(By.id("hexButton"));
    await convertButton.click();

    // Wait until the expected result appears
    await driver.wait(
      until.elementTextIs(
        driver.findElement(By.id("rgbResult")),
        "RGB: 255, 87, 51"
      ),
      5000
    );

    // Read the actual conversion result
    const result = await driver
      .findElement(By.id("rgbResult"))
      .getText();

    // Compare actual and expected results
    assert.equal(result, "RGB: 255, 87, 51");

    console.log("TC01 PASS - HEX to RGB conversion successful");
  });
  
  /**
   * TC02: Verify RGB to HEX conversion
   *
   * Purpose:
   * Enter valid Red, Green and Blue values,
   * click the conversion button and verify
   * that the correct HEX colour is displayed.
   */
  it("TC02 - should convert RGB to HEX correctly", async function () {

    // Find the three RGB input fields
    const redInput = await driver.findElement(By.id("red"));
    const greenInput = await driver.findElement(By.id("green"));
    const blueInput = await driver.findElement(By.id("blue"));

    // Enter valid RGB colour values
    await redInput.sendKeys("255");
    await greenInput.sendKeys("87");
    await blueInput.sendKeys("51");

    // Find and click the RGB to HEX button
    const convertButton = await driver.findElement(By.id("rgbButton"));
    await convertButton.click();

    // Wait until the expected HEX result appears
    await driver.wait(
      until.elementTextIs(
        driver.findElement(By.id("hexResult")),
        "HEX: #FF5733"
      ),
      5000
    );

    // Read the actual HEX conversion result
    const result = await driver
      .findElement(By.id("hexResult"))
      .getText();

    // Verify that the result is correct
    assert.equal(result, "HEX: #FF5733");

    // Display the successful test message
    console.log("TC02 PASS - RGB to HEX conversion successful");

  });

  
  /**
   * TC03: Verify invalid HEX input handling
   *
   * Purpose:
   * Enter an invalid HEX colour and verify that
   * the application displays an error message.
   *
   * Expected Result:
   * Invalid HEX colour
   */
  it("TC03 - should reject invalid HEX input", async function () {

    // Find the HEX input field
    const hexInput = await driver.findElement(By.id("hexInput"));

    // Enter an invalid HEX colour
    await hexInput.sendKeys("#GGGGGG");

    // Click the HEX to RGB conversion button
    const convertButton = await driver.findElement(By.id("hexButton"));
    await convertButton.click();

    // Wait for the validation error message
    await driver.wait(
      until.elementTextIs(
        driver.findElement(By.id("rgbResult")),
        "Invalid HEX colour"
      ),
      5000
    );

    // Read the actual error message
    const result = await driver
      .findElement(By.id("rgbResult"))
      .getText();

    // Check whether the correct error message is displayed
    assert.equal(result, "Invalid HEX colour");

    // Display successful test information
    console.log("TC03 PASS - Invalid HEX input rejected");

  });
  
  /**
   * TC04: Verify invalid RGB input handling
   *
   * Purpose:
   * Enter an RGB value outside the valid range
   * and verify that the application rejects it.
   *
   * Expected Result:
   * Invalid RGB values
   */
  it("TC04 - should reject invalid RGB values", async function () {

    // Find the RGB input fields
    const redInput = await driver.findElement(By.id("red"));
    const greenInput = await driver.findElement(By.id("green"));
    const blueInput = await driver.findElement(By.id("blue"));

    // Enter an invalid red value (maximum is 255)
    await redInput.sendKeys("256");

    // Enter valid green and blue values
    await greenInput.sendKeys("87");
    await blueInput.sendKeys("51");

    // Click the RGB to HEX conversion button
    const convertButton = await driver.findElement(By.id("rgbButton"));
    await convertButton.click();

    // Wait for the validation error message
    await driver.wait(
      until.elementTextIs(
        driver.findElement(By.id("hexResult")),
        "Invalid RGB values"
      ),
      5000
    );

    // Read the actual error message
    const result = await driver
      .findElement(By.id("hexResult"))
      .getText();

    // Verify that the correct error is displayed
    assert.equal(result, "Invalid RGB values");

    // Display successful test information
    console.log("TC04 PASS - Invalid RGB values rejected");

  });



});
