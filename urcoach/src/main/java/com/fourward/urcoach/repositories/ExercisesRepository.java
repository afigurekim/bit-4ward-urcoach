package com.fourward.urcoach.repositories;

import com.fourward.urcoach.entities.Exercises;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * ExerciseRepository
 */
@Repository
public interface ExercisesRepository extends JpaRepository<Exercises, Long> {

    
}