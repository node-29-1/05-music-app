const express = require('express');
const genreRouter = require('./genre.router');
const artistRouter = require('./artist.router');
const router = express.Router();

// colocar las rutas aquí
router.use('/genres', genreRouter);
router.use('/artists', artistRouter);

module.exports = router;
