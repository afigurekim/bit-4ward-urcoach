package com.fourward.urcoach.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

/**
 * Meal
 */
@Entity
@ToString
@NoArgsConstructor(access = AccessLevel.PUBLIC)
@Getter
@Table(name = "meal")
public class Meal {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long mealId;
    private String mealDate;
    private String mealTime;

    @ManyToOne
    @JoinColumn(name = "member_id") private Member memberId;

    @JoinColumn(name = "food_name") private Food foodName;
    @JoinColumn(name = "food_cal") private Food foodCal;

    @Builder
    private Meal(String mealDate, String mealTime){

        this.mealDate = mealDate;
        this.mealTime = mealTime;
    }
}