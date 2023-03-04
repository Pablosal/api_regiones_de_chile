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
CREATE TABLE "province" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "province_name" VARCHAR(255) NOT NULL,
    "province_code" VARCHAR(8) NOT NULL,
    "provincial_capital" VARCHAR(8) NOT NULL,
    "countryId" TEXT,
    "regionId" TEXT,

    CONSTRAINT "province_pkey" PRIMARY KEY ("id")
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
CREATE TABLE "commune" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "commune_name" VARCHAR(255) NOT NULL,
    "commune_code" VARCHAR(10) NOT NULL,
    "commune_identifier" VARCHAR(5) NOT NULL,
    "commune_postal_code" VARCHAR(12) NOT NULL,
    "commune_coordinates" VARCHAR(200) NOT NULL,
    "provinceId" TEXT,
    "regionId" TEXT,

    CONSTRAINT "commune_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "province" ADD CONSTRAINT "province_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "country"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "province" ADD CONSTRAINT "province_regionId_fkey" FOREIGN KEY ("regionId") REFERENCES "region"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "region" ADD CONSTRAINT "region_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "country"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "commune" ADD CONSTRAINT "commune_provinceId_fkey" FOREIGN KEY ("provinceId") REFERENCES "province"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "commune" ADD CONSTRAINT "commune_regionId_fkey" FOREIGN KEY ("regionId") REFERENCES "region"("id") ON DELETE SET NULL ON UPDATE CASCADE;
