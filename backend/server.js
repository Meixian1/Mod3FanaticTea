const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
require('dotenv').config();
require('./config/db.js');
const Product = require('./models/Product.js');
const PORT = 3003;

const app = express();
const path = require('path');
const fileUpload = require('express-fileupload');

// START MIDDLEWARE //
app.use(express.json());
app.use(cors({ origin: '*' }));
app.use(morgan('dev'));
app.use(helmet());

app.use((req, res, next) => {
  if (req.path.startsWith('/server')) {
    req.url = req.url.replace('/server', '');
  }
  next();
});

app.use(fileUpload());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// END MIDDLEWARE //

// START ROUTES //
app.get('/products', async (req, res) => {
  let arrayOfProducts = await Product.find();
  res.send(arrayOfProducts);
});

app.delete('/products/:idOfProduct', async (req, res) => {
  let id = req.params.idOfProduct;
  let response = await Product.findByIdAndDelete(id);
  console.log(response);
  res.send('Deleted Product!');
});

app.put('/products/:idOfProduct', async (req, res) => {
  let id = req.params.idOfProduct;
  let response = await Product.findByIdAndUpdate(id, req.body, { new: true });
  console.log(response);
  res.send(response);
});

app.post('/products', async (req, res) => {
  try {

    console.log(req.body)
      const response = await Product.create(req.body);

      res.status(201).send(response);

  } catch (err) {
    console.error(err);
    res.status(500).send({ error: 'Error registering product' });
  }
});

// END ROUTES //
app.listen(PORT, () => {
  console.log(`Server LIVE on port ${PORT}`);
});
