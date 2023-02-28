import prisma from '../database/client';

class Communes {
    async getOneCommune(communeId) {
        const commune = await prisma.commune.findUnique({
            where: {
                id: communeId
            }
        })
        if (!commune) return 'A commune with that id was not found'
        return commune
    }
    async getAllCommunes() {
        const communes = await prisma.commune.findMany()
        if (!communes.length) return 'There are no coomunes in the table yet'
        return communes

    }
    async addMultipleCommunes(regions) {
        const registers = await prisma.commune.createMany({ data: regions })
        if (!registers) throw new Error("There's was an error in the creation of the registers");
        return registers
    }

}
const communes = new Communes();
export default communes;
