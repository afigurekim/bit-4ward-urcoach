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
public class MemExercisesDTO {

    private Long memExerciseId;

    private String memExerciseDate, memExerciseCal, memExerciseTime;

    private Boolean exerciseComplete;
    
}