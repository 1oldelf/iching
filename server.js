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
  // Simplified method: directly pick a random hexagram from 1-64
  const hexagramNumber = Math.floor(Math.random() * 64) + 1;
  const hexagram = hexagrams[hexagramNumber - 1];
  
  // Generate 6 random lines for visual display
  const lines = [];
  for (let i = 0; i < 6; i++) {
    lines.push(Math.random() > 0.5 ? 1 : 0);
  }
  
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

app.listen(PORT, () => {
  console.log(`I Ching server running on port ${PORT}`);
  console.log(`Visit http://localhost:${PORT} to consult the oracle`);
});
