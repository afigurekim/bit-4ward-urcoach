package com.fourward.urcoach.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

/**
 * Exercise
 */

@Entity
@NoArgsConstructor(access = AccessLevel.PUBLIC)
@Getter
@ToString
@Table(name = "exercise")
public class Exercise {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long exerciseId;

    @Column(name = "exercise_name") private String exerciseName;
    @Column(name = "exercise_set") private String exerciseSet;
    @Column(name = "exercise_count") private String exerciseCount;
    @Column(name = "exercise_video") private String exerciseVideo;
    @Column(name = "exercise_text") private String exerciseText;
    @Column(name = "routine_id") private Long routinId;

    @Builder
    private Exercise(String exerciseName, String exerciseSet, String exerciseCount, String exerciseVideo, String exerciseText){
        this.exerciseName = exerciseName;
        this.exerciseSet = exerciseSet;
        this.exerciseCount = exerciseCount;
        this.exerciseVideo = exerciseVideo;
        this.exerciseText = exerciseText;
    }
}