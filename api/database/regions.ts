import prisma from '../database/client';
// Get all communes from one region or multiple regions
class Region {
    constructor() {
        // this.tsRegiones = JSON.parse(regiones);
    }
    async addCountry() {
        await prisma.country.create({
            data:
            {
                country_name: "Chile",
                number_of_regions: 16,

            }
        })
    }
    // async getCommunesFromRegion(regionId) {
    //     const communesFR = await prisma.region.findMany({
    //         where: {
    //             id: regionId
    //         },
    //         include: {
    //             communes: true
    //         }
    //     })
    //     if (!communesFR.length) return 'This region has no communes'
    //     return communesFR
    // }
    // async getProvincesFromRegion(regionId) {
    //     const provincesFR = await prisma.region.findMany({
    //         where: {
    //             id: regionId
    //         },
    //         include: {
    //             provinces: true
    //         }
    //     })
    //     if (!provincesFR.length) return 'This region has no provinces'
    // }
    async getOneRegion(regionId) {
        const region = await prisma.region.findUnique({
            where: {
                id: regionId
            }
        })
        if (!region) return 'A region with that id was not found'
        return region
    }
    async getAllRegions(page = 1, amount = 6) {
        const amountOfSkips = (page - 1) * amount + 1.
        const regions = await prisma.region.findMany({
            skip: amountOfSkips,
            take: amount,
            orderBy: {
                region_number: 'desc'
            }
        })
        if (!regions.length) return 'There are no regions to send'
        return regions

    }
    async addMultipleRegions(regions) {

        const registers = await prisma.region.createMany({ data: regions })
        if (!registers) throw new Error("There's was an error in the creation of the registers");
        return registers
    }

}
const region = new Region();
export default region;
