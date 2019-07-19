import express from 'express';
import models from '../models';
import api from '../helpers';
var router = express.Router();

/* GET home page. */
router.get('/', async(req, res, next) => {
  let ads = await api.getAdvertisements();
  res.render('index', {
    ads: ads,
    port: process.env.PORT
    });
});

export default router;
