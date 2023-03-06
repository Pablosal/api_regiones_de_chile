/*
  Warnings:

  - You are about to drop the column `regionId` on the `commune` table. All the data in the column will be lost.
  - You are about to drop the column `regionId` on the `province` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[commune_code]` on the table `commune` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[region_number]` on the table `region` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[region_iso_3166_2]` on the table `region` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "commune" DROP CONSTRAINT "commune_regionId_fkey";

-- DropForeignKey
ALTER TABLE "province" DROP CONSTRAINT "province_regionId_fkey";

-- AlterTable
ALTER TABLE "commune" DROP COLUMN "regionId",
ADD COLUMN     "regionIso" TEXT;

-- AlterTable
ALTER TABLE "province" DROP COLUMN "regionId",
ADD COLUMN     "regionIso" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "commune_commune_code_key" ON "commune"("commune_code");

-- CreateIndex
CREATE UNIQUE INDEX "region_region_number_key" ON "region"("region_number");

-- CreateIndex
CREATE UNIQUE INDEX "region_region_iso_3166_2_key" ON "region"("region_iso_3166_2");

-- AddForeignKey
ALTER TABLE "province" ADD CONSTRAINT "province_regionIso_fkey" FOREIGN KEY ("regionIso") REFERENCES "region"("region_iso_3166_2") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "commune" ADD CONSTRAINT "commune_regionIso_fkey" FOREIGN KEY ("regionIso") REFERENCES "region"("region_iso_3166_2") ON DELETE SET NULL ON UPDATE CASCADE;
