package com.fourward.urcoach.repositories;

import com.fourward.urcoach.entities.MemExercise;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * MemExerciseRepository
 */
@Repository
public interface MemExerciseRepository extends JpaRepository<MemExercise, Long>{
    
}