package com.fourward.urcoach.repositories;

import org.springframework.data.querydsl.QuerydslPredicateExecutor;
import org.springframework.data.jpa.repository.JpaRepository;
<<<<<<< HEAD
import com.fourward.urcoach.entities.Gyms;
=======
import org.springframework.data.querydsl.QuerydslPredicateExecutor;
>>>>>>> origin/YJ
import org.springframework.stereotype.Repository;

/**
 * GymRepository
 */

@Repository
<<<<<<< HEAD
public interface GymsRepository extends JpaRepository<Gyms, Long>,QuerydslPredicateExecutor<Gyms>{

=======
public interface GymsRepository extends JpaRepository<Gyms, Long>, QuerydslPredicateExecutor<Gyms> {
>>>>>>> origin/YJ
    
}