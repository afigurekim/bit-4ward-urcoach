package com.fourward.urcoach.repositories;

import com.fourward.urcoach.entities.MyChallenges;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * MemChallengesRepository
 */
@Repository
public interface MyChallengesRepository extends JpaRepository<MyChallenges, Long>{

    
}