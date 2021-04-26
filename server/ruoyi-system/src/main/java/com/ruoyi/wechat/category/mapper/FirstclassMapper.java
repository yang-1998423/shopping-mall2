package com.ruoyi.wechat.category.mapper;

import java.util.List;
import com.ruoyi.wechat.category.domain.Firstclass;

/**
 * myfnMapper接口
 * 
 * @author ruoyi
 * @date 2021-04-25
 */
public interface FirstclassMapper 
{
    /**
     * 查询myfn
     * 
     * @param cateId myfnID
     * @return myfn
     */
    public Firstclass selectFirstclassById(Long cateId);

    /**
     * 查询myfn列表
     * 
     * @param firstclass myfn
     * @return myfn集合
     */
    public List<Firstclass> selectFirstclassList(Firstclass firstclass);

    /**
     * 新增myfn
     * 
     * @param firstclass myfn
     * @return 结果
     */
    public int insertFirstclass(Firstclass firstclass);

    /**
     * 修改myfn
     * 
     * @param firstclass myfn
     * @return 结果
     */
    public int updateFirstclass(Firstclass firstclass);

    /**
     * 删除myfn
     * 
     * @param cateId myfnID
     * @return 结果
     */
    public int deleteFirstclassById(Long cateId);

    /**
     * 批量删除myfn
     * 
     * @param cateIds 需要删除的数据ID
     * @return 结果
     */
    public int deleteFirstclassByIds(Long[] cateIds);
}
