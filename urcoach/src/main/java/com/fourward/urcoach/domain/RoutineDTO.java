package com.fourward.urcoach.domain;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

/**
 * routineDTO
 */

@Data
@Component
@Lazy
public class RoutineDTO {

    private Long id;
    private String routineName, challengeId;
    

}