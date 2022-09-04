-- CreateTable
CREATE TABLE "Kontakt" (
    "id" SERIAL NOT NULL,
    "profileId" INTEGER NOT NULL,
    "email" TEXT,
    "country" TEXT,
    "city" TEXT,
    "plz" TEXT,
    "street" TEXT,
    "telefon" TEXT,
    "website" TEXT,

    CONSTRAINT "Kontakt_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Kontakt" ADD CONSTRAINT "Kontakt_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
