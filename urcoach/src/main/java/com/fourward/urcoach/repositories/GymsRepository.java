package com.fourward.urcoach.repositories;

import org.springframework.data.querydsl.QuerydslPredicateExecutor;
import org.springframework.data.jpa.repository.JpaRepository;
import com.fourward.urcoach.entities.Gyms;
import org.springframework.stereotype.Repository;

/**
 * GymRepository
 */

@Repository
public interface GymsRepository extends JpaRepository<Gyms, Long>,QuerydslPredicateExecutor<Gyms>{

    
}