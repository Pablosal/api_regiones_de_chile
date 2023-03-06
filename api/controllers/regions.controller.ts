import { Response, Request } from 'express';

import regionService from '../services/regions.service';
class RegionsController {
  constructor() {
    // this.tsRegiones = JSON.parse(regiones);
  }
  async getCommunesFromRegion(req: Request, res: Response) {
    const { region_iso } = req.params
    const { page, amount } = req.query
    const communesFR = await regionService.getCommunesFromRegion(region_iso, parseInt(page as string), parseInt(amount as string))
    res.status(200).json({ communes: communesFR })
  }
  async getProvincesFromRegion(req: Request, res: Response) {
    const { region_iso } = req.params

    const { page, amount } = req.query

    const provinces = await regionService.getProvincesFromRegion(region_iso, parseInt(page as string), parseInt(amount as string))
    res.status(200).json({ provinces })

  }
  async getOneRegion(req: Request, res: Response) {
    const { region_iso } = req.params
    const region = await regionService.getOneRegion(region_iso)
    if (!region) return res.status(400).json({ msg: "Region not found" })
    res.status(200).json({ region })
  }
  async getAllRegions(req: Request, res: Response) {
    const { page, amount } = req.query
    const regions = await regionService.getAllRegions(parseInt(page as string), parseInt(amount as string))
    res.status(200).json(regions)
  }
  async addMultipleRegions(req, res) {
    const { regions } = req.body
    const records = await regionService.addMultipleRegions(regions)
    if (!records) return res.status(400).json({ msg: "error in the creation of recors succesfully" })
    return res.status(200).json({ msg: "records created succesfully", records })
  }

}
const regionsController = new RegionsController();
export default regionsController;
