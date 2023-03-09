import communes from "../database/communes";
import province from "../database/province";
import region from "../database/regions";

class RegionService {

    async getCommunesFromRegion(region_iso, page = 1, amount = 10) {
        const communesFR = await communes.getCommunesFromRegion(region_iso, page, amount)
        return communesFR
    }
    async getProvincesFromRegion(region_iso, page = 1, amount = 10) {
        const provincesFR = await province.getProvincesFromRegion(region_iso, page, amount)
        return provincesFR


    }
    async getOneRegion(region_iso) {
        const regionFromDb = await region.getOneRegion(region_iso)
        return regionFromDb
    }
    async getAllRegions(page, amount) {
        const regions = await region.getAllRegions(page, amount)
        return regions


    }
    async addMultipleRegions(regions) {
        const records = await region.addMultipleRegions(regions)
        return records
    }
}

const regionService = new RegionService()
export default regionService