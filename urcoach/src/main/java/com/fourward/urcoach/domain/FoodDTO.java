package com.fourward.urcoach.domain;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

/**
 * FoodDTO
 */
@Data
@Component
@Lazy
public class FoodDTO {

    private Long foodId;
    private String foodName, foodCal;
    
    
}