package com.fourward.urcoach.repositories;

import com.fourward.urcoach.entities.Coaches;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * CoachRepository
 */
@Repository
public interface CoachesRepository extends JpaRepository<Coaches, Long>{

    
}