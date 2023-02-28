import province from "../database/province"

class ProvinceService {
    constructor() {
        // this.tsprovincees = JSON.parse(provincees);
    }
    async getCommunesFromProvince(provinceId) {
        const communesFP = province.getAllCommunesFromProvince(provinceId)
        return communesFP

    }
    async getOneProvince(provinceId) {
        const provinceFromDb = await province.getOneProvince(provinceId)
        return provinceFromDb
    }
    async getAllProvinces() {
        const provinces = await province.getAllProvinces()
        return provinces


    }
    async addMultipleProvinces(provinces) {
        const records = await province.addMultipleRegions(provinces)
        return records
    }
}

const provinceService = new ProvinceService()
export default provinceService