import { Router } from 'express';
import communesController from '../../controllers/communes.controller';
const communesRouter = Router();

//  Obtain all communes
communesRouter.get('/', communesController.getAllCommunes);

// Obtain communes from a province
// communesRouter.get('/:province_code', communesController.getComunasDe);

// obtain a sole commune info
communesRouter.get('/:commune_code', communesController.getOneCommune);


export default communesRouter;
