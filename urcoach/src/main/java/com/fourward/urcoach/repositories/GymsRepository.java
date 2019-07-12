package com.fourward.urcoach.repositories;


import com.fourward.urcoach.entities.Gyms;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * GymRepository
 */
@Repository
public interface GymsRepository extends JpaRepository<Gyms, Long> {
    
}