/*
  Warnings:

  - You are about to drop the column `imageId` on the `Category` table. All the data in the column will be lost.
  - You are about to alter the column `name` on the `Category` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(50)`.
  - You are about to drop the column `url` on the `Images` table. All the data in the column will be lost.
  - You are about to alter the column `name` on the `Product` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(100)`.
  - You are about to alter the column `description` on the `Product` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(150)`.
  - You are about to alter the column `name` on the `User` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(100)`.
  - A unique constraint covering the columns `[imageId]` on the table `Product` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `path` to the `Images` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imageId` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Category` DROP FOREIGN KEY `Category_imageId_fkey`;

-- DropIndex
DROP INDEX `Category_imageId_key` ON `Category`;

-- AlterTable
ALTER TABLE `Category` DROP COLUMN `imageId`,
    MODIFY `name` VARCHAR(50) NOT NULL;

-- AlterTable
ALTER TABLE `Images` DROP COLUMN `url`,
    ADD COLUMN `path` VARCHAR(100) NOT NULL;

-- AlterTable
ALTER TABLE `Product` ADD COLUMN `imageId` INTEGER NOT NULL,
    MODIFY `name` VARCHAR(100) NOT NULL,
    MODIFY `description` VARCHAR(150) NOT NULL;

-- AlterTable
ALTER TABLE `User` MODIFY `name` VARCHAR(100) NOT NULL,
    MODIFY `password` VARCHAR(255) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Product_imageId_key` ON `Product`(`imageId`);

-- AddForeignKey
ALTER TABLE `Product` ADD CONSTRAINT `Product_imageId_fkey` FOREIGN KEY (`imageId`) REFERENCES `Images`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
