package com.ruoyi.category.service;

import java.util.List;
import com.ruoyi.category.domain.Firstclass;

/**
 * myfnService接口
 * 
 * @author ruoyi
 * @date 2021-04-25
 */
public interface IFirstclassService 
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
     * 批量删除myfn
     * 
     * @param cateIds 需要删除的myfnID
     * @return 结果
     */
    public int deleteFirstclassByIds(Long[] cateIds);

    /**
     * 删除myfn信息
     * 
     * @param cateId myfnID
     * @return 结果
     */
    public int deleteFirstclassById(Long cateId);
}
