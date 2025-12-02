const express = require('express');
const path = require('path');
const app = express();

// Set up static files middleware
app.use(express.static(path.join(__dirname, 'public'))); // Assuming your CSS file is in the 'public' directory
// ... (your other routes)

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Now listening on localhost:${PORT}`);
});