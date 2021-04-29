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

 Date: 29/04/2021 10:54:06
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for secondclass
-- ----------------------------
DROP TABLE IF EXISTS `secondclass`;
CREATE TABLE `secondclass`  (
  `id` int(11) NOT NULL COMMENT '二级分类编号',
  `cate_id` int(11) NULL DEFAULT NULL COMMENT '一级分类编号',
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '二级分类商品名',
  `img` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '二级分类商品图片',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of secondclass
-- ----------------------------
INSERT INTO `secondclass` VALUES (1, 1, '洗面奶', 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg');
INSERT INTO `secondclass` VALUES (2, 1, '护手霜', 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10002.jpg');
INSERT INTO `secondclass` VALUES (3, 2, '龙虾', 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10003.jpg');
INSERT INTO `secondclass` VALUES (4, 2, '鲍鱼', 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10004.jpg');
INSERT INTO `secondclass` VALUES (5, 3, '薯片', 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10005.jpg');
INSERT INTO `secondclass` VALUES (6, 3, '锅巴', 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg');
INSERT INTO `secondclass` VALUES (7, 4, '指甲剪', 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10007.jpg');
INSERT INTO `secondclass` VALUES (8, 5, '华为', 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10008.jpg');
INSERT INTO `secondclass` VALUES (9, 6, '惠普', 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10009.jpg');
INSERT INTO `secondclass` VALUES (10, 1, '气泡水', 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10009.jpg');

SET FOREIGN_KEY_CHECKS = 1;
