import express from 'express';
import regionsController from '../../controllers/regions.controller';
const regionsRouter = express.Router();


regionsRouter.route("/")
    // Obtain all regions
    .get(regionsController.getAllRegions)
    // Bulk add regions
    .post(regionsController.addMultipleRegions)
// Obtain info from a single region
regionsRouter.get('/:region_iso', regionsController.getOneRegion);
// ?!Obtain communes from a single region or multiple regions
regionsRouter.get('/:region_iso/communes', regionsController.getCommunesFromRegion);
// ?! Obtain all provinces from a region
regionsRouter.get('/:region_iso/provinces', regionsController.getProvincesFromRegion);

export default regionsRouter;
