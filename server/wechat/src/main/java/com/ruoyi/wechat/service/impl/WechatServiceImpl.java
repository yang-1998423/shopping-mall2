package com.ruoyi.wechat.service.impl;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.ruoyi.common.constant.UserConstants;
import com.ruoyi.common.core.domain.entity.SysUser;
import com.ruoyi.common.exception.BaseException;
import com.ruoyi.common.utils.SecurityUtils;
import com.ruoyi.common.utils.ServletUtils;
import com.ruoyi.common.utils.StringUtils;
import com.ruoyi.common.utils.ip.IpUtils;
import com.ruoyi.framework.web.service.SysLoginService;
import com.ruoyi.system.mapper.SysRoleMapper;
import com.ruoyi.system.service.ISysUserService;
import com.ruoyi.util.HttpUtil;
import com.ruoyi.wechat.service.WechatService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.util.Date;

@Service
@Transactional
public class WechatServiceImpl implements WechatService {

    @Value("${appid}")
    String appid;
    @Value("${appsecret}")
    private String appsecret;

    @Resource
    private SysRoleMapper roleMapper;
    @Resource
    private ISysUserService userService;
    @Resource
    private SysLoginService loginService;

    @Override
    public String init(String code) {
        String url = "https://api.weixin.qq.com/sns/jscode2session?appid=" + appid
                    + "&secret=" + appsecret
                    + "&js_code=" + code
                    + "&grant_type=authorization_code";
        String get = HttpUtil.httpRequest(url, "GET", null);
        JSONObject userJson = JSON.parseObject(get);
        String openid = userJson.getString("openid");
        if (StringUtils.isEmpty(openid)) {
            throw new BaseException(userJson.getString("errmsg"));
        }

        if (UserConstants.UNIQUE.equals(userService.checkUserNameUnique(openid))) {
            System.out.println(get);
            SysUser user = new SysUser();
            user.setUserName(openid);
            user.setNickName("微信用户");
            user.setPassword(SecurityUtils.encryptPassword(UserConstants.WECHAT_USER_DEFAULT_PASSWORD));
            user.setStatus("0");
            user.setDelFlag("0");
            user.setLoginIp(IpUtils.getIpAddr(ServletUtils.getRequest()));
            user.setLoginDate(new Date());
            user.setCreateBy("admin");
            user.setCreateTime(user.getLoginDate());
            user.setRoleIds(new Long[]{5L});
            userService.insertUser(user);
        }
        return loginService.wechatLogin(openid, UserConstants.WECHAT_USER_DEFAULT_PASSWORD);
    }
}
