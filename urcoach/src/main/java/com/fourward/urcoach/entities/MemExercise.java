package com.fourward.urcoach.entities;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Table;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

/**
 * MemExercise
 */
@Entity
@NoArgsConstructor(access = AccessLevel.PUBLIC)
@Getter
@ToString
@Table(name = "mem_exercise")
public class MemExercise {

    private static final long serialVersionUID = 1L;
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "mem_exercise_id") private Long memExerciseId;
    @Column(name = "exercise_date") private String exerciseDate;
    @Column(name = "exercise_complete") private Boolean exerciseComplete;

    @JoinColumn(name = "member_id") private Member memberId;
    @JoinColumn(name = "exercise_name") private Exercise exerciseName;
    @JoinColumn(name = "exercise_cal") private Exercise exerciseCal;
    @JoinColumn(name = "exercise_time") private Exercise exerciseTime;

    @Builder
    private MemExercise(String exerciseDate, Boolean exerciseComplete){

        this.exerciseDate = exerciseDate;
        this.exerciseComplete = exerciseComplete;
    }
}