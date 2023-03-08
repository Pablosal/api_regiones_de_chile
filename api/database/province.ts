import prisma from '../database/client';
class Province {

    async getOneProvince(province_code) {
        const province = await prisma.province.findFirst({
            select: {
                id: true,
                province_name: true,
                province_code: true,
                provincial_capital: true,
                regionIso: true
            },
            where: {
                province_code
            }
        })
        if (!province) return 'A province with that id was not found'
        return province
    }
    async getAllProvinces(page = 1, amount = 6) {
        let provinces;
        if (!Number.isNaN(page)) {
            const amountOfSkips = (page - 1) * amount + 1.
            provinces = await prisma.province.findMany({
                skip: amountOfSkips,
                take: amount, select: {
                    id: true,
                    province_name: true,
                    province_code: true,
                    provincial_capital: true,
                    regionIso: true
                },
                orderBy: {
                    province_name: 'desc'
                }
            })
        } else {
            provinces = await prisma.province.findMany({
                select: {
                    id: true,
                    province_name: true,
                    province_code: true,
                    provincial_capital: true,
                    regionIso: true
                },
                orderBy: {
                    province_name: 'desc'
                }
            })

        }
        if (!provinces.length) return 'There are no provinces in the table yet'
        return provinces

    }
    async addMultipleProvinces(provinces) {
        try {
            const registers = await prisma.province.createMany({ data: provinces })

            if (!registers) throw new Error("There's was an error in the creation of the registers");
            return registers

        } catch (error) {
            console.log({ error })
        }
    }
    async getProvincesFromRegion(region_iso, page = 1, amount = 10) {
        let provincesFR

        if (!Number.isNaN(page)) {
            const amountOfSkips = (page - 1) * amount + 1.
            provincesFR = await prisma.province.findMany({
                select: {
                    id: true,
                    province_name: true,
                    province_code: true,
                    provincial_capital: true,
                    regionIso: true
                },
                where: {
                    regionIso: region_iso
                },
                take: amount,
                skip: amountOfSkips

            })
        } else {
            provincesFR = await prisma.province.findMany({
                select: {
                    id: true,
                    province_name: true,
                    province_code: true,
                    provincial_capital: true,
                    regionIso: true
                },
                where: {
                    regionIso: region_iso
                },
                orderBy: {
                    province_name: "desc"
                }
            })
        }
        if (!provincesFR.length) return 'This region has no provinces'
        return provincesFR
    }
}
const province = new Province();
export default province;
