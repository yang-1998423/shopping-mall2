package com.ruoyi.wechat.category.mapper;

import java.util.List;
import com.ruoyi.wechat.category.domain.Secondclass;

/**
 * secondMapper接口
 * 
 * @author ruoyi
 * @date 2021-04-25
 */
public interface SecondclassMapper 
{
    /**
     * 查询second
     * 
     * @param id secondID
     * @return second
     */
    public Secondclass selectSecondclassById(Long id);

    /**
     * 查询second列表
     * 
     * @param secondclass second
     * @return second集合
     */
    public List<Secondclass> selectSecondclassList(Secondclass secondclass);

    /**
     * 新增second
     * 
     * @param secondclass second
     * @return 结果
     */
    public int insertSecondclass(Secondclass secondclass);

    /**
     * 修改second
     * 
     * @param secondclass second
     * @return 结果
     */
    public int updateSecondclass(Secondclass secondclass);

    /**
     * 删除second
     * 
     * @param id secondID
     * @return 结果
     */
    public int deleteSecondclassById(Long id);

    /**
     * 批量删除second
     * 
     * @param ids 需要删除的数据ID
     * @return 结果
     */
    public int deleteSecondclassByIds(Long[] ids);
}
