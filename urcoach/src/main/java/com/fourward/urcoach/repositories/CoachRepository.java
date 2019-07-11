package com.fourward.urcoach.repositories;

import com.fourward.urcoach.entities.Coach;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * CoachRepository
 */
@Repository
public interface CoachRepository extends JpaRepository<Coach, Long>{

    
}