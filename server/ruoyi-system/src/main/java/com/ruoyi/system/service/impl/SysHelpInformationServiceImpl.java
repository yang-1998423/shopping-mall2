package com.ruoyi.system.service.impl;

import java.util.List;
import com.ruoyi.common.utils.DateUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.ruoyi.system.mapper.SysHelpInformationMapper;
import com.ruoyi.system.domain.SysHelpInformation;
import com.ruoyi.system.service.ISysHelpInformationService;

/**
 * 常见问题的解答Service业务层处理
 * 
 * @author ruoyi
 * @date 2021-04-28
 */
@Service
public class SysHelpInformationServiceImpl implements ISysHelpInformationService 
{
    @Autowired
    private SysHelpInformationMapper sysHelpInformationMapper;

    /**
     * 查询常见问题的解答
     * 
     * @param helpInformationId 常见问题的解答ID
     * @return 常见问题的解答
     */
    @Override
    public SysHelpInformation selectSysHelpInformationById(Long helpInformationId)
    {
        return sysHelpInformationMapper.selectSysHelpInformationById(helpInformationId);
    }

    /**
     * 查询常见问题的解答列表
     * 
     * @param sysHelpInformation 常见问题的解答
     * @return 常见问题的解答
     */
    @Override
    public List<SysHelpInformation> selectSysHelpInformationList(SysHelpInformation sysHelpInformation)
    {
        return sysHelpInformationMapper.selectSysHelpInformationList(sysHelpInformation);
    }

    /**
     * 新增常见问题的解答
     * 
     * @param sysHelpInformation 常见问题的解答
     * @return 结果
     */
    @Override
    public int insertSysHelpInformation(SysHelpInformation sysHelpInformation)
    {
        sysHelpInformation.setCreateTime(DateUtils.getNowDate());
        return sysHelpInformationMapper.insertSysHelpInformation(sysHelpInformation);
    }

    /**
     * 修改常见问题的解答
     * 
     * @param sysHelpInformation 常见问题的解答
     * @return 结果
     */
    @Override
    public int updateSysHelpInformation(SysHelpInformation sysHelpInformation)
    {
        return sysHelpInformationMapper.updateSysHelpInformation(sysHelpInformation);
    }

    /**
     * 批量删除常见问题的解答
     * 
     * @param helpInformationIds 需要删除的常见问题的解答ID
     * @return 结果
     */
    @Override
    public int deleteSysHelpInformationByIds(Long[] helpInformationIds)
    {
        return sysHelpInformationMapper.deleteSysHelpInformationByIds(helpInformationIds);
    }

    /**
     * 删除常见问题的解答信息
     * 
     * @param helpInformationId 常见问题的解答ID
     * @return 结果
     */
    @Override
    public int deleteSysHelpInformationById(Long helpInformationId)
    {
        return sysHelpInformationMapper.deleteSysHelpInformationById(helpInformationId);
    }
}
