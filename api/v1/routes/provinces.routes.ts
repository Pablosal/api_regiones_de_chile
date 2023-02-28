import express from 'express'
import provincesController from '../../controllers/provinces.controller'

const provincesRouter = express.Router()
// Obtain all provinces
provincesRouter.get("/", provincesController.getAllProvinces)
//  Obtain one province
provincesRouter.get("/:provinceId", provincesController.getOneProvince)

// Obtain all communes from a province
provincesRouter.get("/:provinceId/communes", provincesController.getAllCommunesFromProvince)


export default provincesRouter