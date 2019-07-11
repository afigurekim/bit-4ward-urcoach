package com.fourward.urcoach.repositories;

import com.fourward.urcoach.entities.Gym;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * GymRepository
 */
@Repository
public interface GymRepository extends JpaRepository<Gym, Long>{
    
}