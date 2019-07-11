package com.fourward.urcoach.entities;

import java.io.Serializable;

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
 * Challenge
 */
@Entity
@NoArgsConstructor(access = AccessLevel.PUBLIC)
@Getter
@ToString
@Table(name = "challenge")
public class Challenge implements Serializable{

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "challenge_id") Long challengeId;
    @Column(name = "challenge_name") private String challengeName;
    @Column(name = "challenge_text") private String challengeText;
    @Column(name = "challenge_photo") private String challengePhoto;
    @Column(name = "member_id") private Long memberId;

    @Builder
    private Challenge(String challengeName, String challengeText, String challengePhoto){
        this.challengeName = challengeName;
        this.challengeText = challengeText;
        this.challengePhoto = challengePhoto;
    }
}