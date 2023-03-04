import prisma from '../database/client';
// Get all communes from one region or multiple regions
class Province {
    constructor() {
        // this.tsRegiones = JSON.parse(regiones);
    }
    // async getAllCommunesFromProvince(provinceId) {
    //     const communesFromProvince = await prisma.province.findMany({
    //         where: {
    //             id: provinceId
    //         },
    //         select: {
    //             communes: {
    //                 select: {
    //                     commune_name: true,
    //                     commune_code: true

    //                 }
    //             }
    //         }
    //     })
    //     if (!communesFromProvince.length) return 'This province does not have any commune'
    //     return communesFromProvince
    // }
    async getOneProvince(provinceId) {
        const province = await prisma.province.findUnique({
            where: {
                id: provinceId
            }
        })
        if (!province) return 'A province with that id was not found'
        return province
    }
    async getAllProvinces(page = 1, amount = 6) {
        const amountOfSkips = (page - 1) * amount + 1.

        const provinces = await prisma.province.findMany({
            skip: amountOfSkips,
            take: amount,
            orderBy: {
                province_name: 'desc'
            }
        })
        if (!provinces.length) return 'There are no regions in the table yet'
        return provinces

    }
    async addMultipleProvinces(provinces) {
        const registers = await prisma.province.createMany({ data: provinces })
        if (!registers) throw new Error("There's was an error in the creation of the registers");
        return registers
    }

}
const province = new Province();
export default province;
