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
public class ExerciseDTO {

    private Long exerciseId, challengeId;
    private String exercise_name, exercise_set, exercise_count, exercise_video, exercise_text, exerciseCal, exerciseMinute;
    
}