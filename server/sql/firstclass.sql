/*
 Navicat Premium Data Transfer

 Source Server         : Link
 Source Server Type    : MySQL
 Source Server Version : 50712
 Source Host           : localhost:3306
 Source Schema         : shopping_mall

 Target Server Type    : MySQL
 Target Server Version : 50712
 File Encoding         : 65001

 Date: 29/04/2021 10:53:17
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for firstclass
-- ----------------------------
DROP TABLE IF EXISTS `firstclass`;
CREATE TABLE `firstclass`  (
  `cate_id` int(11) NOT NULL COMMENT '一级分类编号',
  `cate_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '一级分类商品名',
  PRIMARY KEY (`cate_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of firstclass
-- ----------------------------
INSERT INTO `firstclass` VALUES (1, '洗护');
INSERT INTO `firstclass` VALUES (2, '生鲜');
INSERT INTO `firstclass` VALUES (3, '食品');
INSERT INTO `firstclass` VALUES (4, '百货');
INSERT INTO `firstclass` VALUES (5, '手机');
INSERT INTO `firstclass` VALUES (6, '电脑');
INSERT INTO `firstclass` VALUES (7, '配件');

SET FOREIGN_KEY_CHECKS = 1;
