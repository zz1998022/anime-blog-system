/*
 Navicat Premium Data Transfer

 Source Server         : local
 Source Server Type    : MySQL
 Source Server Version : 50723
 Source Host           : localhost:3306
 Source Schema         : anime_blog

 Target Server Type    : MySQL
 Target Server Version : 50723
 File Encoding         : 65001

 Date: 09/07/2021 11:48:15
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for anime_about
-- ----------------------------
DROP TABLE IF EXISTS `anime_about`;
CREATE TABLE `anime_about` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '关于文章id',
  `content` text COMMENT '关于文章内容',
  `users` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of anime_about
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for anime_article
-- ----------------------------
DROP TABLE IF EXISTS `anime_article`;
CREATE TABLE `anime_article` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '文章id',
  `title` varchar(40) NOT NULL COMMENT '文章标题',
  `picture` varchar(200) NOT NULL DEFAULT '/upload/cover.webp文章头图',
  `content` text NOT NULL COMMENT '文章内容',
  `author` int(11) NOT NULL COMMENT '文章作者',
  `publishTime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '文章发布时间',
  `updateTime` datetime DEFAULT NULL COMMENT '文章更新时间',
  `category` int(11) DEFAULT '0' COMMENT '文章分类',
  `comments` int(11) NOT NULL COMMENT '文章评论',
  `tag` int(11) NOT NULL DEFAULT '0' COMMENT '文章标签',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=60 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of anime_article
-- ----------------------------
BEGIN;
INSERT INTO `anime_article` VALUES (1, 'JavaScript 陣列方法', 'https://nekochan.vercel.app/posts/677b/cover.webp', '# 这是一篇文章', 1, '2021-07-07 01:02:12', NULL, 1, 1, 1);
INSERT INTO `anime_article` VALUES (2, 'express教程', 'https://nekochan.vercel.app/posts/677b/cover.webp', '# 这是一篇文章', 1, '2021-07-07 03:03:12', NULL, 2, 1, 2);
INSERT INTO `anime_article` VALUES (40, 'JavaScript 陣列方法', 'https://nekochan.vercel.app/posts/677b/cover.webp', '# 这是一篇文章', 1, '2021-07-07 00:06:12', NULL, 1, 1, 1);
INSERT INTO `anime_article` VALUES (41, 'JavaScript 陣列方法', 'https://nekochan.vercel.app/posts/677b/cover.webp', '# 这是一篇文章', 1, '2021-07-07 01:03:09', NULL, 1, 1, 1);
INSERT INTO `anime_article` VALUES (42, 'JavaScript 陣列方法', 'https://nekochan.vercel.app/posts/677b/cover.webp', '# 这是一篇文章', 1, '2021-07-02 01:03:12', NULL, 1, 1, 1);
INSERT INTO `anime_article` VALUES (43, 'JavaScript 陣列方法', 'https://nekochan.vercel.app/posts/677b/cover.webp', '# 这是一篇文章', 1, '2021-07-02 03:03:12', NULL, 1, 1, 1);
INSERT INTO `anime_article` VALUES (44, 'JavaScript 陣列方法', 'https://nekochan.vercel.app/posts/677b/cover.webp', '# 这是一篇文章', 1, '2021-05-07 01:03:12', NULL, 1, 1, 1);
INSERT INTO `anime_article` VALUES (45, 'JavaScript 陣列方法', 'https://nekochan.vercel.app/posts/677b/cover.webp', '# 这是一篇文章', 1, '2021-02-02 01:03:12', NULL, 1, 1, 1);
INSERT INTO `anime_article` VALUES (46, 'JavaScript 陣列方法', 'https://nekochan.vercel.app/posts/677b/cover.webp', '# 这是一篇文章', 1, '2021-07-07 01:03:12', NULL, 1, 1, 1);
INSERT INTO `anime_article` VALUES (47, 'JavaScript 陣列方法', 'https://nekochan.vercel.app/posts/677b/cover.webp', '# 这是一篇文章', 1, '2021-07-07 01:03:12', NULL, 1, 1, 1);
INSERT INTO `anime_article` VALUES (48, 'JavaScript 陣列方法', 'https://nekochan.vercel.app/posts/677b/cover.webp', '# 这是一篇文章', 1, '2021-07-07 01:03:12', NULL, 1, 1, 1);
INSERT INTO `anime_article` VALUES (49, 'JavaScript 陣列方法', 'https://nekochan.vercel.app/posts/677b/cover.webp', '# 这是一篇文章', 1, '2021-07-07 01:03:12', NULL, 1, 1, 1);
INSERT INTO `anime_article` VALUES (50, 'JavaScript 陣列方法', 'https://nekochan.vercel.app/posts/677b/cover.webp', '# 这是一篇文章', 1, '2021-07-07 01:03:12', NULL, 1, 1, 1);
INSERT INTO `anime_article` VALUES (51, 'JavaScript 陣列方法', 'https://nekochan.vercel.app/posts/677b/cover.webp', '# 这是一篇文章', 1, '2021-07-07 01:03:12', NULL, 1, 1, 1);
INSERT INTO `anime_article` VALUES (52, 'JavaScript 陣列方法', 'https://nekochan.vercel.app/posts/677b/cover.webp', '# 这是一篇文章', 1, '2021-07-07 01:03:12', NULL, 1, 1, 1);
INSERT INTO `anime_article` VALUES (53, 'JavaScript 陣列方法', 'https://nekochan.vercel.app/posts/677b/cover.webp', '# 这是一篇文章', 1, '2021-07-07 01:03:12', NULL, 1, 1, 1);
INSERT INTO `anime_article` VALUES (54, 'JavaScript 陣列方法', 'https://nekochan.vercel.app/posts/677b/cover.webp', '# 这是一篇文章', 1, '2021-07-07 01:03:12', NULL, 1, 1, 1);
INSERT INTO `anime_article` VALUES (55, 'JavaScript 陣列方法', 'https://nekochan.vercel.app/posts/677b/cover.webp', '# 这是一篇文章', 1, '2021-07-07 01:03:12', NULL, 1, 1, 1);
INSERT INTO `anime_article` VALUES (56, 'JavaScript 陣列方法', 'https://nekochan.vercel.app/posts/677b/cover.webp', '# 这是一篇文章', 1, '2021-07-07 01:03:12', NULL, 1, 1, 1);
INSERT INTO `anime_article` VALUES (57, 'JavaScript 陣列方法', 'https://nekochan.vercel.app/posts/677b/cover.webp', '# 这是一篇文章', 1, '2021-07-07 01:03:12', NULL, 1, 1, 1);
INSERT INTO `anime_article` VALUES (58, 'JavaScript 陣列方法', 'https://nekochan.vercel.app/posts/677b/cover.webp', '# 这是一篇文章', 1, '2021-07-07 01:03:12', NULL, 1, 1, 1);
INSERT INTO `anime_article` VALUES (59, 'JavaScript 陣列方法', 'https://nekochan.vercel.app/posts/677b/cover.webp', '# 这是一篇文章', 1, '2021-07-07 01:03:12', NULL, 1, 1, 1);
COMMIT;

-- ----------------------------
-- Table structure for anime_category
-- ----------------------------
DROP TABLE IF EXISTS `anime_category`;
CREATE TABLE `anime_category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `category_name` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of anime_category
-- ----------------------------
BEGIN;
INSERT INTO `anime_category` VALUES (1, '其他');
INSERT INTO `anime_category` VALUES (2, '前端');
COMMIT;

-- ----------------------------
-- Table structure for anime_comments
-- ----------------------------
DROP TABLE IF EXISTS `anime_comments`;
CREATE TABLE `anime_comments` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '评论id',
  `nickname` varchar(20) NOT NULL COMMENT '评论者昵称',
  `email` varchar(40) NOT NULL COMMENT '评论者邮箱',
  `website` varchar(40) DEFAULT NULL COMMENT '评论者网站',
  `content` text NOT NULL COMMENT '评论内容',
  `publishTime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `article_id` int(11) NOT NULL COMMENT '文章id',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of anime_comments
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for anime_tag
-- ----------------------------
DROP TABLE IF EXISTS `anime_tag`;
CREATE TABLE `anime_tag` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `tagName` varchar(20) NOT NULL,
  `tagColor` varchar(20) NOT NULL DEFAULT '#000000',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of anime_tag
-- ----------------------------
BEGIN;
INSERT INTO `anime_tag` VALUES (1, '未分类', 'null');
INSERT INTO `anime_tag` VALUES (2, 'nodejs', '#000000');
COMMIT;

-- ----------------------------
-- Table structure for anime_users
-- ----------------------------
DROP TABLE IF EXISTS `anime_users`;
CREATE TABLE `anime_users` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '用户id',
  `username` varchar(20) NOT NULL COMMENT '用户账号',
  `password` varchar(40) NOT NULL COMMENT '用户密码',
  `email` varchar(40) NOT NULL COMMENT '用户邮箱',
  `avatar` varchar(200) NOT NULL DEFAULT '/uploads/avatar.jpg' COMMENT '用户头像',
  `nickname` varchar(40) NOT NULL DEFAULT 'nyan~nyan~nyan' COMMENT '用户名称',
  `introduction` text COMMENT '用户简介',
  `about` int(11) NOT NULL COMMENT '关于',
  `createTime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '账号创建日期',
  `purview` int(11) NOT NULL DEFAULT '2' COMMENT '账号权限',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of anime_users
-- ----------------------------
BEGIN;
INSERT INTO `anime_users` VALUES (1, 'nekochan', '123456', '123@gmail.com', 'https://cdn.jsdelivr.net/gh/NekoChanTaiwan/blog@gh-pages/images/avater.webp', 'nekochan', 'nayn~nyan~nyan', 1, '2021-07-07 08:32:36', 1);
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
