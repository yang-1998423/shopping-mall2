package com.ruoyi.web.controller.wechat;

import java.util.List;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.ruoyi.common.annotation.Log;
import com.ruoyi.common.core.controller.BaseController;
import com.ruoyi.common.core.domain.AjaxResult;
import com.ruoyi.common.enums.BusinessType;
import com.ruoyi.system.domain.SysHelpInformation;
import com.ruoyi.system.service.ISysHelpInformationService;
import com.ruoyi.common.utils.poi.ExcelUtil;
import com.ruoyi.common.core.page.TableDataInfo;

/**
 * 常见问题的解答Controller
 * 
 * @author ruoyi
 * @date 2021-04-28
 */
@RestController
@RequestMapping("/system/information")
public class SysHelpInformationController extends BaseController
{
    @Autowired
    private ISysHelpInformationService sysHelpInformationService;

    /**
     * 查询常见问题的解答列表
     */
    @PreAuthorize("@ss.hasPermi('system:information:list')")
    @GetMapping("/list")
    public TableDataInfo list(SysHelpInformation sysHelpInformation)
    {
        startPage();
        List<SysHelpInformation> list = sysHelpInformationService.selectSysHelpInformationList(sysHelpInformation);
        return getDataTable(list);
    }

    /**
     * 导出常见问题的解答列表
     */
    @PreAuthorize("@ss.hasPermi('system:information:export')")
    @Log(title = "常见问题的解答", businessType = BusinessType.EXPORT)
    @GetMapping("/export")
    public AjaxResult export(SysHelpInformation sysHelpInformation)
    {
        List<SysHelpInformation> list = sysHelpInformationService.selectSysHelpInformationList(sysHelpInformation);
        ExcelUtil<SysHelpInformation> util = new ExcelUtil<SysHelpInformation>(SysHelpInformation.class);
        return util.exportExcel(list, "常见问题的解答数据");
    }

    /**
     * 获取常见问题的解答详细信息
     */
    @PreAuthorize("@ss.hasPermi('system:information:query')")
    @GetMapping(value = "/{helpInformationId}")
    public AjaxResult getInfo(@PathVariable("helpInformationId") Long helpInformationId)
    {
        return AjaxResult.success(sysHelpInformationService.selectSysHelpInformationById(helpInformationId));
    }

    /**
     * 新增常见问题的解答
     */
    @PreAuthorize("@ss.hasPermi('system:information:add')")
    @Log(title = "常见问题的解答", businessType = BusinessType.INSERT)
    @PostMapping
    public AjaxResult add(@RequestBody SysHelpInformation sysHelpInformation)
    {
        return toAjax(sysHelpInformationService.insertSysHelpInformation(sysHelpInformation));
    }

    /**
     * 修改常见问题的解答
     */
    @PreAuthorize("@ss.hasPermi('system:information:edit')")
    @Log(title = "常见问题的解答", businessType = BusinessType.UPDATE)
    @PutMapping
    public AjaxResult edit(@RequestBody SysHelpInformation sysHelpInformation)
    {
        return toAjax(sysHelpInformationService.updateSysHelpInformation(sysHelpInformation));
    }

    /**
     * 删除常见问题的解答
     */
    @PreAuthorize("@ss.hasPermi('system:information:remove')")
    @Log(title = "常见问题的解答", businessType = BusinessType.DELETE)
	@DeleteMapping("/{helpInformationIds}")
    public AjaxResult remove(@PathVariable Long[] helpInformationIds)
    {
        return toAjax(sysHelpInformationService.deleteSysHelpInformationByIds(helpInformationIds));
    }
}
