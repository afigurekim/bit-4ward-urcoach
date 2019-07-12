package com.fourward.urcoach.entities;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.hibernate.annotations.Cascade;
import org.hibernate.annotations.CascadeType;
import org.springframework.stereotype.Component;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

/**
 * Food
 */
@Component
@Entity
@NoArgsConstructor(access = AccessLevel.PUBLIC)
@Getter
@ToString
@Table(name = "foods")
public class Foods {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "food_id") private Long foodId;
    @Column(name = "food_name") private String foodName;
    @Column(name = "food_cal") private String foodCal;

    @OneToMany(mappedBy = "foods")
    @Cascade(CascadeType.DELETE)
    private List<Meals> meals = new ArrayList<>();

    @Builder
    private Foods(String foodName, String foodCal){

        this.foodName = foodName;
        this.foodCal = foodCal;
    }
}