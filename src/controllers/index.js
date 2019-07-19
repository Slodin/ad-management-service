import express from 'express';
import adController from '../controllers/advertisements';

var router = express.Router();

router.use('/ads', adController);

export default router;