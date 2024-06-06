/*
  Warnings:

  - Made the column `chamado` on table `CheckIn` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "CheckIn" ALTER COLUMN "chamado" SET NOT NULL;
