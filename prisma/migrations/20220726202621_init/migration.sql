/*
  Warnings:

  - You are about to drop the `interests` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_InterestToProfile" DROP CONSTRAINT "_InterestToProfile_A_fkey";

-- DropTable
DROP TABLE "interests";

-- CreateTable
CREATE TABLE "Interest" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "checked" BOOLEAN NOT NULL DEFAULT false,
    "focus" TEXT[],

    CONSTRAINT "Interest_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Interest_name_key" ON "Interest"("name");

-- AddForeignKey
ALTER TABLE "_InterestToProfile" ADD CONSTRAINT "_InterestToProfile_A_fkey" FOREIGN KEY ("A") REFERENCES "Interest"("id") ON DELETE CASCADE ON UPDATE CASCADE;
