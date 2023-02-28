-- AlterTable
ALTER TABLE "province" ADD COLUMN     "regionId" TEXT;

-- AddForeignKey
ALTER TABLE "province" ADD CONSTRAINT "province_regionId_fkey" FOREIGN KEY ("regionId") REFERENCES "region"("id") ON DELETE SET NULL ON UPDATE CASCADE;
