import express from 'express';

import connectToDatabase from './helpers.mjs'

const app = express();

app.get('/', (req, res) => {
  res.send('<html><body><h1 style=”color:Blue;”>Welcome to CloudSpace website launched using user data through AWS CLI by Fokoue Thomas</h1></body></html>');
});

await connectToDatabase();

app.listen(3000);
  