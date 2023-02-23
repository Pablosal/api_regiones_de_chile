import { Router } from 'express';
import communesController from '../../controllers/communes.controller';
const communesRouter = Router();

//  Obtain all communes
communesRouter.get('/communes', communesController.getComunasDe);
// Obtain communes from a single region or multiple regions
communesRouter.get('/communes/:regions', communesController.getComunasDe);

// Obtain communes from a province
communesRouter.get('/communes/:province_code', communesController.getComunasDe);

// obtain a sole commune info
communesRouter.get('/commune/:commune_code', communesController.getComunasDe);


export default communesRouter;
