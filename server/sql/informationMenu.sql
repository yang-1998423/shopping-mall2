-- 菜单 SQL
insert into sys_menu (menu_name, parent_id, order_num, path, component, is_frame, is_cache, menu_type, visible, status, perms, icon, create_by, create_time, update_by, update_time, remark)
values('常见问题的解答', '2006', '1', 'information', 'system/information/index', 1, 0, 'C', '0', '0', 'system:information:list', '#', 'admin', sysdate(), '', null, '常见问题的解答菜单');

-- 按钮父菜单ID
SELECT @parentId := LAST_INSERT_ID();

-- 按钮 SQL
insert into sys_menu (menu_name, parent_id, order_num, path, component, is_frame, is_cache, menu_type, visible, status, perms, icon, create_by, create_time, update_by, update_time, remark)
values('常见问题的解答查询', @parentId, '1',  '#', '', 1, 0, 'F', '0', '0', 'system:information:query',        '#', 'admin', sysdate(), '', null, '');

insert into sys_menu (menu_name, parent_id, order_num, path, component, is_frame, is_cache, menu_type, visible, status, perms, icon, create_by, create_time, update_by, update_time, remark)
values('常见问题的解答新增', @parentId, '2',  '#', '', 1, 0, 'F', '0', '0', 'system:information:add',          '#', 'admin', sysdate(), '', null, '');

insert into sys_menu (menu_name, parent_id, order_num, path, component, is_frame, is_cache, menu_type, visible, status, perms, icon, create_by, create_time, update_by, update_time, remark)
values('常见问题的解答修改', @parentId, '3',  '#', '', 1, 0, 'F', '0', '0', 'system:information:edit',         '#', 'admin', sysdate(), '', null, '');

insert into sys_menu (menu_name, parent_id, order_num, path, component, is_frame, is_cache, menu_type, visible, status, perms, icon, create_by, create_time, update_by, update_time, remark)
values('常见问题的解答删除', @parentId, '4',  '#', '', 1, 0, 'F', '0', '0', 'system:information:remove',       '#', 'admin', sysdate(), '', null, '');

insert into sys_menu (menu_name, parent_id, order_num, path, component, is_frame, is_cache, menu_type, visible, status, perms, icon, create_by, create_time, update_by, update_time, remark)
values('常见问题的解答导出', @parentId, '5',  '#', '', 1, 0, 'F', '0', '0', 'system:information:export',       '#', 'admin', sysdate(), '', null, '');