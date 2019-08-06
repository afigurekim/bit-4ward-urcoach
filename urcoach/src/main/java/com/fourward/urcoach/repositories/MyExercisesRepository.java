package com.fourward.urcoach.repositories;

<<<<<<< HEAD

import java.util.List;

import com.fourward.urcoach.entities.MyChallenges;
=======
>>>>>>> DH
import com.fourward.urcoach.entities.MyExercises;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * MemExerciseRepository
 */
@Repository
public interface MyExercisesRepository extends JpaRepository<MyExercises, Long> {
<<<<<<< HEAD
    public Iterable<MyExercises> findByMyExerciseDate(String myExerciseDate);

    // findByMyChallengeId
    List<MyExercises> findByMyChallengeId(MyChallenges myChallengeId);
=======
    
    public Iterable<MyExercises> findByMyExerciseDate(String myExerciseDate);
>>>>>>> DH
}