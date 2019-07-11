package com.fourward.urcoach.repositories;

import com.fourward.urcoach.entities.Meal;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * MealRepository
 */
@Repository
public interface MealRepository extends JpaRepository<Meal, Long>{

    
}