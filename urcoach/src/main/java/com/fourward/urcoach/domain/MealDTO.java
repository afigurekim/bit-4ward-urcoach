package com.fourward.urcoach.domain;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

/**
 * MealDTO
 */

@Data @Component @Lazy
public class MealDTO {

    private String mealId,
                    memberId,
                    mealDate,
                    mealTime,
                    foodName,
                    foodCal;
}