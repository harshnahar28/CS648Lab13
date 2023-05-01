import express from 'express';

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'text/jsx');
    res.sendFile('index.html', { root: __dirname + '/public' });
  });

app.listen(5000, () => {
  console.log('Server listening on port 5000');
});