import communes from "../database/communes"
import province from "../database/province"

class ProvinceService {

    async getCommunesFromProvince(province_code) {
        const communesFP = communes.getAllCommunesFromProvince(province_code)
        return communesFP

    }
    async getOneProvince(province_code) {
        const provinceFromDb = await province.getOneProvince(province_code)
        return provinceFromDb
    }
    async getAllProvinces(page, amount) {
        const provinces = await province.getAllProvinces(page, amount)
        return provinces


    }
    async addMultipleProvinces(provinces) {
        const records = await province.addMultipleProvinces(provinces)
        return records
    }
}

const provinceService = new ProvinceService()
export default provinceService