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
 * Routine
 */

@Entity
@NoArgsConstructor(access = AccessLevel.PUBLIC)
@Getter
@ToString
@Table(name = "routine")
public class Routine {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "routine_id") Long routineId;
    
    @Column(name = "routine_name") private String routineName;
    @Column(name = "challenge_id") private String challengeId;

    @Builder
    private Routine(String routineName){
        this.routineName = routineName;
    }
}