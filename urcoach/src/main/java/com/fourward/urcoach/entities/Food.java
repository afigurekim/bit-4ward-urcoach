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
 * Food
 */
@Entity
@NoArgsConstructor(access = AccessLevel.PUBLIC)
@Getter
@ToString
@Table(name = "foods")
public class Food {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "food_id") private Long foodId;
    @Column(name = "food_name") private String foodName;
    @Column(name = "food_cal") private String foodCal;

    @Builder
    private Food(String foodName, String foodCal){

        this.foodName = foodName;
        this.foodCal = foodCal;
    }
}