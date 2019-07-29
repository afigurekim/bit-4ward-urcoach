package com.fourward.urcoach.entities;

import java.io.Serializable;

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
public class MyChallenges implements Serializable{

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "my_challenge_id") private Long myChallengeId;
    @Column(name = "my_challenge_name") private String myChallengeName;

    @ManyToOne
    @JoinColumn(name = "member_id") 
    private Members memberId;

    @OneToOne
    @JoinColumn(name = "my_exercise_id")
    private MyExercises myExerciseId;
}