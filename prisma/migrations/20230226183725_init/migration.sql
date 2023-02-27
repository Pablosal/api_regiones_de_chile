-- CreateTable
CREATE TABLE "countries" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "country_name" VARCHAR(255) NOT NULL,
    "number_of_regions" INTEGER NOT NULL,

    CONSTRAINT "countries_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "provinces" (
    "id" TEXT NOT NULL,
    "province_name" VARCHAR(255) NOT NULL,
    "province_code" VARCHAR(8) NOT NULL,
    "provincial_capital" VARCHAR(8) NOT NULL,

    CONSTRAINT "provinces_pkey" PRIMARY KEY ("id")
);
