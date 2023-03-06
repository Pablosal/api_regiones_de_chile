import { Request, Response } from "express"
import communesService from "../services/communes.service"

class CommunesController {
  async getOneCommune(req: Request, res: Response) {
    const { commune_code } = req.params
    const commune = await communesService.getOneCommune(commune_code)
    if (!commune) return res.status(400).json({ msg: "commune not found" })
    res.status(200).json({ commune })
  }
  async getAllCommunes(req: Request, res: Response) {
    const { page, amount } = req.query
    const regions = await communesService.getAllCommunes(parseInt(page as string), parseInt(amount as string))
    res.status(200).json(regions)


  }
  async addMultipleCommunes(req, res) {
    const { communes } = req.body
    const records = await communesService.addMultipleCommunes(communes)
    if (!records) return res.status(400).json({ msg: "error in the creation of recors succesfully" })
    return res.status(200).json({ msg: "records created succesfully", records })
  }
}

const communesController = new CommunesController();
export default communesController;
