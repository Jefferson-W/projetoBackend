-- DropForeignKey
ALTER TABLE "CheckIn" DROP CONSTRAINT "CheckIn_user_id_fkey";

-- AlterTable
ALTER TABLE "CheckIn" ALTER COLUMN "user_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "CheckIn" ADD CONSTRAINT "CheckIn_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
