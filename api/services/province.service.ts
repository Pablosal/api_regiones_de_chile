import province from "../database/province"

class ProvinceService {
    constructor() {
        // this.tsprovincees = JSON.parse(provincees);
    }
    // async getCommunesFromProvince(provinceId) {
    //     const communesFP = province.getAllCommunesFromProvince(provinceId)
    //     return communesFP

    // }
    async getOneProvince(provinceId) {
        const provinceFromDb = await province.getOneProvince(provinceId)
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