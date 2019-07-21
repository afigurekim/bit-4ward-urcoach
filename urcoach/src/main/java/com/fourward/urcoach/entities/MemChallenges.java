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
@Table(name = "mem_challenges")
public class MemChallenges {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "mem_challenge_id") private Long memChallengeId;
    @Column(name = "mem_challenge_name") private String memChallengeName;

    @Column(name = "mem_challenge_exercise1") private String memChallengeExercise1;
    @Column(name = "mem_challenge_exercise1_video") private String memChallengeExercise1Video;
    @Column(name = "mem_challenge_exercise1_cal") private String memChallengeExercise1Cal;
    @Column(name = "mem_challenge_exercise1_set") private String memChallengeExercise1Set;
    @Column(name = "mem_challenge_exercise1_count") private String memChallengeExercise1Count;

    @Column(name = "mem_challenge_exercise2") private String memChallengeExercise2;
    @Column(name = "mem_challenge_exercise2_video") private String memChallengeExercise2Video;
    @Column(name = "mem_challenge_exercise2_cal") private String memChallengeExercise2Cal;
    @Column(name = "mem_challenge_exercise2_set") private String memChallengeExercise2Set;
    @Column(name = "mem_challenge_exercise2_count") private String memChallengeExercise2Count;

    @Column(name = "mem_challenge_exercise3") private String memChallengeExercise3;
    @Column(name = "mem_challenge_exercise3_video") private String memChallengeExercise3Video;
    @Column(name = "mem_challenge_exercise3_cal") private String memChallengeExercise3Cal;
    @Column(name = "mem_challenge_exercise3_set") private String memChallengeExercise3Set;
    @Column(name = "mem_challenge_exercise3_count") private String memChallengeExercise3Count;

    @Column(name = "mem_challenge_exercise4") private String memChallengeExercise4;
    @Column(name = "mem_challenge_exercise4_video") private String memChallengeExercise4Video;
    @Column(name = "mem_challenge_exercise4_cal") private String memChallengeExercise4Cal;
    @Column(name = "mem_challenge_exercise4_set") private String memChallengeExercise4Set;
    @Column(name = "mem_challenge_exercise4_count") private String memChallengeExercise4Count;

    @Column(name = "mem_challenge_exercise5") private String memChallengeExercise5;
    @Column(name = "mem_challenge_exercise5_video") private String memChallengeExercise5Video;
    @Column(name = "mem_challenge_exercise5_cal") private String memChallengeExercise5Cal;
    @Column(name = "mem_challenge_exercise5_set") private String memChallengeExercise5Set;
    @Column(name = "mem_challenge_exercise5_count") private String memChallengeExercise5Count;

    @Column(name = "mem_challenge_exercise6") private String memChallengeExercise6;
    @Column(name = "mem_challenge_exercise6_video") private String memChallengeExercise6Video;
    @Column(name = "mem_challenge_exercise6_cal") private String memChallengeExercise6Cal;
    @Column(name = "mem_challenge_exercise6_set") private String memChallengeExercise6Set;
    @Column(name = "mem_challenge_exercise6_count") private String memChallengeExercise6Count;

    @Column(name = "mem_challenge_exercise7") private String memChallengeExercise7;
    @Column(name = "mem_challenge_exercise7_video") private String memChallengeExercise7Video;
    @Column(name = "mem_challenge_exercise7_cal") private String memChallengeExercise7Cal;
    @Column(name = "mem_challenge_exercise7_set") private String memChallengeExercise7Set;
    @Column(name = "mem_challenge_exercise7_count") private String memChallengeExercise7Count;

    @ManyToOne
    @JoinColumn(name = "member_id") 
    private Members memberId;

}