import express from 'express';
import React from 'react';
import ReactDOM from 'react-dom';
const app = express();
app.get('/', (req, res) => {
  res.send('<html><body><h1>Simple Calculator</h1></body></html>');
});
app.listen(3000, () => {
  console.log('Server started on port 3000');
});