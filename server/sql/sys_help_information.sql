/*
 Navicat Premium Data Transfer

 Source Server         : wyc
 Source Server Type    : MySQL
 Source Server Version : 50719
 Source Host           : 127.0.0.1:3306
 Source Schema         : shopping_mall

 Target Server Type    : MySQL
 Target Server Version : 50719
 File Encoding         : 65001

 Date: 29/04/2021 00:07:26
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for sys_help_information
-- ----------------------------
DROP TABLE IF EXISTS `sys_help_information`;
CREATE TABLE `sys_help_information`  (
  `help_information_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '帮助文档ID',
  `create_time` datetime(0) NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP(0) COMMENT '问题创建时间',
  `question` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '问题',
  `answer` varchar(512) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '答案',
  PRIMARY KEY (`help_information_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 13 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of sys_help_information
-- ----------------------------
INSERT INTO `sys_help_information` VALUES (1, '2021-04-28 23:28:09', '浏览网页时怎样调整字号的大小？', '您可以打开网页，在“查看”菜单中选择“文字大小”，调整字体的大小。\r\n\r\n');
INSERT INTO `sys_help_information` VALUES (2, '2021-04-28 23:28:31', '如何打印网页正文？', '您只需要在“文件”菜单上，单击“打印”，选定你需要的打印选项。');
INSERT INTO `sys_help_information` VALUES (3, '2021-04-28 23:27:46', '如何检索本站的信息？', '您只需要在网页上“搜索”框内，输入您要查找的关键词，按回车键或者点击搜索框右侧的“搜索”按钮，即可实现站内检索。\r\n\r\n');
INSERT INTO `sys_help_information` VALUES (4, '2021-04-28 23:28:38', '如何用电子邮件发送当前网页？', '您只需要在“文件”菜单上，单击“发送”，根据需求选择单击“电子邮件页面”或“电子邮件链接”，在邮件窗口中填写有关内容，发送邮件即可。');
INSERT INTO `sys_help_information` VALUES (5, '2021-04-28 23:28:54', '网页为什么打不开？', '如果您通过局域网上网时，由于局域网通往外部的出口带宽限制，连接网站时发生超时错误都会发生连接不上的问题。如果遇到网页打不开的问题，有时只须刷新即可，有时需要您换个时间再登陆。');
INSERT INTO `sys_help_information` VALUES (6, '2021-04-28 23:30:33', ' 浏览网页时遇到乱码怎么办？', '在浏览网页时如出现乱码，可用如下办法解决：使用IE6.X、IE7.X浏览网页时，可在“查看”菜单上单击“编码”，然后选择“简体中文GB2312”来解决。');
INSERT INTO `sys_help_information` VALUES (7, '2021-04-28 23:31:06', '如何与我们联系？', '本网首页设有“联系我们”栏目，可根据您的问题，查找电话，直接和中国交通建设股份有限公司网站维护部门联系。');
INSERT INTO `sys_help_information` VALUES (8, '2021-04-28 23:31:27', '中国交通建设股份有限公司常识：\r\n\r\n', '标识图形取材于中国甲骨文中的“行”字，以公司英文译名CHINA COMMUNICATIONS CONSTRUCTION COMPANY中四个首写字母“C”组合，结合现代交通理念，融入现代审美观念，艺术加工形成以“行”字为主体的标识架构。表现了公司的专业特征，宣示了公司的企业使命。\r\n\r\n　　标识图形以圆为衬托，托起“行”字主体架构，象征公司立志成为国际化大企业，走向世界“行天下、天下行”的雄心壮志。中间的方块，象征公司在发展中坚持科学的经营理念，倡导优秀的企业精神。圆形与方块结合，“外圆内方”，表达了广交朋友、和谐共处、创造价值、合作共赢的胸怀。');
INSERT INTO `sys_help_information` VALUES (9, '2021-04-28 23:32:07', '我可以申请实习吗？', '联合国给提供给在校研究生在其 纽约总部实习的机会。');
INSERT INTO `sys_help_information` VALUES (10, '2021-04-28 23:32:24', '我能否获得联合国的财政资助？', '联合国不提供给个人或私营组织财政资助。');
INSERT INTO `sys_help_information` VALUES (11, '2021-04-28 23:32:35', '我该如何帮助联合国的工作？', '本组织接受符合其宗旨和活动的自愿捐款。');
INSERT INTO `sys_help_information` VALUES (12, '2021-04-29 00:05:51', '1', '问问');

SET FOREIGN_KEY_CHECKS = 1;
