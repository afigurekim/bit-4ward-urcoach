package com.fourward.urcoach.repositories;


import com.fourward.urcoach.entities.MemExercises;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * MemExerciseRepository
 */
@Repository
public interface MemExercisesRepository extends JpaRepository<MemExercises, Long> {

}