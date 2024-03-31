/*
  Warnings:

  - Made the column `owner_id` on table `categories` required. This step will fail if there are existing NULL values in that column.
  - Made the column `owner_id` on table `transactions` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "categories" DROP CONSTRAINT "categories_owner_id_fkey";

-- DropForeignKey
ALTER TABLE "transactions" DROP CONSTRAINT "transactions_owner_id_fkey";

-- AlterTable
ALTER TABLE "categories" ALTER COLUMN "owner_id" SET NOT NULL;

-- AlterTable
ALTER TABLE "transactions" ALTER COLUMN "owner_id" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "categories" ADD CONSTRAINT "categories_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transactions" ADD CONSTRAINT "transactions_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
