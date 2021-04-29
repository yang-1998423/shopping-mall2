package com.ruoyi.wechat.category.domain;

import org.apache.commons.lang3.builder.ToStringBuilder;
import org.apache.commons.lang3.builder.ToStringStyle;
import com.ruoyi.common.annotation.Excel;
import com.ruoyi.common.core.domain.BaseEntity;

/**
 * myfn对象 firstclass
 * 
 * @author ruoyi
 * @date 2021-04-25
 */
public class Firstclass extends BaseEntity
{
    private static final long serialVersionUID = 1L;

    /** $column.columnComment */
    private Long cateId;

    /** $column.columnComment */
    @Excel(name = "${comment}", readConverterExp = "$column.readConverterExp()")
    private String cateName;

    public void setCateId(Long cateId) 
    {
        this.cateId = cateId;
    }

    public Long getCateId() 
    {
        return cateId;
    }
    public void setCateName(String cateName) 
    {
        this.cateName = cateName;
    }

    public String getCateName() 
    {
        return cateName;
    }

    @Override
    public String toString() {
        return new ToStringBuilder(this,ToStringStyle.MULTI_LINE_STYLE)
            .append("cateId", getCateId())
            .append("cateName", getCateName())
            .toString();
    }
}
