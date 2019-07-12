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
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

/**
 * Meal
 */
@Component
@Entity
@ToString
@NoArgsConstructor(access = AccessLevel.PUBLIC)
@Getter
@Table(name = "Meals")
public class Meals {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "meal_id") private Long mealId;
    @Column(name = "meal_date") private String mealDate;
    @Column(name = "meal_time") private String mealTime;
    @Column(name = "meal_cal") private String mealCal;

    @ManyToOne
    @JoinColumn(name = "member_id") private Members members;

    @ManyToOne
    @JoinColumn(name = "food_name") private Foods foods;

    @Builder
    private Meals(String mealDate, String mealTime, String mealCal){

        this.mealDate = mealDate;
        this.mealTime = mealTime;
        this.mealCal = mealCal;
    }
}