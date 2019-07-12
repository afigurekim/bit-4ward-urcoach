package com.fourward.urcoach.domain;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

/**
 * MealDTO
 */
@Data
@Component
@Lazy
public class MealsDTO {

    private Long mealId;
    private String mealDate, mealTime, mealCal;
    

}