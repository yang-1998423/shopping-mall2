package com.ruoyi.wechat.service;

import com.ruoyi.common.core.domain.entity.SysUser;

public interface WechatService {

    /**
     * 根据code获取openid, 再根据openid获取用户，如果有，就直接返回，如果没有，就创建后返回
     * @param code 小程序前端wx.login获取到的code
     * @return 登录权限token
     */
    String init(String code);

}
