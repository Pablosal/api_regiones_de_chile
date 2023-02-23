import express from 'express';
import regionController from '../controllers/regiones.controller';
const regionesRoutes = express.Router();

regionesRoutes.get('/', regionController.getAllRegions);

export default regionesRoutes;
