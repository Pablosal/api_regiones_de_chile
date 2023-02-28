import { Response, Request } from 'express';
import provinceService from '../services/province.service';

class ProvincesController {
    constructor() {
        // this.tsRegiones = JSON.parse(regiones);
    }

    async getAllCommunesFromProvince(req: Request, res: Response) {
        const { provinceId } = req.params
        const communesFP = await provinceService.getCommunesFromProvince(provinceId)
        res.status(200).json({
            communes: communesFP
        })
    }
    async getOneProvince(req: Request, res: Response) {
        const { provinceId } = req.params
        const province = await provinceService.getOneProvince(provinceId)
        if (!province) return res.status(400).json({ msg: "Province not found" })
        res.status(200).json({ province })
    }
    async getAllProvinces(req: Request, res: Response) {

        const provinces = await provinceService.getAllProvinces()
        res.status(200).json(provinces)


    }
    async addMultipleProvinces(req, res) {
        const { provinces } = req.body
        const records = await provinceService.addMultipleProvinces(provinces)
        console.log(records)
        if (!records) return res.status(400).json({ msg: "error in the creation of recors succesfully" })
        return res.status(200).json({ msg: "records created succesfully", records })
    }

}
const provincesController = new ProvincesController();
export default provincesController;
