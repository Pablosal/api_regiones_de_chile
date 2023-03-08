import { Router } from 'express';
import communesController from '../../controllers/communes.controller';
import apicache from 'apicache'

const cache = apicache.middleware


const communesRouter = Router();



//  Obtain all communes
communesRouter.get('/', cache('3000'), communesController.getAllCommunes);

// obtain a sole commune info
communesRouter.get('/:commune_code', cache('3000'), communesController.getOneCommune);

communesRouter.post('/', communesController.addMultipleCommunes);

export default communesRouter;
