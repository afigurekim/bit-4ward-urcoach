package com.fourward.urcoach.repositories;

import com.fourward.urcoach.entities.Exercise;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * ExerciseRepository
 */
@Repository
public interface ExerciseRepository extends JpaRepository<Exercise, Long>{

    
}