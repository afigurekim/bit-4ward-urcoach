package com.fourward.urcoach.repositories;

import com.fourward.urcoach.entities.Food;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * FoodRepository
 */
@Repository
public interface FoodRepository extends JpaRepository<Food, Long>{

    
}