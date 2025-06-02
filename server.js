const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// function to reverse strinf
function reverseString(str) {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

// get str through post req and retrun res
app.post('/reverse', (req, res) => {
  const { input } = req.body;
  if (!input || typeof input !== 'string') {
    return res.status(400).json({ error: 'Please provide a valid string.' });
  }

  const reversed = reverseString(input);
  res.json({ reversed });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
