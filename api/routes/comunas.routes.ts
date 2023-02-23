import { Router } from 'express';
import comunasController from '../controllers/comunas.controller';
const comunasRouter = Router();
comunasRouter.get('/:region_number/comunas', comunasController.getComunasDe);

export default comunasRouter;
