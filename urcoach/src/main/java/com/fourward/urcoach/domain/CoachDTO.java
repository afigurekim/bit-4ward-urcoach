package com.fourward.urcoach.domain;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

/**
 * CoachDTO
 */

@Data @Component @Lazy
public class CoachDTO {

    private String  coachId,
                    coachName,
                    $http,
                    password,
                    coachLoc,
                    coachInfo,
                    coachLink,
                    coachResume1,
                    coachResume2,
                    coachResume3,
                    photo;
                }