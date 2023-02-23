import express from 'express'

const provincesRouter = express.Router()
// Obtain all provinces
provincesRouter.get("/provinces/")
// Obtain all provinces from a region
provincesRouter.get("/provinces/:region_num")


export default provincesRouter