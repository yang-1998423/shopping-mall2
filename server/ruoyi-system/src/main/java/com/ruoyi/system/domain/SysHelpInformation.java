package com.ruoyi.system.domain;

import org.apache.commons.lang3.builder.ToStringBuilder;
import org.apache.commons.lang3.builder.ToStringStyle;
import com.ruoyi.common.annotation.Excel;
import com.ruoyi.common.core.domain.BaseEntity;

/**
 * 常见问题的解答对象 sys_help_information
 * 
 * @author ruoyi
 * @date 2021-04-28
 */
public class SysHelpInformation extends BaseEntity
{
    private static final long serialVersionUID = 1L;

    /** 帮助文档ID */
    private Long helpInformationId;

    /** 问题 */
    @Excel(name = "问题")
    private String question;

    /** 答案 */
    @Excel(name = "答案")
    private String answer;

    public void setHelpInformationId(Long helpInformationId) 
    {
        this.helpInformationId = helpInformationId;
    }

    public Long getHelpInformationId() 
    {
        return helpInformationId;
    }
    public void setQuestion(String question) 
    {
        this.question = question;
    }

    public String getQuestion() 
    {
        return question;
    }
    public void setAnswer(String answer) 
    {
        this.answer = answer;
    }

    public String getAnswer() 
    {
        return answer;
    }

    @Override
    public String toString() {
        return new ToStringBuilder(this,ToStringStyle.MULTI_LINE_STYLE)
            .append("helpInformationId", getHelpInformationId())
            .append("createTime", getCreateTime())
            .append("question", getQuestion())
            .append("answer", getAnswer())
            .toString();
    }
}
