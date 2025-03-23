/*
  Warnings:

  - The primary key for the `PasswordReset` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "PasswordReset" DROP CONSTRAINT "PasswordReset_pkey",
ADD CONSTRAINT "PasswordReset_pkey" PRIMARY KEY ("token");
