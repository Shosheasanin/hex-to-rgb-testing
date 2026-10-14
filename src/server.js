/**
 * File: server.js
 * Description: Starts the Express REST API
 * server on port 3000.
 */

const app = require("./app");

// Set the server port.
const PORT = process.env.PORT || 3000;

// Start the server.
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});