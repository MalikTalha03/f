const express = require('express');
const path = require('path');

const app = express();
const PORT = 4001;

// Route for serving the sample.txt file
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'sample.txt'));
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
