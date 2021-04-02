var express = require('express')
const regionController = require("../controllers/regiones.controller")
const router = express.Router()

router.get("/", regionController.getAllRegions)
router.get("/:id",regionController.getSpecificRegion)
module.exports = router