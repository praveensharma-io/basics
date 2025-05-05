// const http = require('http');

// const server = http.createServer((req, res) => {
//     if (req.method === 'GET') {
//         res.writeHead(200, { 'Content-Type': 'text/plain' });
//         res.end('GET Request received');
//       } else if (req.method === 'POST') {
//         let body = '';
//         req.on('data', chunk => {
//           body += chunk;
//         });
//         req.on('end', () => {
//           res.writeHead(200, { 'Content-Type': 'application/json' });
//           res.end(JSON.stringify({ received: body }));
//         });
//       }
// });

// server.listen(5000, () => {
//     console.log('Server is running on port 5000');
// });

const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello, Praveen! Welcome to Express.js!');
});

app.use('/api', userRoutes);

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
