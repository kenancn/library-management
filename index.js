const express = require('express');
const dotenv = require('dotenv');
const sequelize = require('./src/config/database');
const app = require('./src/app');

// Çevresel değişkenleri yükle
dotenv.config();

// Veritabanını senkronize et
sequelize.sync({ alter: true }) // alter: true, model ile tablo arasındaki uyumsuzlukları düzeltir.
  .then(() => {
    console.log('Veritabanı senkronize edildi.');
    // Express uygulamasını başlat
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error('Veritabanı senkronizasyon hatası:', error);
  });
