const express = require('express');
const app = express();
app.use(express.json());

app.post('/add', (req, res) => {
  const { num1, num2 } = req.body;
  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    return res.status(400).send('Invalid input');
  }
  const result = num1 + num2;
  res.send({ result });
});

app.post('/sub', (req, res) => {
  const { num1, num2 } = req.body;
  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    return res.status(400).send('Invalid input');
  }
  const result = num1 - num2;
  res.send({ result });
});

app.post('/mul', (req, res) => {
  const { num1, num2 } = req.body;
  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    return res.status(400).send('Invalid input');
  }
  const result = num1 * num2;
  res.send({ result });
});

app.post('/div', (req, res) => {
  const { num1, num2 } = req.body;
  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    return res.status(400).send('Invalid input');
  }
  if (num2 === 0) {
    return res.status(400).send('Cannot divide by zero');
  }
  const result = num1 / num2;
  res.send({ result });
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});