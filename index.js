const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

const petsRouter = require('./routes/pets');

app.use(cors());
app.use(bodyParser.json());

app.use('/api/pets', petsRouter);

app.get('/', (req, res) => {
  res.json({ message: 'API siap digunakan!' });
});

app.listen(PORT, () => {
  console.log(`Server berjalan di port ${PORT}`);
});
