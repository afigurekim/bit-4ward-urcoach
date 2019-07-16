package com.fourward.urcoach.domain;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

/**
 * ReportDTO
 */

@Data @Component @Lazy
public class ReportDTO {
    
    private String reportId,
                    memberId,
                    reportDate,
                    reportCalOut,
                    reportCalIn;

}