package com.ruoyi.web.controller.wechat.category;

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
import com.ruoyi.wechat.category.domain.Secondclass;
import com.ruoyi.wechat.category.service.ISecondclassService;
import com.ruoyi.common.utils.poi.ExcelUtil;
import com.ruoyi.common.core.page.TableDataInfo;

/**
 * secondController
 * 
 * @author ruoyi
 * @date 2021-04-25
 */
@RestController
@RequestMapping("/mydemo/secondclass")
public class SecondclassController extends BaseController
{
    @Autowired
    private ISecondclassService secondclassService;

    /**
     * 查询second列表
     */
    @PreAuthorize("@ss.hasPermi('mydemo:secondclass:list') or @ss.hasRole('wechat')")
    @GetMapping("/list")
    public TableDataInfo list(Secondclass secondclass)
    {
        startPage();
        List<Secondclass> list = secondclassService.selectSecondclassList(secondclass);
        return getDataTable(list);
    }

    /**
     * 导出second列表
     */
    @PreAuthorize("@ss.hasPermi('mydemo:secondclass:export')")
    @Log(title = "second", businessType = BusinessType.EXPORT)
    @GetMapping("/export")
    public AjaxResult export(Secondclass secondclass)
    {
        List<Secondclass> list = secondclassService.selectSecondclassList(secondclass);
        ExcelUtil<Secondclass> util = new ExcelUtil<Secondclass>(Secondclass.class);
        return util.exportExcel(list, "second数据");
    }

    /**
     * 获取second详细信息
     */
    @PreAuthorize("@ss.hasPermi('mydemo:secondclass:query')")
    @GetMapping(value = "/{id}")
    public AjaxResult getInfo(@PathVariable("id") Long id)
    {
        return AjaxResult.success(secondclassService.selectSecondclassById(id));
    }

    /**
     * 新增second
     */
    @PreAuthorize("@ss.hasPermi('mydemo:secondclass:add')")
    @Log(title = "second", businessType = BusinessType.INSERT)
    @PostMapping
    public AjaxResult add(@RequestBody Secondclass secondclass)
    {
        return toAjax(secondclassService.insertSecondclass(secondclass));
    }

    /**
     * 修改second
     */
    @PreAuthorize("@ss.hasPermi('mydemo:secondclass:edit')")
    @Log(title = "second", businessType = BusinessType.UPDATE)
    @PutMapping
    public AjaxResult edit(@RequestBody Secondclass secondclass)
    {
        return toAjax(secondclassService.updateSecondclass(secondclass));
    }

    /**
     * 删除second
     */
    @PreAuthorize("@ss.hasPermi('mydemo:secondclass:remove')")
    @Log(title = "second", businessType = BusinessType.DELETE)
	@DeleteMapping("/{ids}")
    public AjaxResult remove(@PathVariable Long[] ids)
    {
        return toAjax(secondclassService.deleteSecondclassByIds(ids));
    }
}
