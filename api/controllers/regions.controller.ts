import { Response, Request } from 'express';

import regionService from '../services/regions.service';
class RegionsController {
  constructor() {
    // this.tsRegiones = JSON.parse(regiones);
  }
  async getCommunesFromRegion(req: Request, res: Response) {
    const { regionId } = req.params
    const communesFR = await regionService.getCommunesFromRegion(regionId)


    res.status(200).json({ communesFR })

  }
  async getProvincesFromRegion(req: Request, res: Response) {
    const { regionId } = req.params
    const provincesFR = await regionService.getProvincesFromRegion(regionId)


    res.status(200).json({ provincesFR })

  }
  async getOneRegion(req: Request, res: Response) {
    const { regionId } = req.params
    const region = await regionService.getOneRegion(regionId)
    if (!region) return res.status(400).json({ msg: "Region not found" })
    res.status(200).json({ region })
  }
  async getAllRegions(req: Request, res: Response) {

    const regions = await regionService.getAllRegions()
    res.status(200).json(regions)


  }
  async addMultipleRegions(req, res) {
    const { regions } = req.body
    const records = await regionService.addMultipleRegions(regions)
    console.log(records)
    if (!records) return res.status(400).json({ msg: "error in the creation of recors succesfully" })
    return res.status(200).json({ msg: "records created succesfully", records })
  }

}
const regionsController = new RegionsController();
export default regionsController;
