package com.ruoyi.system.service;

import java.util.List;
import com.ruoyi.system.domain.SysHelpInformation;

/**
 * 常见问题的解答Service接口
 * 
 * @author ruoyi
 * @date 2021-04-28
 */
public interface ISysHelpInformationService 
{
    /**
     * 查询常见问题的解答
     * 
     * @param helpInformationId 常见问题的解答ID
     * @return 常见问题的解答
     */
    public SysHelpInformation selectSysHelpInformationById(Long helpInformationId);

    /**
     * 查询常见问题的解答列表
     * 
     * @param sysHelpInformation 常见问题的解答
     * @return 常见问题的解答集合
     */
    public List<SysHelpInformation> selectSysHelpInformationList(SysHelpInformation sysHelpInformation);

    /**
     * 新增常见问题的解答
     * 
     * @param sysHelpInformation 常见问题的解答
     * @return 结果
     */
    public int insertSysHelpInformation(SysHelpInformation sysHelpInformation);

    /**
     * 修改常见问题的解答
     * 
     * @param sysHelpInformation 常见问题的解答
     * @return 结果
     */
    public int updateSysHelpInformation(SysHelpInformation sysHelpInformation);

    /**
     * 批量删除常见问题的解答
     * 
     * @param helpInformationIds 需要删除的常见问题的解答ID
     * @return 结果
     */
    public int deleteSysHelpInformationByIds(Long[] helpInformationIds);

    /**
     * 删除常见问题的解答信息
     * 
     * @param helpInformationId 常见问题的解答ID
     * @return 结果
     */
    public int deleteSysHelpInformationById(Long helpInformationId);
}
