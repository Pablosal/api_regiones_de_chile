import { Response, Request } from 'express';
import provinceService from '../services/province.service';

class ProvincesController {
    constructor() {
        // this.tsRegiones = JSON.parse(regiones);
    }

    async getAllCommunesFromProvince(req: Request, res: Response) {
        const { province_code } = req.params
        const communesFP = await provinceService.getCommunesFromProvince(province_code)
        res.status(200).json({
            communes: communesFP
        })
    }
    async getOneProvince(req: Request, res: Response) {
        const { province_code } = req.params
        const province = await provinceService.getOneProvince(province_code)
        if (!province) return res.status(400).json({ msg: "Province not found" })
        res.status(200).json({ province })
    }
    async getAllProvinces(req: Request, res: Response) {
        const { page, amount } = req.query

        const provinces = await provinceService.getAllProvinces(Number(page), Number(amount))
        res.status(200).json(provinces)


    }
    async addMultipleProvinces(req, res) {
        const { provinces } = req.body
        const records = await provinceService.addMultipleProvinces(provinces)
        if (!records) return res.status(400).json({ msg: "error in the creation of recors succesfully" })
        return res.status(200).json({ msg: "records created succesfully", records })
    }

}
const provincesController = new ProvincesController();
export default provincesController;
