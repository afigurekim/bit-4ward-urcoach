package com.fourward.urcoach.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
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
 * Exercise
 */
@Component
@Entity
@NoArgsConstructor(access = AccessLevel.PUBLIC)
@Getter
@ToString
@Table(name = "exercises")
public class Exercises {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "exercise_id") private Long exerciseId;

    @Column(name = "exercise_name") private String exerciseName;
    @Column(name = "exercise_set") private String exerciseSet;
    @Column(name = "exercise_count") private String exerciseCount;
    @Column(name = "exercise_video") private String exerciseVideo;
    @Column(name = "exercise_text") private String exerciseText;
    @Column(name = "exercise_cal") private String exerciseCal;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "challenge_id")
    private Challenges challenges;

    @Builder
    private Exercises(String exerciseName, String exerciseSet, String exerciseCount, String exerciseVideo, String exerciseText,
                        String exerciseCal){
                            
        this.exerciseName = exerciseName;
        this.exerciseSet = exerciseSet;
        this.exerciseCount = exerciseCount;
        this.exerciseVideo = exerciseVideo;
        this.exerciseText = exerciseText;
        this.exerciseCal = exerciseCal;
    }
}