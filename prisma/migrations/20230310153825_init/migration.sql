-- CreateTable
CREATE TABLE "country" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "country_name" VARCHAR(255) NOT NULL,
    "number_of_regions" INTEGER NOT NULL,

    CONSTRAINT "country_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "region" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "region_name" VARCHAR(255) NOT NULL,
    "roman_number" VARCHAR(10) NOT NULL,
    "region_number" INTEGER NOT NULL,
    "region_iso_3166_2" VARCHAR(5) NOT NULL,
    "region_abbreviation" VARCHAR(5) NOT NULL,
    "countryId" TEXT,

    CONSTRAINT "region_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "province" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "province_name" VARCHAR(255) NOT NULL,
    "province_code" VARCHAR(8) NOT NULL,
    "provincial_capital" VARCHAR(60) NOT NULL,
    "countryId" TEXT,
    "regionIso" TEXT,

    CONSTRAINT "province_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "commune" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "commune_name" VARCHAR(255) NOT NULL,
    "commune_code" VARCHAR(10) NOT NULL,
    "commune_identifier" VARCHAR(15) NOT NULL,
    "commune_postal_code" VARCHAR(12) NOT NULL,
    "commune_coordinates" VARCHAR(200) NOT NULL,
    "provinceCode" TEXT,
    "regionIso" TEXT,

    CONSTRAINT "commune_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "region_region_number_key" ON "region"("region_number");

-- CreateIndex
CREATE UNIQUE INDEX "region_region_iso_3166_2_key" ON "region"("region_iso_3166_2");

-- CreateIndex
CREATE UNIQUE INDEX "province_province_code_key" ON "province"("province_code");

-- CreateIndex
CREATE UNIQUE INDEX "commune_commune_code_key" ON "commune"("commune_code");

-- AddForeignKey
ALTER TABLE "region" ADD CONSTRAINT "region_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "country"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "province" ADD CONSTRAINT "province_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "country"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "province" ADD CONSTRAINT "province_regionIso_fkey" FOREIGN KEY ("regionIso") REFERENCES "region"("region_iso_3166_2") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "commune" ADD CONSTRAINT "commune_provinceCode_fkey" FOREIGN KEY ("provinceCode") REFERENCES "province"("province_code") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "commune" ADD CONSTRAINT "commune_regionIso_fkey" FOREIGN KEY ("regionIso") REFERENCES "region"("region_iso_3166_2") ON DELETE SET NULL ON UPDATE CASCADE;
