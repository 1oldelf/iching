const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from public directory
app.use(express.static('public'));
app.use(express.json());

// I Ching hexagram data
const hexagrams = require('./hexagrams.js');

// API endpoint to get a random hexagram
app.get('/api/consult', (req, res) => {
  // Traditional I Ching method: generate 6 lines
  const lines = [];
  for (let i = 0; i < 6; i++) {
    // Each line is determined by throwing coins/yarrow stalks
    // Simplified: random yang (1) or yin (0)
    lines.push(Math.random() > 0.5 ? 1 : 0);
  }
  
  // Find the hexagram number based on the lines
  const hexagramNumber = calculateHexagramNumber(lines);
  const hexagram = hexagrams[hexagramNumber - 1];
  
  res.json({
    lines,
    hexagram: {
      number: hexagramNumber,
      name: hexagram.name,
      chinese: hexagram.chinese,
      description: hexagram.description,
      judgment: hexagram.judgment
    }
  });
});

// Calculate hexagram number from lines (bottom to top)
function calculateHexagramNumber(lines) {
  // Convert binary to hexagram number (1-64)
  // Lines go from bottom to top in I Ching
  let number = 0;
  for (let i = 0; i < 6; i++) {
    number += lines[i] * Math.pow(2, i);
  }
  // Map to 1-64 range
  return (number % 64) + 1;
}

app.listen(PORT, () => {
  console.log(`I Ching server running on port ${PORT}`);
  console.log(`Visit http://localhost:${PORT} to consult the oracle`);
});
