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
import com.ruoyi.wechat.category.domain.Firstclass;
import com.ruoyi.wechat.category.service.IFirstclassService;
import com.ruoyi.common.utils.poi.ExcelUtil;
import com.ruoyi.common.core.page.TableDataInfo;

/**
 * myfnController
 * 
 * @author ruoyi
 * @date 2021-04-25
 */
@RestController
@RequestMapping("/mydemo/firstclass")
public class FirstclassController extends BaseController
{
    @Autowired
    private IFirstclassService firstclassService;

    /**
     * 查询myfn列表
     */
    @PreAuthorize("@ss.hasPermi('mydemo:firstclass:list') or @ss.hasRole('wechat')")
    @GetMapping("/list")
    public TableDataInfo list(Firstclass firstclass)
    {
        System.out.println("进入查询列表");
        startPage();
        List<Firstclass> list = firstclassService.selectFirstclassList(firstclass);
        return getDataTable(list);
    }

    /**
     * 导出myfn列表
     */
    @PreAuthorize("@ss.hasPermi('mydemo:firstclass:export')")
    @Log(title = "myfn", businessType = BusinessType.EXPORT)
    @GetMapping("/export")
    public AjaxResult export(Firstclass firstclass)
    {
        List<Firstclass> list = firstclassService.selectFirstclassList(firstclass);
        ExcelUtil<Firstclass> util = new ExcelUtil<Firstclass>(Firstclass.class);
        return util.exportExcel(list, "myfn数据");
    }

    /**
     * 获取myfn详细信息
     */
    @PreAuthorize("@ss.hasPermi('mydemo:firstclass:query')")
    @GetMapping(value = "/{cateId}")
    public AjaxResult getInfo(@PathVariable("cateId") Long cateId)
    {
        return AjaxResult.success(firstclassService.selectFirstclassById(cateId));
    }

    /**
     * 新增myfn
     */
    @PreAuthorize("@ss.hasPermi('mydemo:firstclass:add')")
    @Log(title = "myfn", businessType = BusinessType.INSERT)
    @PostMapping
    public AjaxResult add(@RequestBody Firstclass firstclass)
    {
        return toAjax(firstclassService.insertFirstclass(firstclass));
    }

    /**
     * 修改myfn
     */
    @PreAuthorize("@ss.hasPermi('mydemo:firstclass:edit')")
    @Log(title = "myfn", businessType = BusinessType.UPDATE)
    @PutMapping
    public AjaxResult edit(@RequestBody Firstclass firstclass)
    {
        return toAjax(firstclassService.updateFirstclass(firstclass));
    }

    /**
     * 删除myfn
     */
    @PreAuthorize("@ss.hasPermi('mydemo:firstclass:remove')")
    @Log(title = "myfn", businessType = BusinessType.DELETE)
	@DeleteMapping("/{cateIds}")
    public AjaxResult remove(@PathVariable Long[] cateIds)
    {
        return toAjax(firstclassService.deleteFirstclassByIds(cateIds));
    }
}
