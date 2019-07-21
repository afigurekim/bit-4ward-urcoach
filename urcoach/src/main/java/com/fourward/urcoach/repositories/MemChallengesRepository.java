package com.fourward.urcoach.repositories;

import com.fourward.urcoach.entities.MemChallenges;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * MemChallengesRepository
 */
@Repository
public interface MemChallengesRepository extends JpaRepository<MemChallenges, Long>{

    
}