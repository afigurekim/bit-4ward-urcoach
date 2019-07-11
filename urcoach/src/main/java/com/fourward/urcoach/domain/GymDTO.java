package com.fourward.urcoach.domain;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

/**
 * GymDTO
 */

@Data @Component @Lazy
public class GymDTO {
   
    private String  gymName,
                    gymInfo,
                    gymTime,
                    gymLoc;
}