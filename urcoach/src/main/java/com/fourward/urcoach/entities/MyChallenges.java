package com.fourward.urcoach.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.springframework.stereotype.Component;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

/**
 * memChallenges
 */
@Component
@Entity
@NoArgsConstructor(access = AccessLevel.PUBLIC)
@Getter
@Setter
@ToString
@Table(name = "my_challenges")
public class MyChallenges {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "my_challenge_id") private Long myChallengeId;
    @Column(name = "my_challenge_name") private String myChallengeName;

    @Column(name = "my_challenge_exercise1_name") private String myChallengeExercise1Name;
    @Column(name = "my_challenge_exercise1_video") private String myChallengeExercise1Video;

    @Column(name = "my_challenge_exercise2_name") private String myChallengeExercise2Name;
    @Column(name = "my_challenge_exercise2_video") private String myChallengeExercise2Video;

    @Column(name = "my_challenge_exercise3_name") private String myChallengeExercise3Name;
    @Column(name = "my_challenge_exercise3_video") private String myChallengeExercise3Video;

    @Column(name = "my_challenge_exercise4_name") private String myChallengeExercise4Name;
    @Column(name = "my_challenge_exercise4_video") private String myChallengeExercise4Video;

    @Column(name = "my_challenge_exercise5_name") private String myChallengeExercise5Name;
    @Column(name = "my_challenge_exercise5_video") private String myChallengeExercise5Video;

    @Column(name = "my_challenge_exercise6_name") private String myChallengeExercise6Name;
    @Column(name = "my_challenge_exercise6_video") private String myChallengeExercise6Video;

    @Column(name = "my_challenge_exercise7_name") private String myChallengeExercise7Name;
    @Column(name = "my_challenge_exercise7_video") private String myChallengeExercise7Video;

    @ManyToOne
    @JoinColumn(name = "member_id") 
    private Members memberId;

    @OneToOne
    @JoinColumn(name = "my_exercise_id")
    private MyExercises myExerciseId;
}