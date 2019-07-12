package com.fourward.urcoach.domain;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

/**
 * exerciseDTO
 */
@Data
@Component
@Lazy
public class ExercisesDTO {

    private Long exerciseId;
    private String exerciseName, exerciseSet, exerciseCount, exerciseVideo, exerciseText, exerciseCal;
    
}