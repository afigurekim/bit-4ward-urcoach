package com.fourward.urcoach.entities;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
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
@Table(name = "challenges")
public class Challenges implements Serializable{

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "challenge_id") Long challengeId;
    @Column(name = "challenge_name") private String challengeName;
    @Column(name = "challenge_text") private String challengeText;
    @Column(name = "challenge_photo") private String challengePhoto;

    @OneToMany(mappedBy = "challenges")
    private List<Exercises> Exercises = new ArrayList<>();

    @Builder
    private Challenges(String challengeName, String challengeText, String challengePhoto){
        this.challengeName = challengeName;
        this.challengeText = challengeText;
        this.challengePhoto = challengePhoto;
    }
}