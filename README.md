
# HEX to RGB Converter - JavaScript Testing Project

## 1. Project Description

This project converts six-digit hexadecimal colour codes
into RGB values using JavaScript.

It includes a REST API built with Express and automated
tests using Mocha and Supertest.

## 2. Technologies Used

- JavaScript
- Node.js
- Express.js
- Mocha
- Supertest
- Node.js Assert
- Postman

## 3. Project Structure

- src/hexToRgb.js - HEX to RGB conversion library
- src/app.js - Express REST API
- src/server.js - Server configuration
- test/hexToRgb.test.js - Unit tests
- test/api.test.js - Integration tests

## 4. Installation

Clone the repository and open the project folder.

Install the dependencies:

    npm install

## 5. Running the Application

Start the REST API:

    npm start

The server runs at:

http://localhost:3000

## 6. API Endpoint

Method: GET

Endpoint:

    /api/convert/:hex

Example request:

    GET http://localhost:3000/api/convert/FF5733

Expected JSON response:

    {
      "hex": "#FF5733",
      "rgb": {
        "r": 255,
        "g": 87,
        "b": 51
      }
    }

Invalid HEX values return HTTP 400 with an error message.

## 7. Running the Tests

Run all tests:

    npm test

Run unit tests:

    npm run test:unit

Run integration tests:

    npm run test:integration

## 8. Testing Summary

The project contains:

- 12 unit tests for the conversion function.
- 6 integration tests for the REST API.
- Manual API testing using Postman.

The tests cover valid colours, invalid characters,
incorrect input formats, HTTP status codes and
API responses.

## 9. Author

Shoshe Asanin

## 10. Project Purpose

This project was developed as part of a software
testing assignment at LAB University of Applied
Sciences.
