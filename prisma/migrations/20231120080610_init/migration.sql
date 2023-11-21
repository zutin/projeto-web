/*
  Warnings:

  - You are about to drop the column `allowComments` on the `posts` table. All the data in the column will be lost.
  - You are about to drop the column `allowLikes` on the `posts` table. All the data in the column will be lost.
  - You are about to drop the column `allowPublicDob` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `allowPublicName` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `dob` on the `users` table. All the data in the column will be lost.
  - You are about to drop the `friends` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `post_comments` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `post_likes` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `post_photos` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `friends` DROP FOREIGN KEY `friends_receiverId_fkey`;

-- DropForeignKey
ALTER TABLE `friends` DROP FOREIGN KEY `friends_senderId_fkey`;

-- DropForeignKey
ALTER TABLE `post_comments` DROP FOREIGN KEY `post_comments_postId_fkey`;

-- DropForeignKey
ALTER TABLE `post_comments` DROP FOREIGN KEY `post_comments_userId_fkey`;

-- DropForeignKey
ALTER TABLE `post_likes` DROP FOREIGN KEY `post_likes_postId_fkey`;

-- DropForeignKey
ALTER TABLE `post_likes` DROP FOREIGN KEY `post_likes_userId_fkey`;

-- DropForeignKey
ALTER TABLE `post_photos` DROP FOREIGN KEY `post_photos_postId_fkey`;

-- AlterTable
ALTER TABLE `posts` DROP COLUMN `allowComments`,
    DROP COLUMN `allowLikes`;

-- AlterTable
ALTER TABLE `users` DROP COLUMN `allowPublicDob`,
    DROP COLUMN `allowPublicName`,
    DROP COLUMN `dob`;

-- DropTable
DROP TABLE `friends`;

-- DropTable
DROP TABLE `post_comments`;

-- DropTable
DROP TABLE `post_likes`;

-- DropTable
DROP TABLE `post_photos`;
