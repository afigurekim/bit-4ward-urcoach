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
public class CoachesDTO {

    private Long coachId;
    private String  coachName,
                    coachLoc,
                    coachInfo,
                    coachLink,
                    coachPhoto,
                    coachResume1,
                    coachResume2,
                    coachResume3,
                    coachResume4,
                    coachResume5;
}