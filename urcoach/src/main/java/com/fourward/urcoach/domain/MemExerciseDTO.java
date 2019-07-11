package com.fourward.urcoach.domain;

import java.util.Date;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

/**
 * MemExerciseDTO
 */
@Data
@Component
@Lazy
public class MemExerciseDTO {

    private Long memExerciseId, memberId, exerciseCal;
    
    private String exerciseName;

    private String exerciseDate, exerciseTime;

    private Boolean exerciseComplete;
    
}