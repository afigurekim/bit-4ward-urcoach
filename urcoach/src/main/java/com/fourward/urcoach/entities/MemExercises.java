package com.fourward.urcoach.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.springframework.stereotype.Component;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

/**
 * MemExercise
 */

@Component
@Entity
@NoArgsConstructor(access = AccessLevel.PUBLIC)
@Getter
@ToString
@Table(name = "mem_exercises")
public class MemExercises {

    private static final long serialVersionUID = 1L;
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "mem_exercise_id") private Long memExerciseId;
    @Column(name = "mem_exercise_date") private String memExerciseDate;
    @Column(name = "mem_exercise_time") private String memExerciseTime;
    @Column(name = "mem_exercise_cal") private String memExerciseCal;
    @Column(name = "mem_exercise_complete") private Boolean memExerciseComplete;
    
    @ManyToOne
    @JoinColumn(name = "member_id") private Members members;

    @ManyToOne
    @JoinColumn(name = "exercise_name") private Exercises exercises;
   
    @Builder
    private MemExercises(String memExerciseDate, Boolean memExerciseComplete, String memExerciseTime, String memExerciseCal){

        this.memExerciseDate = memExerciseDate;
        this.memExerciseComplete = memExerciseComplete;
        this.memExerciseTime = memExerciseTime;
        this.memExerciseCal = memExerciseCal;

    }
}