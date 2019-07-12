package com.fourward.urcoach.entities;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
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
@Table(name = "mem_exercises")
public class MemExercises {

    private static final long serialVersionUID = 1L;
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "mem_exercise_id") private Long memExerciseId;
    @Column(name = "mem_exercise_date") private String memExerciseDate;
    @Column(name = "mem_exercise_time") private String memExerciseTime;
    @Column(name = "mem_exercise_cal") private String memExerciseCal;
    @Column(name = "mem_exercise_complete") private Boolean memExerciseComplete;
    
    @ManyToOne
    @JoinColumn(name = "member_id") private Members memberId;

    @ManyToOne
    @JoinColumn(name = "exercise_name") private Exercises exerciseName;
   
    @Builder
    private MemExercises(String memExerciseDate, Boolean memExerciseComplete, String memExerciseTime, String memExerciseCal){

        this.memExerciseDate = memExerciseDate;
        this.memExerciseComplete = memExerciseComplete;
        this.memExerciseTime = memExerciseTime;
        this.memExerciseCal = memExerciseCal;

    }
}