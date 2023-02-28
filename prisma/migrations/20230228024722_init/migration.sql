/*
  Warnings:

  - Made the column `regionId` on table `commune` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "commune" DROP CONSTRAINT "commune_regionId_fkey";

-- AlterTable
ALTER TABLE "commune" ADD COLUMN     "provinceId" TEXT,
ALTER COLUMN "regionId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "commune" ADD CONSTRAINT "commune_regionId_fkey" FOREIGN KEY ("regionId") REFERENCES "region"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "commune" ADD CONSTRAINT "commune_provinceId_fkey" FOREIGN KEY ("provinceId") REFERENCES "province"("id") ON DELETE SET NULL ON UPDATE CASCADE;
