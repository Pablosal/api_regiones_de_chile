import express from 'express';
import regionsController from '../../controllers/regions.controller';
const regionsRouter = express.Router();


// Obtain all regions
regionsRouter.get('/regions/', regionsController.getAllRegions);
// Obtain info from a single region
regionsRouter.get('/regions/:region_iso', regionsController.getAllRegions);

export default regionsRouter;
