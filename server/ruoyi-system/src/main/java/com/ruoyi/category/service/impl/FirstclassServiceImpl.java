package com.ruoyi.category.service.impl;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.ruoyi.category.mapper.FirstclassMapper;
import com.ruoyi.category.domain.Firstclass;
import com.ruoyi.category.service.IFirstclassService;

/**
 * myfnService业务层处理
 * 
 * @author ruoyi
 * @date 2021-04-25
 */
@Service
public class FirstclassServiceImpl implements IFirstclassService 
{
    @Autowired
    private FirstclassMapper firstclassMapper;

    /**
     * 查询myfn
     * 
     * @param cateId myfnID
     * @return myfn
     */
    @Override
    public Firstclass selectFirstclassById(Long cateId)
    {
        return firstclassMapper.selectFirstclassById(cateId);
    }

    /**
     * 查询myfn列表
     * 
     * @param firstclass myfn
     * @return myfn
     */
    @Override
    public List<Firstclass> selectFirstclassList(Firstclass firstclass)
    {
        return firstclassMapper.selectFirstclassList(firstclass);
    }

    /**
     * 新增myfn
     * 
     * @param firstclass myfn
     * @return 结果
     */
    @Override
    public int insertFirstclass(Firstclass firstclass)
    {
        return firstclassMapper.insertFirstclass(firstclass);
    }

    /**
     * 修改myfn
     * 
     * @param firstclass myfn
     * @return 结果
     */
    @Override
    public int updateFirstclass(Firstclass firstclass)
    {
        return firstclassMapper.updateFirstclass(firstclass);
    }

    /**
     * 批量删除myfn
     * 
     * @param cateIds 需要删除的myfnID
     * @return 结果
     */
    @Override
    public int deleteFirstclassByIds(Long[] cateIds)
    {
        return firstclassMapper.deleteFirstclassByIds(cateIds);
    }

    /**
     * 删除myfn信息
     * 
     * @param cateId myfnID
     * @return 结果
     */
    @Override
    public int deleteFirstclassById(Long cateId)
    {
        return firstclassMapper.deleteFirstclassById(cateId);
    }
}
