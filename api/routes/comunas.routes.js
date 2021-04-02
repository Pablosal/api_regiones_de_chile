const { Router } = require("express");
const ComunasController = require("../controllers/comunas.controller");
const comunasRouter = Router();
comunasRouter.get("/:region_number/comunas", ComunasController.getComunasDe);

module.exports = comunasRouter;
