package com.fourward.urcoach.domain;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

/**
 * GymDTO
 */

@Data @Component @Lazy
public class GymsDTO {
   
    private Long gymId;
    private String  gymName,
                    gymInfo,
                    gymTime,
                    gymLoc,
                    gymPhoto;
}