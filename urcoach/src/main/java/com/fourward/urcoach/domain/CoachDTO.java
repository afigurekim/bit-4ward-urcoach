package com.fourward.urcoach.domain;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

/**
 * CoachDTO
 */
@Data
@Component
@Lazy
public class CoachDTO {

    private Long coachId;
    private String coachLoc,
                    coachInfo,
                    coachLink,
                    coachResume1,
                    coachResume2,
                    coachResume3,
                    coachResume4,
                    coachResume5;
}