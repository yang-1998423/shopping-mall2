package com.ruoyi.web.controller.wechat;

import com.ruoyi.common.core.domain.AjaxResult;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class WechatTestController {

    @RequestMapping("/wechat/test")
    @PreAuthorize("@ss.hasRole('wechat')")
    public AjaxResult test() {
        return AjaxResult.success("test");
    }

}
