import express from 'express'
import provincesController from '../../controllers/provinces.controller'

const provincesRouter = express.Router()
// Poblate provinces table
provincesRouter.post("/", provincesController.addMultipleProvinces)
// Obtain all provinces
provincesRouter.get("/", provincesController.getAllProvinces)
//  Obtain one province
provincesRouter.get("/:province_code", provincesController.getOneProvince)

// Obtain all communes from a province
provincesRouter.get("/:province_code/communes", provincesController.getAllCommunesFromProvince)


export default provincesRouter