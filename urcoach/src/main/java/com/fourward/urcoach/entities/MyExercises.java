package com.fourward.urcoach.entities;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

<<<<<<< HEAD
import com.fasterxml.jackson.annotation.JsonIgnore;

=======
>>>>>>> DH
import org.springframework.stereotype.Component;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

/**
<<<<<<< HEAD
 * MemExercise
=======
 * MyExercises
>>>>>>> DH
 */

@Component
@Entity
@NoArgsConstructor(access = AccessLevel.PUBLIC)
@Getter
@Setter
@ToString
@Table(name = "my_exercises")
public class MyExercises implements Serializable{

    private static final long serialVersionUID = 1L;
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
<<<<<<< HEAD
    @Column(name = "my_exercise_id") private Long          myExerciseId;
    @Column(name = "my_exercise_date") private String      myExerciseDate;
    @Column(name = "my_exercise_time") private String      myExerciseTime;
    @Column(name = "my_exercise_cal") private String       myExerciseCal;
    @Column(name = "my_exercise_complete") private Boolean myExerciseComplete;
    @Column(name = "my_exercise_set") private String       myExerciseSet;
    @Column(name = "my_exercise_count") private String     myExerciseCount;

    @ManyToOne
    @JsonIgnore
=======
    @Column(name = "my_exercise_id") private Long myExerciseId;
    @Column(name = "my_exercise_date") private String myExerciseDate;
    @Column(name = "my_exercise_time") private String myExerciseTime;
    @Column(name = "my_exercise_order") private String myExerciseOrder;
    @Column(name = "my_exercise_cal") private String myExerciseCal;
    @Column(name = "my_exercise_complete") private Boolean myExerciseComplete;
    @Column(name = "my_exercise_set") private String myExerciseSet;
    @Column(name = "my_exercise_count") private String myExerciseCount;

    @ManyToOne
>>>>>>> DH
    @JoinColumn(name = "member_id") private Members memberId;

    @ManyToOne
    @JoinColumn(name = "exercise_id") private Exercises exerciseId;
<<<<<<< HEAD

    @ManyToOne
    @JoinColumn(name = "myChallenge_id")
    private MyChallenges myChallengeId;
   
    @Builder
    private MyExercises(String myExerciseDate, Boolean myExerciseComplete, String myExerciseTime, String myExerciseCal,
                            String myExerciseSet, String myExerciseCount){
=======
   
    @Builder
    private MyExercises(String myExerciseDate, Boolean myExerciseComplete, String myExerciseTime, String myExerciseCal,
                            String myExerciseSet, String myExerciseCount, String myExerciseOrder){
>>>>>>> DH

        this.myExerciseDate = myExerciseDate;
        this.myExerciseComplete = myExerciseComplete;
        this.myExerciseTime = myExerciseTime;
        this.myExerciseCal = myExerciseCal;
        this.myExerciseCount = myExerciseCount;
        this.myExerciseSet = myExerciseSet;
<<<<<<< HEAD
    
=======
        this.myExerciseOrder = myExerciseOrder;

>>>>>>> DH
    }
}