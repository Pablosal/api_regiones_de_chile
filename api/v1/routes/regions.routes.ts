import express from 'express';
import regionsController from '../../controllers/regions.controller';
import apicache from 'apicache'
const regionsRouter = express.Router();
const cache = apicache.middleware

regionsRouter.route("/")
    // Obtain all regions
    .get(cache("2 minutes"), regionsController.getAllRegions)
    // Bulk add regions
    .post(regionsController.addMultipleRegions)
// ?!Obtain communes from a single region or multiple regions
regionsRouter.get('/:region_iso/communes', cache("5000"), regionsController.getCommunesFromRegion);
// Obtain info from a single region
regionsRouter.get('/:region_iso', cache("5000"), regionsController.getOneRegion);
// ?! Obtain all provinces from a region
regionsRouter.get('/:region_iso/provinces', cache("5000"), regionsController.getProvincesFromRegion);

export default regionsRouter;
