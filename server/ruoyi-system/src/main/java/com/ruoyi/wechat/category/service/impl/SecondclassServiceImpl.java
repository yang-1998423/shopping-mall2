package com.ruoyi.wechat.category.service.impl;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.ruoyi.wechat.category.mapper.SecondclassMapper;
import com.ruoyi.wechat.category.domain.Secondclass;
import com.ruoyi.wechat.category.service.ISecondclassService;

/**
 * secondService业务层处理
 * 
 * @author ruoyi
 * @date 2021-04-25
 */
@Service
public class SecondclassServiceImpl implements ISecondclassService 
{
    @Autowired
    private SecondclassMapper secondclassMapper;

    /**
     * 查询second
     * 
     * @param id secondID
     * @return second
     */
    @Override
    public Secondclass selectSecondclassById(Long id)
    {
        return secondclassMapper.selectSecondclassById(id);
    }

    /**
     * 查询second列表
     * 
     * @param secondclass second
     * @return second
     */
    @Override
    public List<Secondclass> selectSecondclassList(Secondclass secondclass)
    {
        return secondclassMapper.selectSecondclassList(secondclass);
    }

    /**
     * 新增second
     * 
     * @param secondclass second
     * @return 结果
     */
    @Override
    public int insertSecondclass(Secondclass secondclass)
    {
        return secondclassMapper.insertSecondclass(secondclass);
    }

    /**
     * 修改second
     * 
     * @param secondclass second
     * @return 结果
     */
    @Override
    public int updateSecondclass(Secondclass secondclass)
    {
        return secondclassMapper.updateSecondclass(secondclass);
    }

    /**
     * 批量删除second
     * 
     * @param ids 需要删除的secondID
     * @return 结果
     */
    @Override
    public int deleteSecondclassByIds(Long[] ids)
    {
        return secondclassMapper.deleteSecondclassByIds(ids);
    }

    /**
     * 删除second信息
     * 
     * @param id secondID
     * @return 结果
     */
    @Override
    public int deleteSecondclassById(Long id)
    {
        return secondclassMapper.deleteSecondclassById(id);
    }
}
