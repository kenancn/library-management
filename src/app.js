const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const bookRoutes = require('./routes/bookRoutes');
const borrowRoutes = require('./routes/borrowRoutes');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

// Orta katmanlar
app.use(bodyParser.json());

// Route'ları yükle
app.use('/users', userRoutes);
app.use('/books', bookRoutes);
app.use('/users', borrowRoutes);

// Hata yönetimi middleware'i
app.use(errorHandler);

module.exports = app;
