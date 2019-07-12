package com.fourward.urcoach.domain;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

/**
 * DiaryDTO
 */
@Data
@Component
@Lazy
public class DiariesDTO {

    private Long diaryId;
    private String diaryDate, diaryPhoto, diaryDays, diaryGoal, diaryFat, diaryWater, diaryMuscle, diarySkeletal, diaryComment;
    
}